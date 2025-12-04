import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  /* let departments: Department[] = [
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
  ]   */
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
        email     :'alice@prisma.io',
        username  :'alice',
        password  :'12345678',
        name      :'Alice',
        role      :'admin'
    },
  })
  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email     :'bob@prisma.io',
      username  :'bob',
      password  :'12345678',
      name      :'Bob',
      role      :'admin'
    },
  })
  console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })