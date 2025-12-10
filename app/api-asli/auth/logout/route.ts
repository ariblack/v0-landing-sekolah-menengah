import { logout } from "@/lib/auth1"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  await logout()
  // The logout function handles the redirect
  return new Response(null, { status: 302 })
}
