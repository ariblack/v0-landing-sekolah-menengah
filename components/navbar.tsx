"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-school-primary">SMK Nusantara Teknologi</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/#about" className="transition-colors hover:text-school-primary">
            Tentang Kami
          </Link>
          <Link href="/#departments" className="transition-colors hover:text-school-primary">
            Jurusan
          </Link>
          <Link href="/#extracurriculars" className="transition-colors hover:text-school-primary">
            Ekstrakurikuler
          </Link>
          <Link href="/#teachers" className="transition-colors hover:text-school-primary">
            Guru
          </Link>
          <Link href="/#gallery" className="transition-colors hover:text-school-primary">
            Galeri
          </Link>
          <Link href="/#testimonials" className="transition-colors hover:text-school-primary">
            Testimoni
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-school-primary">
            Kontak
          </Link>
          <Button asChild className="bg-school-primary hover:bg-school-primary/90">
            <Link href="/#registration">Pendaftaran</Link>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/#about"
              className="text-sm font-medium transition-colors hover:text-school-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="/#departments"
              className="text-sm font-medium transition-colors hover:text-school-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Jurusan
            </Link>
            <Link
              href="/#extracurriculars"
              className="text-sm font-medium transition-colors hover:text-school-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Ekstrakurikuler
            </Link>
            <Link
              href="/#teachers"
              className="text-sm font-medium transition-colors hover:text-school-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Guru
            </Link>
            <Link
              href="/#gallery"
              className="text-sm font-medium transition-colors hover:text-school-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeri
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium transition-colors hover:text-school-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimoni
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium transition-colors hover:text-school-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </Link>
            <Button
              asChild
              className="bg-school-primary hover:bg-school-primary/90 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/#registration">Pendaftaran</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
