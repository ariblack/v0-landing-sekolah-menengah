import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { db } from "@/lib/db"

export default async function GalleryPage() {
  const gallery = db.getGallery()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Galeri Kegiatan</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-lg">
                  <div className="aspect-square relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.category}</p>
                    <p className="text-white/60 text-xs">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
