# Arunika Senja — Portofolio

Portofolio bernuansa buku & perpustakaan: klasik, elegan, dan sedikit magis.
Dibuat dengan React + Vite + Tailwind CSS v4 + [Motion](https://motion.dev) untuk animasi.

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:5173
npm run build    # hasil produksi di folder dist/
npm run deploy   # build + terbitkan ke GitHub Pages (branch gh-pages)
```

Situs live: https://linthlz.github.io/bookthemeporto/

## Mengganti isi

Semua teks ada di **`src/data/portfolio.js`** — nama, peran, bio, keahlian (daftar isi),
karya (buku di rak), riwayat (kronik), media sosial, dan kumpulan kutipan buku.
Foto diambil dari `src/assets/` (salinan terkompres dari folder `asset/`).

## Susunan halaman

| Bagian | Komponen | Isi & gerak |
|---|---|---|
| Pembuka | `Preloader.jsx` | Buku kecil yang halamannya membalik sendiri, lalu tirai terangkat (klik untuk lewati) |
| Sampul | `Hero.jsx` | Foto ruang baca dengan paralaks gulir & mouse, cahaya lilin, nama muncul huruf demi huruf |
| Prolog | `Prologue.jsx` | Buku terbuka yang "berdiri" saat digulir, foto terbuka dari bawah, tanda tangan tertulis |
| Daftar Isi | `Contents.jsx` | Keahlian sebagai daftar isi; garis titik-titik tergambar, bab terbuka saat diarahkan |
| Rak Karya | `Library.jsx`, `BookModal.jsx` | Buku jatuh ke rak, terangkat saat hover; klik → sampul membuka jadi dua halaman |
| Kronik | `Chronicle.jsx` | Garis tinta tergambar mengikuti gulir, segel lilin di setiap tahun |
| Surat | `Letter.jsx` | Formulir berbentuk surat; "Segel & Kirim" melipat surat jadi amplop bersegel lalu membuka aplikasi email |
| Tamat | `Colophon.jsx` | Halaman penutup & kolofon |

Hiasan di seluruh halaman:

- `MagicLayer.jsx` — debu emas melayang dan percikan bintang mengikuti kursor (satu kanvas).
- `MarginNote.jsx` — catatan kutipan yang ditempel selotip; klik untuk membalik ke terjemahannya.
- `QuoteInterlude.jsx` — jeda antar-bab berupa foto paralaks dengan kutipan yang muncul kata demi kata.
- `Bibliomancy.jsx` — tombol buku di pojok kanan bawah: buka kutipan acak dari buku terkenal.

## Palet

| Token | Hex | Dipakai untuk |
|---|---|---|
| `cream` | `#FFFBE9` | Kertas |
| `sand` | `#E3CAA5` | Halaman daftar isi |
| `tan` | `#CEAB93` | Garis, teks sekunder di latar gelap |
| `mocha` | `#AD8B73` | Aksen, nomor halaman |
| `ink` / `ink-soft` | `#3B2A21` / `#6B5444` | Teks |
| `night` | `#1C1410` | Latar malam perpustakaan |
| `gold` / `gold-soft` | `#D9B26F` / `#F1D9A6` | Kilau emas, cahaya lilin |

Font: **IM Fell English** (judul), **EB Garamond** (teks), **Cinzel** (label kapital).

## Catatan

- Semua animasi dimatikan/disederhanakan bila sistem pengguna memakai *reduce motion*.
- Formulir surat tidak butuh backend: ia membuka aplikasi email pengunjung dengan isi yang sudah terisi.
- Nama, karya, riwayat, dan alamat email adalah contoh — ganti di `src/data/portfolio.js`.
- Komponen lama toko buku (`Header`, `Shelf`, `ReadingRoom`, `BookClub`, `Visit`, `Footer`, `data/books.js`)
  masih ada di folder tapi tidak dipakai lagi; boleh dihapus.
