import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/db"
import { Edit, Plus, Trash } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default async function DepartmentsPage() {
  const departments = db.getDepartments()

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manajemen Jurusan</h1>
        <Button asChild className="bg-school-primary hover:bg-school-primary/90">
          <Link href="/admin/departments/add">
            <Plus className="mr-2 h-4 w-4" />
            Tambah Jurusan
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((department) => (
          <Card key={department.id}>
            <div className="aspect-video relative">
              <Image
                src={department.image || "/placeholder.svg"}
                alt={department.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{department.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{department.description}</p>
              <div className="flex space-x-2">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/admin/departments/edit/${department.id}`}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </Button>
                <form action={`/api/departments/delete?id=${department.id}`} method="post">
                  <Button variant="destructive" size="sm" type="submit">
                    <Trash className="mr-2 h-4 w-4" />
                    Hapus
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
