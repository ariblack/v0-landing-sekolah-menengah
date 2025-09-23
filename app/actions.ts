"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

// Department actions
export async function getDepartments() {
  return db.getDepartments()
}

export async function getDepartment(id: string) {
  return db.getDepartment(id)
}

export async function addDepartment(formData: FormData) {
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const image = formData.get("image") as string
  const featuresString = formData.get("features") as string
  const features = featuresString.split("\n").filter((feature) => feature.trim() !== "")

  const department = await db.addDepartment({
    name,
    description,
    image,
    features,
  })

  revalidatePath("/admin/departments")
  revalidatePath("/")
  return department
}

export async function updateDepartment(id: string, formData: FormData) {
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const image = formData.get("image") as string
  const featuresString = formData.get("features") as string
  const features = featuresString.split("\n").filter((feature) => feature.trim() !== "")

  const department = await db.updateDepartment(id, {
    name,
    description,
    image,
    features,
  })

  revalidatePath("/admin/departments")
  revalidatePath("/")
  return department
}

export async function deleteDepartment(id: string) {
  const department = await db.deleteDepartment(id)
  revalidatePath("/admin/departments")
  revalidatePath("/")
  return department
}

// Teacher actions
export async function getTeachers() {
  return db.getTeachers()
}

export async function getTeacher(id: string) {
  return db.getTeacher(id)
}

export async function addTeacher(formData: FormData) {
  const name = formData.get("name") as string
  const position = formData.get("position") as string
  const department = formData.get("department") as string
  const image = formData.get("image") as string
  const education = formData.get("education") as string

  const teacher = await db.addTeacher({
    name,
    position,
    department,
    image,
    education,
  })

  revalidatePath("/admin/teachers")
  revalidatePath("/")
  return teacher
}

export async function updateTeacher(id: string, formData: FormData) {
  const name = formData.get("name") as string
  const position = formData.get("position") as string
  const department = formData.get("department") as string
  const image = formData.get("image") as string
  const education = formData.get("education") as string

  const teacher = await db.updateTeacher(id, {
    name,
    position,
    department,
    image,
    education,
  })

  revalidatePath("/admin/teachers")
  revalidatePath("/")
  return teacher
}

export async function deleteTeacher(id: string) {
  const teacher = await db.deleteTeacher(id)
  revalidatePath("/admin/teachers")
  revalidatePath("/")
  return teacher
}

// Extracurricular actions
export async function getExtracurriculars() {
  return db.getExtracurriculars()
}

export async function getExtracurricular(id: string) {
  return db.getExtracurricular(id)
}

export async function addExtracurricular(formData: FormData) {
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const image = formData.get("image") as string
  const schedule = formData.get("schedule") as string

  const extracurricular = await db.addExtracurricular({
    name,
    description,
    image,
    schedule,
  })

  revalidatePath("/admin/extracurriculars")
  revalidatePath("/")
  return extracurricular
}

export async function updateExtracurricular(id: string, formData: FormData) {
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const image = formData.get("image") as string
  const schedule = formData.get("schedule") as string

  const extracurricular = await db.updateExtracurricular(id, {
    name,
    description,
    image,
    schedule,
  })

  revalidatePath("/admin/extracurriculars")
  revalidatePath("/")
  return extracurricular
}

export async function deleteExtracurricular(id: string) {
  const extracurricular = await db.deleteExtracurricular(id)
  revalidatePath("/admin/extracurriculars")
  revalidatePath("/")
  return extracurricular
}

// Gallery actions
export async function getGallery() {
  return db.getGallery()
}

export async function getGalleryItem(id: string) {
  return db.getGalleryItem(id)
}

export async function addGalleryItem(formData: FormData) {
  const title = formData.get("title") as string
  const image = formData.get("image") as string
  const category = formData.get("category") as string
  const date = formData.get("date") as string

  const galleryItem = await db.addGalleryItem({
    title,
    image,
    category,
    date,
  })

  revalidatePath("/admin/gallery")
  revalidatePath("/")
  return galleryItem
}

export async function updateGalleryItem(id: string, formData: FormData) {
  const title = formData.get("title") as string
  const image = formData.get("image") as string
  const category = formData.get("category") as string
  const date = formData.get("date") as string

  const galleryItem = await db.updateGalleryItem(id, {
    title,
    image,
    category,
    date,
  })

  revalidatePath("/admin/gallery")
  revalidatePath("/")
  return galleryItem
}

export async function deleteGalleryItem(id: string) {
  const galleryItem = await db.deleteGalleryItem(id)
  revalidatePath("/admin/gallery")
  revalidatePath("/")
  return galleryItem
}

// Testimonial actions
export async function getTestimonials() {
  return db.getTestimonials()
}

export async function getTestimonial(id: string) {
  return db.getTestimonial(id)
}

export async function addTestimonial(formData: FormData) {
  const name = formData.get("name") as string
  const role = formData.get("role") as string
  const content = formData.get("content") as string
  const image = formData.get("image") as string
  const rating = Number.parseInt(formData.get("rating") as string)

  const testimonial = await db.addTestimonial({
    name,
    role,
    content,
    image,
    rating,
  })

  revalidatePath("/admin/testimonials")
  revalidatePath("/")
  return testimonial
}

export async function updateTestimonial(id: string, formData: FormData) {
  const name = formData.get("name") as string
  const role = formData.get("role") as string
  const content = formData.get("content") as string
  const image = formData.get("image") as string
  const rating = Number.parseInt(formData.get("rating") as string)

  const testimonial = await db.updateTestimonial(id, {
    name,
    role,
    content,
    image,
    rating,
  })

  revalidatePath("/admin/testimonials")
  revalidatePath("/")
  return testimonial
}

export async function deleteTestimonial(id: string) {
  const testimonial = await db.deleteTestimonial(id)
  revalidatePath("/admin/testimonials")
  revalidatePath("/")
  return testimonial
}

// School info actions
export async function getSchoolInfo() {
  return db.getSchoolInfo()
}

export async function updateSchoolInfo(formData: FormData) {
  const name = formData.get("name") as string
  const address = formData.get("address") as string
  const phone = formData.get("phone") as string
  const email = formData.get("email") as string
  const website = formData.get("website") as string
  const mapUrl = formData.get("mapUrl") as string
  const vision = formData.get("vision") as string
  const missionString = formData.get("mission") as string
  const mission = missionString.split("\n").filter((m) => m.trim() !== "")

  const schoolInfo = await db.updateSchoolInfo({
    name,
    address,
    phone,
    email,
    website,
    mapUrl,
    vision,
    mission,
  })

  revalidatePath("/admin/school-info")
  revalidatePath("/")
  return schoolInfo
}
