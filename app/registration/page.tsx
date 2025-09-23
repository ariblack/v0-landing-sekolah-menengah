import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { db } from "@/lib/db"

export default async function RegistrationPage() {
  const departments = db.getDepartments()
  const schoolInfo = db.getSchoolInfo()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Pendaftaran Siswa Baru</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Silakan lengkapi formulir pendaftaran di bawah ini untuk mendaftar sebagai siswa baru di {schoolInfo.name}.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Formulir Pendaftaran</CardTitle>
                  <CardDescription>
                    Periode pendaftaran: {schoolInfo.registrationInfo.startDate} - {schoolInfo.registrationInfo.endDate}
                  </CardDescription>
                </CardHeader>
                <form>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Data Pribadi</h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nama Lengkap</Label>
                          <Input id="name" name="name" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="nisn">NISN</Label>
                          <Input id="nisn" name="nisn" required />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="birthplace">Tempat Lahir</Label>
                          <Input id="birthplace" name="birthplace" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="birthdate">Tanggal Lahir</Label>
                          <Input id="birthdate" name="birthdate" type="date" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gender">Jenis Kelamin</Label>
                        <Select name="gender">
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih jenis kelamin" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Laki-laki</SelectItem>
                            <SelectItem value="female">Perempuan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Alamat Lengkap</Label>
                        <Textarea id="address" name="address" rows={3} required />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Nomor Telepon</Label>
                          <Input id="phone" name="phone" type="tel" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" required />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Data Orang Tua/Wali</h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="parent_name">Nama Orang Tua/Wali</Label>
                          <Input id="parent_name" name="parent_name" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="parent_phone">Nomor Telepon Orang Tua/Wali</Label>
                          <Input id="parent_phone" name="parent_phone" type="tel" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="parent_job">Pekerjaan Orang Tua/Wali</Label>
                        <Input id="parent_job" name="parent_job" required />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Data Pendidikan</h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="school_origin">Asal Sekolah</Label>
                          <Input id="school_origin" name="school_origin" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="graduation_year">Tahun Lulus</Label>
                          <Input id="graduation_year" name="graduation_year" type="number" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="department">Jurusan yang Dipilih</Label>
                        <Select name="department">
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih jurusan" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept.id} value={dept.id}>
                                {dept.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button className="w-full bg-school-primary hover:bg-school-primary/90">Kirim Pendaftaran</Button>
                  </CardFooter>
                </form>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Pendaftaran</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Persyaratan</h3>
                    <ul className="space-y-1 list-disc pl-5 text-sm">
                      {schoolInfo.registrationInfo.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Biaya Pendaftaran</h3>
                    <ul className="space-y-1 text-sm">
                      {schoolInfo.registrationInfo.fees.map((fee, index) => (
                        <li key={index} className="flex justify-between">
                          <span>{fee.name}</span>
                          <span className="font-medium">Rp {fee.amount.toLocaleString("id-ID")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Kontak Informasi</h3>
                    <p className="text-sm mb-1">Telepon: {schoolInfo.phone}</p>
                    <p className="text-sm mb-1">Email: {schoolInfo.email}</p>
                    <p className="text-sm">Website: {schoolInfo.website}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
