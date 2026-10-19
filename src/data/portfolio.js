// Semua isi portofolio ada di sini — ganti dengan data Anda sendiri.
import ruangBaca from '../assets/ruang-baca.jpg'
import rakTanaman from '../assets/rak-tanaman.jpg'
import bukuDaisy from '../assets/buku-daisy.jpg'
import ayunan from '../assets/ayunan.jpg'
import rumahMenara from '../assets/rumah-menara.jpg'

export const images = { ruangBaca, rakTanaman, bukuDaisy, ayunan, rumahMenara }

export const profile = {
  name: 'Arunika Senja',
  monogram: 'AS',
  role: 'Perancang Antarmuka & Pengembang Web',
  city: 'Yogyakarta',
  email: 'halo@arunikasenja.id',
  tagline:
    'Saya merangkai antarmuka seperti menjilid buku: halaman demi halaman, dengan huruf yang dipilih sabar dan detail yang dirawat.',
  about: [
    'Setiap proyek saya perlakukan sebagai sebuah naskah. Ada prolog untuk memahami pembacanya, bab-bab untuk menyusun alurnya, dan epilog yang membuat orang ingin kembali membuka halamannya.',
    'Sudah tujuh tahun saya bekerja di persimpangan desain dan kode — membangun situs, aplikasi, dan arsip digital untuk penerbit, kedai kecil, museum, hingga perusahaan rintisan. Saya percaya teknologi terbaik terasa seperti buku tua yang hangat: akrab, tenang, dan tidak pernah membuat pembacanya tersesat.',
  ],
  facts: [
    { value: '7', label: 'tahun menulis kode' },
    { value: '42', label: 'naskah selesai' },
    { value: '∞', label: 'cangkir teh' },
  ],
  socials: [
    { label: 'GitHub', href: '#' },
    { label: 'Dribbble', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
}

// Kutipan dari buku-buku terkenal. `id` = terjemahan bebas.
export const quotes = [
  {
    text: 'A reader lives a thousand lives before he dies. The man who never reads lives only one.',
    id: 'Seorang pembaca hidup seribu kali sebelum ia mati. Ia yang tak pernah membaca hanya hidup sekali.',
    author: 'George R.R. Martin',
    book: 'A Dance with Dragons',
  },
  {
    text: 'All we have to decide is what to do with the time that is given us.',
    id: 'Yang perlu kita putuskan hanyalah apa yang kita lakukan dengan waktu yang diberikan kepada kita.',
    author: 'J.R.R. Tolkien',
    book: 'The Fellowship of the Ring',
  },
  {
    text: 'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
    id: 'Hanya dengan hati kita dapat melihat dengan benar; yang terpenting tak terlihat oleh mata.',
    author: 'Antoine de Saint-Exupéry',
    book: 'Le Petit Prince',
  },
  {
    text: 'Orang boleh pandai setinggi langit, tapi selama ia tidak menulis, ia akan hilang di dalam masyarakat dan dari sejarah.',
    author: 'Pramoedya Ananta Toer',
    book: 'Rumah Kaca',
  },
  {
    text: 'It does not do to dwell on dreams and forget to live.',
    id: 'Tak ada gunanya tenggelam dalam mimpi lalu lupa untuk hidup.',
    author: 'J.K. Rowling',
    book: "Harry Potter and the Philosopher's Stone",
  },
  {
    text: 'And, when you want something, all the universe conspires in helping you to achieve it.',
    id: 'Dan ketika kau menginginkan sesuatu, seluruh semesta bersatu membantumu meraihnya.',
    author: 'Paulo Coelho',
    book: 'The Alchemist',
  },
  {
    text: 'Not all those who wander are lost.',
    id: 'Tidak semua yang mengembara itu tersesat.',
    author: 'J.R.R. Tolkien',
    book: 'The Fellowship of the Ring',
  },
  {
    text: "Why, sometimes I've believed as many as six impossible things before breakfast.",
    id: 'Kadang aku sudah memercayai enam hal mustahil sebelum sarapan.',
    author: 'Lewis Carroll',
    book: 'Through the Looking-Glass',
  },
  {
    text: 'Seorang terpelajar harus juga berlaku adil sudah sejak dalam pikiran, apalagi dalam perbuatan.',
    author: 'Pramoedya Ananta Toer',
    book: 'Bumi Manusia',
  },
  {
    text: 'Whatever our souls are made of, his and mine are the same.',
    id: 'Apa pun bahan jiwa kami, jiwanya dan jiwaku sama.',
    author: 'Emily Brontë',
    book: 'Wuthering Heights',
  },
  {
    text: 'Hiduplah untuk memberi sebanyak-banyaknya, bukan untuk menerima sebanyak-banyaknya.',
    author: 'Andrea Hirata',
    book: 'Laskar Pelangi',
  },
  {
    text: 'So we beat on, boats against the current, borne back ceaselessly into the past.',
    id: 'Maka kami terus mendayung, perahu melawan arus, terbawa tanpa henti kembali ke masa lalu.',
    author: 'F. Scott Fitzgerald',
    book: 'The Great Gatsby',
  },
  {
    text: 'I am no bird; and no net ensnares me: I am a free human being with an independent will.',
    id: 'Aku bukan burung, dan tak ada jaring yang menjeratku: aku manusia bebas dengan kehendakku sendiri.',
    author: 'Charlotte Brontë',
    book: 'Jane Eyre',
  },
]

// Daftar isi = keahlian. `page` hanya hiasan, seperti nomor halaman.
export const chapters = [
  {
    numeral: 'I',
    title: 'Desain Antarmuka',
    page: 7,
    note: 'Riset pengguna, wireframe, sistem desain, dan tipografi.',
    tools: ['Figma', 'Design System', 'Prototyping', 'Tipografi'],
  },
  {
    numeral: 'II',
    title: 'Pengembangan Front-end',
    page: 23,
    note: 'Antarmuka yang cepat, rapi, dan bisa diakses semua pembaca.',
    tools: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    numeral: 'III',
    title: 'Animasi & Interaksi',
    page: 41,
    note: 'Gerak yang bercerita — halus, bermakna, tidak berlebihan.',
    tools: ['Motion', 'GSAP', 'SVG', 'WebGL'],
  },
  {
    numeral: 'IV',
    title: 'Back-end & Data',
    page: 58,
    note: 'Fondasi yang kokoh di balik setiap halaman.',
    tools: ['Node.js', 'PostgreSQL', 'REST & GraphQL', 'Supabase'],
  },
  {
    numeral: 'V',
    title: 'Arsip & Konten Digital',
    page: 76,
    note: 'Merawat cerita, koleksi, dan memori agar mudah ditemukan.',
    tools: ['Headless CMS', 'SEO', 'Aksesibilitas', 'Penulisan UX'],
  },
]

// Karya = buku di rak. `cover` adalah warna sampul.
export const projects = [
  {
    title: 'Kedai Lentera',
    genre: 'Identitas & Situs Web',
    year: 2026,
    cover: '#6b3f2a',
    accent: '#e3caa5',
    height: 92,
    image: bukuDaisy,
    role: 'Desainer & pengembang utama',
    synopsis:
      'Rumah daring untuk kedai kopi yang buka hingga larut. Menu yang berganti mengikuti musim, pemesanan meja, dan jurnal cerita pelanggan.',
    tools: ['Next.js', 'Sanity', 'Motion'],
    link: '#',
  },
  {
    title: 'Atlas Rempah',
    genre: 'Cerita Data Interaktif',
    year: 2025,
    cover: '#3f4a3a',
    accent: '#ceab93',
    height: 100,
    image: rumahMenara,
    role: 'Perancang interaksi',
    synopsis:
      'Peta interaktif jalur rempah Nusantara: menelusuri pala, cengkih, dan lada dari pelabuhan ke pelabuhan dengan arsip kolonial yang dipindai.',
    tools: ['D3.js', 'Mapbox', 'Svelte'],
    link: '#',
  },
  {
    title: 'Surat untuk Nanti',
    genre: 'Aplikasi Seluler',
    year: 2025,
    cover: '#8a5a3c',
    accent: '#fffbe9',
    height: 86,
    image: ayunan,
    role: 'Desainer produk',
    synopsis:
      'Kapsul waktu berbentuk surat. Tulis untuk dirimu lima tahun lagi, segel dengan lilin digital, dan biarkan ia sampai pada harinya.',
    tools: ['React Native', 'Expo', 'Supabase'],
    link: '#',
  },
  {
    title: 'Arsip Keroncong',
    genre: 'Arsip Digital',
    year: 2024,
    cover: '#4a2f2a',
    accent: '#e3caa5',
    height: 96,
    image: ruangBaca,
    role: 'Pengembang full-stack',
    synopsis:
      'Ratusan piringan hitam keroncong didigitalkan, lengkap dengan lirik, cerita penyanyi, dan pemutar yang berderak seperti gramofon.',
    tools: ['Astro', 'PostgreSQL', 'Web Audio'],
    link: '#',
  },
  {
    title: 'Kebun Kata',
    genre: 'Alat Menulis',
    year: 2023,
    cover: '#ad8b73',
    accent: '#3b2a21',
    height: 88,
    image: rakTanaman,
    role: 'Pendiri & perancang',
    synopsis:
      'Ruang menulis yang tenang untuk penulis lepas. Setiap draf tumbuh menjadi tanaman; semakin rajin menulis, semakin rimbun kebunnya.',
    tools: ['TypeScript', 'Tiptap', 'IndexedDB'],
    link: '#',
  },
  {
    title: 'Taman Baca Desa',
    genre: 'Situs Nirlaba',
    year: 2022,
    cover: '#5c4636',
    accent: '#ceab93',
    height: 94,
    image: bukuDaisy,
    role: 'Relawan desainer & pengembang',
    synopsis:
      'Situs donasi buku dan jadwal relawan untuk 30 taman baca di pelosok. Ringan, bisa dibuka dengan sinyal seadanya.',
    tools: ['Eleventy', 'Netlify', 'Alpine.js'],
    link: '#',
  },
]

// Riwayat perjalanan.
export const journey = [
  {
    year: '2024 — kini',
    title: 'Perancang Antarmuka Senior',
    place: 'Studio Lembar, Yogyakarta',
    text: 'Memimpin desain dan front-end untuk penerbit, museum, dan merek lokal. Membangun sistem desain yang dipakai empat tim produk.',
  },
  {
    year: '2021 — 2024',
    title: 'Pengembang Front-end',
    place: 'Rintisan Edukasi Baca.in',
    text: 'Merancang ulang aplikasi membaca untuk 200 ribu pelajar. Waktu muat turun 60%, dan aksesibilitas lolos WCAG AA.',
  },
  {
    year: '2019 — 2021',
    title: 'Desainer & Pengembang Lepas',
    place: 'Berbagai klien',
    text: 'Situs untuk kedai, toko buku bekas, dan komunitas literasi. Di sinilah saya jatuh cinta pada detail-detail kecil.',
  },
  {
    year: '2015 — 2019',
    title: 'Sastra Indonesia',
    place: 'Universitas Gadjah Mada',
    text: 'Belajar membaca struktur cerita — bekal yang ternyata sangat berguna untuk menyusun alur sebuah antarmuka.',
  },
]
