"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { addDepartment } from "@/app/actions"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddDepartmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await addDepartment(formData)
      router.push("/admin/departments")
    } catch (error) {
      console.error("Error adding department:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Tambah Jurusan</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Form Tambah Jurusan</CardTitle>
        </CardHeader>
        <form action={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Jurusan</Label>
              <Input id="name" name="name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea id="description" name="description" rows={4} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">URL Gambar</Label>
              <Input
                id="image"
                name="image"
                placeholder="/placeholder.svg?height=300&width=400"
                defaultValue="/placeholder.svg?height=300&width=400"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="features">Fitur/Keunggulan (satu per baris)</Label>
              <Textarea id="features" name="features" rows={5} placeholder="Fitur 1&#10;Fitur 2&#10;Fitur 3" required />
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => router.push("/admin/departments")}>
              Batal
            </Button>
            <Button type="submit" className="bg-school-primary hover:bg-school-primary/90" disabled={isSubmitting}>
              {isSubmitting ? "Menyimpan..." : "Simpan"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
