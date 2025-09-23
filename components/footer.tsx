import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-school-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SMK Nusantara Teknologi</h3>
            <p className="mb-4">
              Mencetak generasi unggul yang siap bersaing di era global dengan kompetensi dan karakter yang kuat.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-school-secondary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-school-secondary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-school-secondary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-school-secondary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="hover:text-school-secondary">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/#departments" className="hover:text-school-secondary">
                  Jurusan
                </Link>
              </li>
              <li>
                <Link href="/#extracurriculars" className="hover:text-school-secondary">
                  Ekstrakurikuler
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-school-secondary">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/#registration" className="hover:text-school-secondary">
                  Pendaftaran
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="hover:text-school-secondary">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>Jl. Pendidikan No. 123, Kota Jakarta, 12345</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>info@smknusantarateknologi.sch.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SMK Nusantara Teknologi. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
