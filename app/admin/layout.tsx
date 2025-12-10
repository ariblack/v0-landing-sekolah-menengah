import type React from "react"
import { getSession } from "@/lib/auth1"
import Link from "next/link"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { BarChart, BookOpen, Home, ImageIcon, LogOut, MessageSquare, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  // Determine current pathname reliably on the server
  const h = headers()
  const pathname =
    h.get("x-invoke-path") ??
    h.get("x-nextjs-pathname") ??
    (() => {
      try {
        return new URL(h.get("referer") || "http://localhost").pathname
      } catch {
        return "/"
      }
    })()

  // If not authenticated, redirect to login except when already on /admin/login
  if (!session && pathname !== "/admin/login") {
    redirect("/admin/login")
  }

  // If authenticated and on login page, send to dashboard
  if (session && pathname === "/admin/login") {
    redirect("/admin/dashboard")
  }

  // If not authenticated and on login page, render login without admin chrome
  if (!session) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-400 text-sm">SMK Nusantara Teknologi</p>
        </div>

        <nav className="space-y-1 flex-1">
          <Link href="/admin/dashboard">
            <Button variant="ghost" className="w-full justify-start text-white">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/admin/departments">
            <Button variant="ghost" className="w-full justify-start text-white">
              <BookOpen className="mr-2 h-4 w-4" />
              Jurusan
            </Button>
          </Link>
          <Link href="/admin/teachers">
            <Button variant="ghost" className="w-full justify-start text-white">
              <Users className="mr-2 h-4 w-4" />
              Guru
            </Button>
          </Link>
          <Link href="/admin/extracurriculars">
            <Button variant="ghost" className="w-full justify-start text-white">
              <BarChart className="mr-2 h-4 w-4" />
              Ekstrakurikuler
            </Button>
          </Link>
          <Link href="/admin/gallery">
            <Button variant="ghost" className="w-full justify-start text-white">
              <ImageIcon className="mr-2 h-4 w-4" />
              Galeri
            </Button>
          </Link>
          <Link href="/admin/testimonials">
            <Button variant="ghost" className="w-full justify-start text-white">
              <MessageSquare className="mr-2 h-4 w-4" />
              Testimoni
            </Button>
          </Link>
          <Link href="/admin/school-info">
            <Button variant="ghost" className="w-full justify-start text-white">
              <Settings className="mr-2 h-4 w-4" />
              Info Sekolah
            </Button>
          </Link>
        </nav>

        <form action="/api/auth/logout" method="post">
          <Button variant="ghost" className="w-full justify-start text-white mt-auto">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </form>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">{children}</main>
    </div>
  )
}
