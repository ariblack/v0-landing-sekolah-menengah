export type Department = {
  id: string
  name: string
  description: string
  image: string
  features: string[]
}

export type Teacher = {
  id: string
  name: string
  position: string
  department: string
  image: string
  education: string
}

export type Extracurricular = {
  id: string
  name: string
  description: string
  image: string
  schedule: string
}

export type Gallery = {
  id: string
  title: string
  image: string
  category: string
  date: string
}

export type Testimonial = {
  id: string
  name: string
  role: string
  content: string
  image: string
  rating: number
}

export type SchoolInfo = {
  name: string
  address: string
  phone: string
  email: string
  website: string
  mapUrl: string
  vision: string
  mission: string[]
  advantages: {
    title: string
    description: string
    icon: string
  }[]
  registrationInfo: {
    startDate: string
    endDate: string
    requirements: string[]
    process: string[]
    fees: {
      name: string
      amount: number
    }[]
  }
}

export type User = {
  id: string
  username: string
  password: string
  role: "admin" | "editor"
}
