import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/db"
import { Edit, Plus, Trash } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default async function TeachersPage() {
  const teachers = db.getTeachers()

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manajemen Guru</h1>
        <Button asChild className="bg-school-primary hover:bg-school-primary/90">
          <Link href="/admin/teachers/add">
            <Plus className="mr-2 h-4 w-4" />
            Tambah Guru
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teachers.map((teacher) => (
          <Card key={teacher.id}>
            <div className="pt-6 px-6 flex justify-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image src={teacher.image || "/placeholder.svg"} alt={teacher.name} fill className="object-cover" />
              </div>
            </div>
            <CardHeader className="pb-2 text-center">
              <CardTitle>{teacher.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600">{teacher.position}</p>
              <p className="text-sm text-school-primary mb-4">{teacher.department}</p>
              <div className="flex justify-center space-x-2">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/admin/teachers/edit/${teacher.id}`}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </Button>
                <form action={`/api/teachers/delete?id=${teacher.id}`} method="post">
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
