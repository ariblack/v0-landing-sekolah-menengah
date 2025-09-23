import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { db } from "@/lib/db"
import { notFound } from "next/navigation"

export default async function DepartmentPage({ params }: { params: { id: string } }) {
  const department = db.getDepartment(params.id)

  if (!department) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{department.name}</h1>
                <p className="text-gray-600 mb-8">{department.description}</p>

                <h2 className="text-xl font-bold mb-4">Kompetensi Keahlian</h2>
                <ul className="space-y-2 mb-8">
                  {department.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-school-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="bg-school-primary hover:bg-school-primary/90">
                  <Link href="/#registration">Daftar Sekarang</Link>
                </Button>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={department.image || "/placeholder.svg"}
                  alt={department.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
