import type { Department, Extracurricular, Gallery, SchoolInfo, Teacher, Testimonial, User } from "./types"

// Mock database with initial data
let departments: Department[] = [
  {
    id: "1",
    name: "Teknik Komputer dan Jaringan",
    description:
      "Program keahlian yang mempelajari tentang perakitan komputer, instalasi jaringan, dan troubleshooting.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Perakitan dan perbaikan komputer",
      "Instalasi jaringan komputer",
      "Administrasi server",
      "Keamanan jaringan",
      "Pemrograman dasar",
    ],
  },
  {
    id: "2",
    name: "Rekayasa Perangkat Lunak",
    description: "Program keahlian yang mempelajari tentang pengembangan aplikasi, pemrograman, dan basis data.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Pemrograman web", "Pemrograman mobile", "Basis data", "Analisis dan desain sistem", "UI/UX design"],
  },
  {
    id: "3",
    name: "Multimedia",
    description: "Program keahlian yang mempelajari tentang desain grafis, animasi, dan editing video.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Desain grafis", "Animasi 2D dan 3D", "Editing video", "Fotografi", "Web design"],
  },
  {
    id: "4",
    name: "Akuntansi",
    description: "Program keahlian yang mempelajari tentang pencatatan keuangan, perpajakan, dan audit.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Pencatatan keuangan", "Perpajakan", "Audit", "Akuntansi biaya", "Komputer akuntansi"],
  },
]

let teachers: Teacher[] = [
  {
    id: "1",
    name: "Budi Santoso, S.Pd",
    position: "Kepala Jurusan",
    department: "Teknik Komputer dan Jaringan",
    image: "/placeholder.svg?height=200&width=200",
    education: "S1 Pendidikan Teknik Informatika",
  },
  {
    id: "2",
    name: "Dewi Lestari, M.Kom",
    position: "Guru Produktif",
    department: "Rekayasa Perangkat Lunak",
    image: "/placeholder.svg?height=200&width=200",
    education: "S2 Ilmu Komputer",
  },
  {
    id: "3",
    name: "Ahmad Hidayat, S.Sn",
    position: "Guru Produktif",
    department: "Multimedia",
    image: "/placeholder.svg?height=200&width=200",
    education: "S1 Desain Komunikasi Visual",
  },
  {
    id: "4",
    name: "Siti Rahayu, S.E",
    position: "Guru Produktif",
    department: "Akuntansi",
    image: "/placeholder.svg?height=200&width=200",
    education: "S1 Ekonomi Akuntansi",
  },
  {
    id: "5",
    name: "Joko Widodo, S.Pd",
    position: "Guru Bahasa Inggris",
    department: "Umum",
    image: "/placeholder.svg?height=200&width=200",
    education: "S1 Pendidikan Bahasa Inggris",
  },
  {
    id: "6",
    name: "Ratna Sari, S.Pd",
    position: "Guru Matematika",
    department: "Umum",
    image: "/placeholder.svg?height=200&width=200",
    education: "S1 Pendidikan Matematika",
  },
]

let extracurriculars: Extracurricular[] = [
  {
    id: "1",
    name: "Pramuka",
    description: "Kegiatan kepanduan yang mengembangkan karakter, kedisiplinan, dan kemandirian siswa.",
    image: "/placeholder.svg?height=300&width=400",
    schedule: "Setiap hari Sabtu, 08.00 - 10.00",
  },
  {
    id: "2",
    name: "Futsal",
    description: "Olahraga tim yang mengembangkan kerjasama, sportivitas, dan kebugaran fisik.",
    image: "/placeholder.svg?height=300&width=400",
    schedule: "Setiap hari Rabu, 15.00 - 17.00",
  },
  {
    id: "3",
    name: "Robotika",
    description: "Kegiatan yang mempelajari pembuatan dan pemrograman robot.",
    image: "/placeholder.svg?height=300&width=400",
    schedule: "Setiap hari Jumat, 15.00 - 17.00",
  },
  {
    id: "4",
    name: "English Club",
    description: "Kegiatan yang mengembangkan kemampuan berbahasa Inggris melalui diskusi, debat, dan presentasi.",
    image: "/placeholder.svg?height=300&width=400",
    schedule: "Setiap hari Selasa, 15.00 - 16.30",
  },
  {
    id: "5",
    name: "Paduan Suara",
    description: "Kegiatan yang mengembangkan bakat bernyanyi dan harmonisasi suara.",
    image: "/placeholder.svg?height=300&width=400",
    schedule: "Setiap hari Kamis, 15.00 - 17.00",
  },
  {
    id: "6",
    name: "Karya Ilmiah Remaja",
    description: "Kegiatan yang mengembangkan kemampuan penelitian dan penulisan karya ilmiah.",
    image: "/placeholder.svg?height=300&width=400",
    schedule: "Setiap hari Senin, 15.00 - 17.00",
  },
]

