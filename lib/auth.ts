"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { db } from "./db"

// In a real app, you would use a proper authentication library
// and store tokens securely

export async function login(username: string, password: string) {
  const user = db.validateUser(username, password)

  if (user) {
    // Set a cookie to maintain the session
    cookies().set(
      "auth",
      JSON.stringify({
        id: user.id,
        username: user.username,
        role: user.role,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      },
    )

    return { success: true, user }
  }

  return { success: false, error: "Invalid username or password" }
}

export async function logout() {
  cookies().delete("auth")
  redirect("/admin/login")
}

export async function getSession() {
  const authCookie = cookies().get("auth")

  if (!authCookie) {
    return null
  }

  try {
    return JSON.parse(authCookie.value)
  } catch (error) {
    return null
  }
}

export async function requireAuth() {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  return session
}
