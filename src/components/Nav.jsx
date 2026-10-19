import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { profile } from '../data/portfolio'

const links = [
  { href: '#prolog', label: 'Prolog' },
  { href: '#daftar-isi', label: 'Daftar Isi' },
  { href: '#rak-karya', label: 'Rak Karya' },
  { href: '#kronik', label: 'Kronik' },
  { href: '#surat', label: 'Surat' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach((l) => {
      const el = document.querySelector(l.href)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-500 ${
          scrolled ? 'bg-night/95 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.6)] backdrop-blur-md' : ''
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#awal" className="group flex items-center gap-3" aria-label="Kembali ke awal">
            <span className="relative grid h-11 w-11 place-items-center rounded-full border border-gold/60 font-display text-lg text-gold transition-transform duration-700 group-hover:rotate-[360deg]">
              {profile.monogram}
              <span className="absolute inset-1 rounded-full border border-gold/25" />
            </span>
            <span className="hidden font-display text-xl text-cream sm:block">{profile.name}</span>
          </a>

          <nav aria-label="Navigasi utama" className="hidden md:block">
            <ul className="flex gap-8">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`group relative py-2 font-caps text-[0.8rem] uppercase tracking-[0.18em] transition-colors ${
                      active === l.href ? 'text-gold' : 'text-cream/75 hover:text-cream'
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-500 ${
                        active === l.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="h-px w-6 bg-gold" />
            <motion.span animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }} className="h-px w-6 bg-gold" />
          </button>
        </div>

        {/* Pita kemajuan baca */}
        <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-gradient-to-r from-gold/0 via-gold to-gold-soft" />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            aria-label="Navigasi utama"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-night md:hidden"
            initial={{ clipPath: 'circle(0% at 92% 4%)' }}
            animate={{ clipPath: 'circle(150% at 92% 4%)' }}
            exit={{ clipPath: 'circle(0% at 92% 4%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="space-y-6 text-center">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.07 }}
                >
                  <a href={l.href} onClick={() => setOpen(false)} className="font-display text-4xl text-cream">
                    <span className="mr-3 font-caps text-sm text-gold">{['I', 'II', 'III', 'IV', 'V'][i]}</span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
