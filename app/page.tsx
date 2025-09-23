import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Briefcase, ChevronRight, Laptop, Star, Users, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { db } from "@/lib/db"

export default async function Home() {
  const departments = db.getDepartments()
  const teachers = db.getTeachers()
  const extracurriculars = db.getExtracurriculars()
  const gallery = db.getGallery()
  const testimonials = db.getTestimonials()
  const schoolInfo = db.getSchoolInfo()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-school-primary text-white">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative container z-20 py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Siapkan Masa Depan Cerah di {schoolInfo.name}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Pendidikan kejuruan berkualitas yang mempersiapkan siswa untuk sukses di dunia kerja dan pendidikan tinggi
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-school-secondary hover:bg-school-secondary/90 text-black">
              <Link href="#registration">Daftar Sekarang</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="#departments">Lihat Jurusan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container">
          <h2 className="section-title">Tentang Kami</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="section-subtitle">Visi</h3>
              <p className="mb-8">{schoolInfo.vision}</p>

              <h3 className="section-subtitle">Misi</h3>
              <ul className="space-y-2 list-disc pl-5">
                {schoolInfo.mission.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Kegiatan Sekolah"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden mt-8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Fasilitas Sekolah"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Siswa Berprestasi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden mt-8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Kegiatan Praktik"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="section-title">Keunggulan Kami</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolInfo.advantages.map((advantage, index) => {
              const IconComponent =
                {
                  BookOpen: BookOpen,
                  Award: Award,
                  Laptop: Laptop,
                  Briefcase: Briefcase,
                  Users: Users,
                  Activity: Star,
                }[advantage.icon] || BookOpen

              return (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-school-primary/10 p-3 rounded-full w-fit mb-4">
                      <IconComponent className="h-6 w-6 text-school-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="section-padding">
        <div className="container">
          <h2 className="section-title">Program Keahlian</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((department) => (
              <Card
                key={department.id}
                className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all"
              >
                <div className="aspect-video relative">
                  <Image
                    src={department.image || "/placeholder.svg"}
                    alt={department.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{department.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{department.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/departments/${department.id}`}>
                      Selengkapnya <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section id="extracurriculars" className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="section-title">Kegiatan Ekstrakurikuler</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extracurriculars.map((extra) => (
              <Card key={extra.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
                <div className="aspect-video relative">
                  <Image src={extra.image || "/placeholder.svg"} alt={extra.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{extra.name}</h3>
                  <p className="text-gray-600 mb-2">{extra.description}</p>
                  <p className="text-sm font-medium text-school-primary">{extra.schedule}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="section-padding">
        <div className="container">
          <h2 className="section-title">Tenaga Pendidik</h2>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">Semua</TabsTrigger>
                <TabsTrigger value="TKJ">TKJ</TabsTrigger>
                <TabsTrigger value="RPL">RPL</TabsTrigger>
                <TabsTrigger value="MM">Multimedia</TabsTrigger>
                <TabsTrigger value="AK">Akuntansi</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teachers.map((teacher) => (
                  <Card
                    key={teacher.id}
                    className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all text-center"
                  >
                    <div className="pt-6 px-6">
                      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                        <Image
                          src={teacher.image || "/placeholder.svg"}
                          alt={teacher.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-bold">{teacher.name}</h3>
                      <p className="text-sm text-gray-600">{teacher.position}</p>
                      <p className="text-xs text-school-primary mt-1">{teacher.department}</p>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-xs text-gray-500">{teacher.education}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {["TKJ", "RPL", "MM", "AK"].map((dept) => (
              <TabsContent key={dept} value={dept} className="mt-0">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {teachers
                    .filter((teacher) => {
                      if (dept === "TKJ") return teacher.department === "Teknik Komputer dan Jaringan"
                      if (dept === "RPL") return teacher.department === "Rekayasa Perangkat Lunak"
                      if (dept === "MM") return teacher.department === "Multimedia"
                      if (dept === "AK") return teacher.department === "Akuntansi"
                      return false
                    })
                    .map((teacher) => (
                      <Card
                        key={teacher.id}
                        className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all text-center"
                      >
                        <div className="pt-6 px-6">
                          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                            <Image
                              src={teacher.image || "/placeholder.svg"}
                              alt={teacher.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="font-bold">{teacher.name}</h3>
                          <p className="text-sm text-gray-600">{teacher.position}</p>
                          <p className="text-xs text-school-primary mt-1">{teacher.department}</p>
                        </div>
                        <CardContent className="p-4">
                          <p className="text-xs text-gray-500">{teacher.education}</p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="section-title">Galeri Kegiatan</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square md:aspect-[4/3] relative">
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
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/gallery">Lihat Semua Foto</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="section-padding bg-school-primary text-white">
        <div className="container">
          <h2 className="section-title text-white">Informasi Pendaftaran</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Periode Pendaftaran</h3>
                <p className="mb-2">Mulai: {schoolInfo.registrationInfo.startDate}</p>
                <p>Berakhir: {schoolInfo.registrationInfo.endDate}</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Biaya Pendaftaran</h3>
                <ul className="space-y-2">
                  {schoolInfo.registrationInfo.fees.map((fee, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{fee.name}</span>
                      <span>Rp {fee.amount.toLocaleString("id-ID")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Persyaratan</h3>
                <ul className="space-y-2 list-disc pl-5">
                  {schoolInfo.registrationInfo.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Proses Pendaftaran</h3>
                <ol className="space-y-2 list-decimal pl-5">
                  {schoolInfo.registrationInfo.process.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-school-secondary hover:bg-school-secondary/90 text-black">
              <Link href="/registration">Daftar Sekarang</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="container">
          <h2 className="section-title">Testimoni Alumni</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-school-secondary fill-school-secondary" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="section-title">Hubungi Kami</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Informasi Kontak</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-school-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Alamat</h4>
                      <p className="text-gray-600">{schoolInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-school-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Telepon</h4>
                      <p className="text-gray-600">{schoolInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-school-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">{schoolInfo.email}</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4">Jam Operasional</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>07:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span>07:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu & Hari Libur</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src={schoolInfo.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Sekolah"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
