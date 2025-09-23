import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/db"
import { BookOpen, ImageIcon, MessageSquare, Users } from "lucide-react"
import Link from "next/link"

export default async function DashboardPage() {
  const departments = db.getDepartments()
  const teachers = db.getTeachers()
  const gallery = db.getGallery()
  const testimonials = db.getTestimonials()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Jurusan</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{departments.length}</div>
            <p className="text-xs text-muted-foreground">Program keahlian yang tersedia</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Guru</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teachers.length}</div>
            <p className="text-xs text-muted-foreground">Tenaga pendidik aktif</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Galeri</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{gallery.length}</div>
            <p className="text-xs text-muted-foreground">Foto kegiatan sekolah</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Testimoni</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{testimonials.length}</div>
            <p className="text-xs text-muted-foreground">Testimoni dari alumni</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Jurusan Terbaru</CardTitle>
            <CardDescription>Daftar program keahlian yang tersedia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departments.slice(0, 5).map((department) => (
                <div key={department.id} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{department.name}</p>
                    <p className="text-sm text-muted-foreground line-clamp-1">{department.description}</p>
                  </div>
                </div>
              ))}
              <div className="mt-4 text-right">
                <Link href="/admin/departments" className="text-sm text-school-primary hover:underline">
                  Lihat semua jurusan
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Guru Terbaru</CardTitle>
            <CardDescription>Daftar tenaga pendidik aktif</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teachers.slice(0, 5).map((teacher) => (
                <div key={teacher.id} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{teacher.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {teacher.position} - {teacher.department}
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-4 text-right">
                <Link href="/admin/teachers" className="text-sm text-school-primary hover:underline">
                  Lihat semua guru
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
