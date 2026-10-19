import { useState } from 'react'

const links = [
  { href: '#rak', label: 'Koleksi' },
  { href: '#ruang-baca', label: 'Ruang baca' },
  { href: '#klub-buku', label: 'Klub buku' },
  { href: '#kunjungi', label: 'Kunjungi' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 border-b border-sand">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#" className="font-display text-2xl leading-none tracking-wide text-ink">
          Pustaka Senja
        </a>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex gap-9 text-[1.05rem]">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-ink-soft underline-offset-[6px] decoration-tan hover:text-ink hover:underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden text-ink-soft"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Tutup' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigasi utama" className="border-t border-sand md:hidden">
          <ul className="px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-display text-xl text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
