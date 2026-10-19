// Semua isi portofolio ada di sini — diambil dari CV Yosifa Syahira Febriyanti.
import ruangBaca from '../assets/ruang-baca.jpg'
import rakTanaman from '../assets/rak-tanaman.jpg'
import bukuDaisy from '../assets/buku-daisy.jpg'
import ayunan from '../assets/ayunan.jpg'
import rumahMenara from '../assets/rumah-menara.jpg'
import potret from '../assets/yosifa-potret.jpg'
import membaca from '../assets/yosifa-membaca.jpg'
import perpustakaan from '../assets/yosifa-perpustakaan.jpg'
import taman from '../assets/yosifa-taman.jpg'
import rumput from '../assets/yosifa-rumput.jpg'
import senyum from '../assets/yosifa-senyum.jpg'
import kampus from '../assets/yosifa-kampus.jpg'

export const images = { ruangBaca, rakTanaman, bukuDaisy, ayunan, rumahMenara, potret, membaca, perpustakaan, taman, rumput, senyum, kampus }

export const profile = {
  name: 'Yosifa Syahira Febriyanti',
  monogram: 'YS',
  role: 'Mahasiswi PGSD · Calon Pendidik',
  city: 'Singaraja, Bali',
  email: 'syahiraaure@gmail.com',
  phone: '0881038206732',
  whatsapp: '62881038206732',
  tagline:
    'Mahasiswi Pendidikan Guru Sekolah Dasar yang percaya bahwa setiap anak adalah buku dengan cerita dan cara belajarnya sendiri.',
  about: [
    'Saya mahasiswi Pendidikan Guru Sekolah Dasar (PGSD) di Universitas Pendidikan Ganesha dengan minat besar pada dunia mengajar — terutama dalam menyampaikan materi pembelajaran dan mendampingi siswa sekolah dasar sepanjang proses belajarnya.',
    'Saya tertarik mengembangkan metode mengajar yang kreatif dan komunikatif, serta merancang media pembelajaran inovatif yang sesuai dengan kebutuhan belajar siswa. Selain mengajar, saya juga gemar mengembangkan materi edukatif, menulis esai, dan menulis artikel umum.',
  ],
  facts: [
    { value: '2023', label: 'mulai menempuh PGSD' },
    { value: '2', label: 'pengalaman mengajar' },
    { value: '∞', label: 'rasa ingin belajar' },
  ],
  socials: [
    { label: 'Email', href: 'mailto:syahiraaure@gmail.com' },
    { label: 'WhatsApp', href: 'https://wa.me/62881038206732' },
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
  {
    text: "So Matilda's strong young mind continued to grow, nurtured by the voices of all those authors who had sent their books out into the world like ships onto the sea.",
    id: 'Maka pikiran muda Matilda yang kuat terus tumbuh, dipupuk oleh suara para pengarang yang melayarkan buku-buku mereka ke dunia bagai kapal-kapal ke lautan.',
    author: 'Roald Dahl',
    book: 'Matilda',
  },
]

// Daftar isi = keterampilan. `page` hanya hiasan, seperti nomor halaman.
export const chapters = [
  {
    numeral: 'I',
    title: 'Keterampilan Mengajar',
    page: 7,
    note: 'Menyampaikan materi dan mendampingi siswa sesuai kebutuhan belajarnya.',
    tools: ['Penyampaian materi', 'Pendampingan belajar siswa', 'Latihan soal & kegiatan belajar', 'Adaptasi metode mengajar'],
  },
  {
    numeral: 'II',
    title: 'Keterampilan Komunikasi',
    page: 19,
    note: 'Menjelaskan dengan jernih, dan mendengarkan dengan sabar.',
    tools: ['Komunikasi interpersonal', 'Sabar & empati', 'Penjelasan yang jelas dan efektif'],
  },
  {
    numeral: 'III',
    title: 'Keterampilan Menulis',
    page: 31,
    note: 'Merangkai gagasan menjadi tulisan yang runtut dan mudah dipahami.',
    tools: ['Pengembangan gagasan', 'Penyusunan argumen', 'Menulis esai', 'Menulis artikel umum'],
  },
  {
    numeral: 'IV',
    title: 'Media Pembelajaran',
    page: 44,
    note: 'Merancang bahan ajar yang menarik dan mudah diakses siswa.',
    tools: ['Bahan ajar sesuai kebutuhan', 'Pendekatan kreatif', 'Materi edukatif'],
  },
  {
    numeral: 'V',
    title: 'Soft Skills',
    page: 58,
    note: 'Bekal sehari-hari, di dalam maupun di luar kelas.',
    tools: ['Tanggung jawab', 'Kerja sama tim', 'Manajemen waktu', 'Kemampuan beradaptasi', 'Kreatif & mau belajar'],
  },
]

// Pengalaman & kegiatan = buku di rak. `cover` adalah warna sampul, `label` jenisnya.
export const projects = [
  {
    title: 'Brilliant Academy',
    genre: 'Bimbingan Belajar',
    label: 'Pengalaman Mengajar',
    cover: '#6b3f2a',
    accent: '#e3caa5',
    height: 96,
    image: perpustakaan,
    role: 'Tutor — Brilliant Academy Tutoring Center',
    synopsis:
      'Membantu siswa memahami mata pelajaran melalui penjelasan yang terstruktur dan latihan soal yang disesuaikan dengan kebutuhan belajar mereka, serta memberikan pendampingan agar pemahaman materi mereka terus meningkat.',
    tools: ['Penyampaian materi', 'Latihan soal', 'Pendampingan belajar'],
  },
  {
    title: 'Les Privat',
    genre: 'Pendampingan Individu',
    label: 'Pengalaman Mengajar',
    cover: '#3f4a3a',
    accent: '#ceab93',
    height: 88,
    image: taman,
    role: 'Tutor Privat',
    synopsis:
      'Memberikan bimbingan belajar secara personal sesuai kebutuhan akademik dan kemampuan belajar setiap siswa, dengan menyesuaikan cara menjelaskan dan metode mengajar agar materi lebih mudah dipahami.',
    tools: ['Adaptasi metode', 'Sabar & empati', 'Penjelasan efektif'],
  },
  {
    title: 'Media Pembelajaran',
    genre: 'Pengembangan Bahan Ajar',
    label: 'Kegiatan',
    cover: '#8a5a3c',
    accent: '#fffbe9',
    height: 100,
    image: rumput,
    role: 'Perancang media pembelajaran',
    synopsis:
      'Merancang dan mengembangkan bahan ajar berdasarkan kebutuhan belajar siswa, sambil menjelajahi pendekatan kreatif agar materi pelajaran lebih menarik dan mudah diakses.',
    tools: ['Media inovatif', 'Pendekatan kreatif', 'Kebutuhan siswa'],
  },
  {
    title: 'Esai & Gagasan',
    genre: 'Penulisan Esai',
    label: 'Kegiatan',
    cover: '#4a2f2a',
    accent: '#e3caa5',
    height: 92,
    image: senyum,
    role: 'Penulis esai',
    synopsis:
      'Mengembangkan gagasan dan menyusun argumen secara logis dan runtut melalui esai, sekaligus berlatih menyampaikan ide dengan jelas dan sistematis dalam bentuk tulisan.',
    tools: ['Pengembangan gagasan', 'Penyusunan argumen', 'Menulis sistematis'],
  },
  {
    title: 'Artikel Umum',
    genre: 'Penulisan Artikel',
    label: 'Minat',
    cover: '#ad8b73',
    accent: '#3b2a21',
    height: 86,
    image: kampus,
    role: 'Penulis artikel',
    synopsis:
      'Menulis artikel umum dan mengembangkan materi edukatif — mengubah hal-hal yang dipelajari menjadi bacaan yang hangat dan mudah dicerna.',
    tools: ['Menulis artikel', 'Materi edukatif', 'Bahasa yang jelas'],
  },
]

// Riwayat perjalanan.
export const journey = [
  {
    year: '2023 — kini',
    title: 'Pendidikan Guru Sekolah Dasar',
    place: 'Universitas Pendidikan Ganesha, Bali',
    text: 'Menempuh studi PGSD dengan minat pada metode mengajar yang kreatif dan komunikatif serta pengembangan media pembelajaran.',
  },
  {
    year: 'Pengalaman mengajar',
    title: 'Tutor',
    place: 'Brilliant Academy Tutoring Center',
    text: 'Membantu siswa memahami mata pelajaran lewat penjelasan terstruktur dan latihan soal yang disesuaikan dengan kebutuhan belajar mereka.',
  },
  {
    year: 'Pengalaman mengajar',
    title: 'Tutor Privat',
    place: 'Les privat',
    text: 'Memberikan pendampingan belajar personal dan menyesuaikan metode mengajar dengan kemampuan setiap siswa.',
  },
  {
    year: 'Kegiatan tambahan',
    title: 'Penulisan Esai & Media Pembelajaran',
    place: 'Pengembangan diri',
    text: 'Menulis esai yang runtut dan sistematis, serta merancang bahan ajar kreatif yang menarik bagi siswa.',
  },
]
