import { deleteDepartment } from "@/app/actions"
import { requireAuth } from "@/lib/auth"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  // Check authentication
  await requireAuth()

  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get("id")

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  try {
    await deleteDepartment(id)
    return NextResponse.redirect(new URL("/admin/departments", request.url))
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete department" }, { status: 500 })
  }
}
