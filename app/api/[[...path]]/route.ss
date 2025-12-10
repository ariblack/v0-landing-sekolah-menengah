import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, comparePassword, generateToken, getUserFromToken } from '@/lib/auth';

// Helper to get auth user from request
async function getAuthUser(request) {
  const token = request.cookies.get('token')?.value || request.headers.get('authorization')?.replace('Bearer ', '');
  return await getUserFromToken(token);
}

// Helper for JSON responses
function jsonResponse(data, status = 200) {
  return NextResponse.json(data, { status });
}

// POST handler
export async function POST(request, { params }) {
  try {
    const path = params?.path ? params.path.join('/') : '';
    const body = await request.json();

    // Auth endpoints
    if (path === 'auth/login') {
      const { email, password } = body;
      
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return jsonResponse({ error: 'Invalid credentials' }, 401);
      }
      
      const isValid = await comparePassword(password, user.password);
      if (!isValid) {
        return jsonResponse({ error: 'Invalid credentials' }, 401);
      }
      
      const token = generateToken(user.id, user.email);
      const response = jsonResponse({ 
        user: { id: user.id, email: user.email, name: user.name, role: user.role },
        token 
      });
      
      response.cookies.set('token', token, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });
      
      return response;
    }
    
    if (path === 'auth/register') {
      const { email, password, name } = body;
      
      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing) {
        return jsonResponse({ error: 'User already exists' }, 400);
      }
      
      const hashedPassword = await hashPassword(password);
      const user = await prisma.user.create({
        data: { email, password: hashedPassword, name, role: 'admin' }
      });
      
      const token = generateToken(user.id, user.email);
      const response = jsonResponse({ 
        user: { id: user.id, email: user.email, name: user.name, role: user.role },
        token 
      });
      
      response.cookies.set('token', token, { 
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7
      });
      
      return response;
    }

    // Protected routes - require authentication
    const user = await getAuthUser(request);
    if (!user && !path.startsWith('public/')) {
      return jsonResponse({ error: 'Unauthorized' }, 401);
    }

    // Programs
    if (path === 'programs' || path === 'public/programs') {
      const program = await prisma.program.create({ data: body });
      return jsonResponse(program, 201);
    }

    // Faculty
    if (path === 'faculty' || path === 'public/faculty') {
      const faculty = await prisma.faculty.create({ data: body });
      return jsonResponse(faculty, 201);
    }

    // Announcements
    if (path === 'announcements' || path === 'public/announcements') {
      const announcement = await prisma.announcement.create({ data: body });
      return jsonResponse(announcement, 201);
    }

    // Events
    if (path === 'events' || path === 'public/events') {
      const event = await prisma.event.create({ 
        data: {
          ...body,
          date: new Date(body.date)
        } 
      });
      return jsonResponse(event, 201);
    }

    // Gallery
    if (path === 'gallery' || path === 'public/gallery') {
      const gallery = await prisma.gallery.create({ data: body });
      return jsonResponse(gallery, 201);
    }

    // Applications (no auth required for submission)
    if (path === 'applications') {
      const application = await prisma.application.create({ data: body });
      return jsonResponse(application, 201);
    }

    return jsonResponse({ error: 'Not found' }, 404);
  } catch (error) {
    console.error('POST Error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// GET handler
export async function GET(request, { params }) {
  try {
    const path = params?.path ? params.path.join('/') : '';
    const { searchParams } = new URL(request.url);

    // Auth check
    if (path === 'auth/me') {
      const user = await getAuthUser(request);
      if (!user) {
        return jsonResponse({ error: 'Unauthorized' }, 401);
      }
      return jsonResponse(user);
    }

    if (path === 'auth/logout') {
      const response = jsonResponse({ message: 'Logged out' });
      response.cookies.delete('token');
      return response;
    }

    // Public routes
    if (path === 'programs' || path === 'public/programs') {
      const programs = await prisma.program.findMany({
        where: { active: true },
        orderBy: { createdAt: 'desc' }
      });
      return jsonResponse(programs);
    }

    if (path === 'faculty' || path === 'public/faculty') {
      const faculty = await prisma.faculty.findMany({
        where: { active: true },
        orderBy: { createdAt: 'desc' }
      });
      return jsonResponse(faculty);
    }

    if (path === 'announcements' || path === 'public/announcements') {
      const announcements = await prisma.announcement.findMany({
        where: { active: true },
        orderBy: { createdAt: 'desc' },
        take: 10
      });
      return jsonResponse(announcements);
    }

    if (path === 'events' || path === 'public/events') {
      const events = await prisma.event.findMany({
        where: { 
          active: true,
          date: { gte: new Date() }
        },
        orderBy: { date: 'asc' }
      });
      return jsonResponse(events);
    }

    if (path === 'gallery' || path === 'public/gallery') {
      const gallery = await prisma.gallery.findMany({
        where: { active: true },
        orderBy: { createdAt: 'desc' }
      });
      return jsonResponse(gallery);
    }

    // Protected routes
    const user = await getAuthUser(request);
    if (!user) {
      return jsonResponse({ error: 'Unauthorized' }, 401);
    }

    if (path === 'applications') {
      const applications = await prisma.application.findMany({
        orderBy: { createdAt: 'desc' }
      });
      return jsonResponse(applications);
    }

    if (path === 'stats') {
      const [programCount, facultyCount, applicationCount, eventCount] = await Promise.all([
        prisma.program.count({ where: { active: true } }),
        prisma.faculty.count({ where: { active: true } }),
        prisma.application.count(),
        prisma.event.count({ where: { active: true } })
      ]);
      return jsonResponse({ 
        programs: programCount, 
        faculty: facultyCount, 
        applications: applicationCount,
        events: eventCount
      });
    }

    return jsonResponse({ error: 'Not found' }, 404);
  } catch (error) {
    console.error('GET Error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// PUT handler
export async function PUT(request, { params }) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return jsonResponse({ error: 'Unauthorized' }, 401);
    }

    const path = params?.path ? params.path.join('/') : '';
    const body = await request.json();
    const id = body.id;

    if (!id) {
      return jsonResponse({ error: 'ID required' }, 400);
    }

    if (path === 'programs') {
      const program = await prisma.program.update({
        where: { id },
        data: body
      });
      return jsonResponse(program);
    }

    if (path === 'faculty') {
      const faculty = await prisma.faculty.update({
        where: { id },
        data: body
      });
      return jsonResponse(faculty);
    }

    if (path === 'announcements') {
      const announcement = await prisma.announcement.update({
        where: { id },
        data: body
      });
      return jsonResponse(announcement);
    }

    if (path === 'events') {
      const event = await prisma.event.update({
        where: { id },
        data: {
          ...body,
          date: body.date ? new Date(body.date) : undefined
        }
      });
      return jsonResponse(event);
    }

    if (path === 'gallery') {
      const gallery = await prisma.gallery.update({
        where: { id },
        data: body
      });
      return jsonResponse(gallery);
    }

    if (path === 'applications') {
      const application = await prisma.application.update({
        where: { id },
        data: body
      });
      return jsonResponse(application);
    }

    return jsonResponse({ error: 'Not found' }, 404);
  } catch (error) {
    console.error('PUT Error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}

// DELETE handler
export async function DELETE(request, { params }) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return jsonResponse({ error: 'Unauthorized' }, 401);
    }

    const path = params?.path ? params.path.join('/') : '';
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return jsonResponse({ error: 'ID required' }, 400);
    }

    if (path === 'programs') {
      await prisma.program.delete({ where: { id: parseInt(id) } });
      return jsonResponse({ message: 'Deleted' });
    }

    if (path === 'faculty') {
      await prisma.faculty.delete({ where: { id: parseInt(id) } });
      return jsonResponse({ message: 'Deleted' });
    }

    if (path === 'announcements') {
      await prisma.announcement.delete({ where: { id: parseInt(id) } });
      return jsonResponse({ message: 'Deleted' });
    }

    if (path === 'events') {
      await prisma.event.delete({ where: { id: parseInt(id) } });
      return jsonResponse({ message: 'Deleted' });
    }

    if (path === 'gallery') {
      await prisma.gallery.delete({ where: { id: parseInt(id) } });
      return jsonResponse({ message: 'Deleted' });
    }

    if (path === 'applications') {
      await prisma.application.delete({ where: { id: parseInt(id) } });
      return jsonResponse({ message: 'Deleted' });
    }

    return jsonResponse({ error: 'Not found' }, 404);
  } catch (error) {
    console.error('DELETE Error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
}
