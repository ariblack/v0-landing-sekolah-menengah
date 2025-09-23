import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { db } from "@/lib/db"
import { updateSchoolInfo } from "@/app/actions"
import { redirect } from "next/navigation"

export default async function SchoolInfoPage() {
  const schoolInfo = db.getSchoolInfo()

  const handleUpdate = async (formData: FormData) => {
    "use server"
    await updateSchoolInfo(formData)
    redirect("/admin/school-info")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Informasi Sekolah</h1>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Form Informasi Sekolah</CardTitle>
        </CardHeader>
        <form action={handleUpdate}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Sekolah</Label>
              <Input id="name" name="name" defaultValue={schoolInfo.name} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Alamat</Label>
              <Input id="address" name="address" defaultValue={schoolInfo.address} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Telepon</Label>
                <Input id="phone" name="phone" defaultValue={schoolInfo.phone} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" defaultValue={schoolInfo.email} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" name="website" defaultValue={schoolInfo.website} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mapUrl">URL Peta (embed Google Maps)</Label>
              <Input id="mapUrl" name="mapUrl" defaultValue={schoolInfo.mapUrl} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vision">Visi</Label>
              <Textarea id="vision" name="vision" rows={3} defaultValue={schoolInfo.vision} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mission">Misi (satu per baris)</Label>
              <Textarea id="mission" name="mission" rows={5} defaultValue={schoolInfo.mission.join("\n")} required />
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" className="bg-school-primary hover:bg-school-primary/90 ml-auto">
              Simpan Perubahan
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