let gallery: Gallery[] = [
  {
    id: "1",
    title: "Upacara Bendera",
    image: "/placeholder.svg?height=400&width=600",
    category: "Kegiatan Rutin",
    date: "2023-08-17",
  },
  {
    id: "2",
    title: "Lomba Kompetensi Siswa",
    image: "/placeholder.svg?height=400&width=600",
    category: "Kompetisi",
    date: "2023-09-25",
  },
  {
    id: "3",
    title: "Kunjungan Industri",
    image: "/placeholder.svg?height=400&width=600",
    category: "Kunjungan",
    date: "2023-10-15",
  },
  {
    id: "4",
    title: "Praktik Kerja Lapangan",
    image: "/placeholder.svg?height=400&width=600",
    category: "Magang",
    date: "2023-11-20",
  },
  {
    id: "5",
    title: "Pentas Seni",
    image: "/placeholder.svg?height=400&width=600",
    category: "Kesenian",
    date: "2023-12-20",
  },
  {
    id: "6",
    title: "Wisuda Angkatan",
    image: "/placeholder.svg?height=400&width=600",
    category: "Wisuda",
    date: "2024-05-30",
  },
]

let testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Andi Pratama",
    role: "Alumni 2020, Mahasiswa Teknik Informatika",
    content:
      "Berkat pendidikan di SMK ini, saya memiliki dasar yang kuat untuk melanjutkan studi di perguruan tinggi. Guru-guru yang kompeten dan fasilitas yang memadai sangat membantu dalam proses belajar.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: "2",
    name: "Dian Purnama",
    role: "Alumni 2021, Web Developer",
    content:
      "Saya langsung mendapatkan pekerjaan setelah lulus berkat keterampilan yang saya peroleh di SMK ini. Program magang dan sertifikasi yang disediakan sangat membantu dalam karir saya.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: "3",
    name: "Rini Susanti",
    role: "Alumni 2019, Akuntan",
    content:
      "Pembelajaran akuntansi yang praktis dan relevan dengan dunia kerja membuat saya siap menghadapi tantangan di perusahaan. Terima kasih SMK telah memberikan fondasi yang kuat.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
  {
    id: "4",
    name: "Fajar Ramadhan",
    role: "Alumni 2022, Teknisi Jaringan",
    content:
      "Laboratorium komputer dan jaringan yang lengkap membuat saya bisa praktik langsung dan menguasai keterampilan teknis. Sekarang saya bekerja di perusahaan IT terkemuka.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

let schoolInfo: SchoolInfo = {
  name: "SMK Nusantara Teknologi",
  address: "Jl. Pendidikan No. 123, Kota Jakarta, 12345",
  phone: "(021) 1234-5678",
  email: "info@smknusantarateknologi.sch.id",
  website: "www.smknusantarateknologi.sch.id",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid",
  vision:
    "Menjadi lembaga pendidikan kejuruan yang unggul dalam menghasilkan lulusan yang kompeten, berkarakter, dan siap bersaing di era global.",
  mission: [
    "Menyelenggarakan pendidikan kejuruan yang berkualitas sesuai dengan kebutuhan dunia usaha dan industri.",
    "Mengembangkan kurikulum yang adaptif dan responsif terhadap perkembangan teknologi.",
    "Meningkatkan kualitas tenaga pendidik dan kependidikan yang profesional.",
    "Menyediakan sarana dan prasarana pembelajaran yang modern dan memadai.",
    "Menjalin kerjasama dengan dunia usaha dan industri dalam penyelenggaraan pendidikan.",
  ],
  advantages: [
    {
      title: "Kurikulum Industri",
      description:
        "Kurikulum yang dirancang bersama dengan industri untuk memastikan relevansi dengan kebutuhan dunia kerja.",
      icon: "BookOpen",
    },
    {
      title: "Sertifikasi Kompetensi",
      description: "Siswa mendapatkan sertifikasi kompetensi yang diakui secara nasional dan internasional.",
      icon: "Award",
    },
    {
      title: "Fasilitas Modern",
      description: "Laboratorium dan bengkel praktik yang dilengkapi dengan peralatan modern sesuai standar industri.",
      icon: "Laptop",
    },
    {
      title: "Program Magang",
      description: "Kerjasama dengan lebih dari 50 perusahaan untuk program magang dan penempatan kerja.",
      icon: "Briefcase",
    },
    {
      title: "Guru Berpengalaman",
      description: "Tenaga pengajar yang berpengalaman di industri dan memiliki sertifikasi keahlian.",
      icon: "Users",
    },
    {
      title: "Ekstrakurikuler Beragam",
      description: "Berbagai kegiatan ekstrakurikuler untuk mengembangkan bakat dan minat siswa.",
      icon: "Activity",
    },
  ],
  registrationInfo: {
    startDate: "1 Januari 2024",
    endDate: "30 April 2024",
    requirements: [
      "Fotokopi ijazah SMP/sederajat",
      "Fotokopi rapor SMP kelas 7-9",
      "Fotokopi akta kelahiran",
      "Fotokopi kartu keluarga",
      "Pas foto berwarna ukuran 3x4 (4 lembar)",
      "Surat keterangan sehat dari dokter",
    ],
    process: [
      "Pendaftaran online melalui website sekolah",
      "Pembayaran biaya pendaftaran",
      "Tes potensi akademik",
      "Tes minat dan bakat",
      "Wawancara",
      "Pengumuman hasil seleksi",
      "Daftar ulang",
    ],
    fees: [
      {
        name: "Biaya Pendaftaran",
        amount: 200000,
      },
      {
        name: "Uang Pangkal",
        amount: 5000000,
      },
      {
        name: "SPP per Bulan",
        amount: 500000,
      },
      {
        name: "Seragam dan Perlengkapan",
        amount: 1500000,
      },
    ],
  },
}

let users: User[] = [
  {
    id: "1",
    username: "admin",
    password: "admin123", // In a real app, this would be hashed
    role: "admin",
  },
  {
    id: "2",
    username: "editor",
    password: "editor123", // In a real app, this would be hashed
    role: "editor",
  },
]

// Database operations
export const db = {
  // Department operations
  getDepartments: () => departments,
  getDepartment: (id: string) => departments.find((dept) => dept.id === id),
  addDepartment: (department: Omit<Department, "id">) => {
    const newDepartment = { ...department, id: Date.now().toString() }
    departments.push(newDepartment)
    return newDepartment
  },
  updateDepartment: (id: string, department: Partial<Department>) => {
    const index = departments.findIndex((dept) => dept.id === id)
    if (index !== -1) {
      departments[index] = { ...departments[index], ...department }
      return departments[index]
    }
    return null
  },
  deleteDepartment: (id: string) => {
    const index = departments.findIndex((dept) => dept.id === id)
    if (index !== -1) {
      const deleted = departments[index]
      departments = departments.filter((dept) => dept.id !== id)
      return deleted
    }
    return null
  },

  // Teacher operations
  getTeachers: () => teachers,
  getTeacher: (id: string) => teachers.find((teacher) => teacher.id === id),
  addTeacher: (teacher: Omit<Teacher, "id">) => {
    const newTeacher = { ...teacher, id: Date.now().toString() }
    teachers.push(newTeacher)
    return newTeacher
  },
  updateTeacher: (id: string, teacher: Partial<Teacher>) => {
    const index = teachers.findIndex((t) => t.id === id)
    if (index !== -1) {
      teachers[index] = { ...teachers[index], ...teacher }
      return teachers[index]
    }
    return null
  },
  deleteTeacher: (id: string) => {
    const index = teachers.findIndex((t) => t.id === id)
    if (index !== -1) {
      const deleted = teachers[index]
      teachers = teachers.filter((t) => t.id !== id)
      return deleted
    }
    return null
  },

  // Extracurricular operations
  getExtracurriculars: () => extracurriculars,
  getExtracurricular: (id: string) => extracurriculars.find((extra) => extra.id === id),
  addExtracurricular: (extracurricular: Omit<Extracurricular, "id">) => {
    const newExtracurricular = { ...extracurricular, id: Date.now().toString() }
    extracurriculars.push(newExtracurricular)
    return newExtracurricular
  },
  updateExtracurricular: (id: string, extracurricular: Partial<Extracurricular>) => {
    const index = extracurriculars.findIndex((extra) => extra.id === id)
    if (index !== -1) {
      extracurriculars[index] = { ...extracurriculars[index], ...extracurricular }
      return extracurriculars[index]
    }
    return null
  },
  deleteExtracurricular: (id: string) => {
    const index = extracurriculars.findIndex((extra) => extra.id === id)
    if (index !== -1) {
      const deleted = extracurriculars[index]
      extracurriculars = extracurriculars.filter((extra) => extra.id !== id)
      return deleted
    }
    return null
  },

  // Gallery operations
  getGallery: () => gallery,
  getGalleryItem: (id: string) => gallery.find((item) => item.id === id),
  addGalleryItem: (item: Omit<Gallery, "id">) => {
    const newItem = { ...item, id: Date.now().toString() }
    gallery.push(newItem)
    return newItem
  },
  updateGalleryItem: (id: string, item: Partial<Gallery>) => {
    const index = gallery.findIndex((g) => g.id === id)
    if (index !== -1) {
      gallery[index] = { ...gallery[index], ...item }
      return gallery[index]
    }
    return null
  },
  deleteGalleryItem: (id: string) => {
    const index = gallery.findIndex((g) => g.id === id)
    if (index !== -1) {
      const deleted = gallery[index]
      gallery = gallery.filter((g) => g.id !== id)
      return deleted
    }
    return null
  },

  // Testimonial operations
  getTestimonials: () => testimonials,
  getTestimonial: (id: string) => testimonials.find((testimonial) => testimonial.id === id),
  addTestimonial: (testimonial: Omit<Testimonial, "id">) => {
    const newTestimonial = { ...testimonial, id: Date.now().toString() }
    testimonials.push(newTestimonial)
    return newTestimonial
  },
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => {
    const index = testimonials.findIndex((t) => t.id === id)
    if (index !== -1) {
      testimonials[index] = { ...testimonials[index], ...testimonial }
      return testimonials[index]
    }
    return null
  },
  deleteTestimonial: (id: string) => {
    const index = testimonials.findIndex((t) => t.id === id)
    if (index !== -1) {
      const deleted = testimonials[index]
      testimonials = testimonials.filter((t) => t.id !== id)
      return deleted
    }
    return null
  },

  // School info operations
  getSchoolInfo: () => schoolInfo,
  updateSchoolInfo: (info: Partial<SchoolInfo>) => {
    schoolInfo = { ...schoolInfo, ...info }
    return schoolInfo
  },

  // User operations
  getUsers: () => users,
  getUser: (username: string) => users.find((user) => user.username === username),
  validateUser: (username: string, password: string) => {
    const user = users.find((user) => user.username === username && user.password === password)
    if (user) {
      const { password, ...userWithoutPassword } = user
      return userWithoutPassword
    }
    return null
  },
  addUser: (user: Omit<User, "id">) => {
    const newUser = { ...user, id: Date.now().toString() }
    users.push(newUser)
    return newUser
  },
  updateUser: (id: string, user: Partial<User>) => {
    const index = users.findIndex((u) => u.id === id)
    if (index !== -1) {
      users[index] = { ...users[index], ...user }
      const { password, ...userWithoutPassword } = users[index]
      return userWithoutPassword
    }
    return null
  },
  deleteUser: (id: string) => {
    const index = users.findIndex((u) => u.id === id)
    if (index !== -1) {
      const { password, ...userWithoutPassword } = users[index]
      users = users.filter((u) => u.id !== id)
      return userWithoutPassword
    }
    return null
  },
}
