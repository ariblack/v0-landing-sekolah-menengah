import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from './prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'vocational-school-secret';

export async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(userId, email) {
  return jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export async function getUserFromToken(token) {
  if (!token) return null;
  
  const decoded = verifyToken(token);
  if (!decoded) return null;
  
  const user = await prisma.user.findUnique({
    where: { id: decoded.userId },
    select: { id: true, email: true, name: true, role: true }
  });
  
  return user;
}
