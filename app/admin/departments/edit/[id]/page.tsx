import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { db } from "@/lib/db"
import { updateDepartment } from "@/app/actions"
import { notFound, redirect } from "next/navigation"

export default async function EditDepartmentPage({ params }: { params: { id: string } }) {
  const department = db.getDepartment(params.id)

  if (!department) {
    notFound()
  }

  const handleUpdate = async (formData: FormData) => {
    "use server"
    await updateDepartment(params.id, formData)
    redirect("/admin/departments")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Jurusan</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Form Edit Jurusan</CardTitle>
        </CardHeader>
        <form action={handleUpdate}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Jurusan</Label>
              <Input id="name" name="name" defaultValue={department.name} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea id="description" name="description" rows={4} defaultValue={department.description} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">URL Gambar</Label>
              <Input id="image" name="image" defaultValue={department.image} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="features">Fitur/Keunggulan (satu per baris)</Label>
              <Textarea id="features" name="features" rows={5} defaultValue={department.features.join("\n")} required />
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" formAction="/admin/departments">
              Batal
            </Button>
            <Button type="submit" className="bg-school-primary hover:bg-school-primary/90">
              Simpan
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
