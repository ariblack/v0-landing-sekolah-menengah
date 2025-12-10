import { logout } from "@/lib/auth"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  await logout()
  // The logout function handles the redirect
  return new Response(null, { status: 302 })
}
