import { useEffect } from 'react'
import { motion } from 'motion/react'
import { profile } from '../data/portfolio'

// Layar pembuka: buku kecil yang halamannya membalik sendiri,
// lalu tirai terangkat. Klik di mana saja untuk melewati.
export default function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2900)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      role="status"
      aria-label="Membuka halaman"
      onClick={onDone}
      className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-night"
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="candle-glow pointer-events-none absolute h-[60vmin] w-[60vmin] rounded-full bg-[radial-gradient(circle,rgb(217_178_111/0.22),transparent_65%)]" />

      <div className="perspective relative h-24 w-36">
        {/* Sampul belakang */}
        <div className="absolute inset-0 rounded-sm border border-gold/40 bg-night-soft" />
        {/* Halaman kanan tetap */}
        <div className="absolute inset-y-1 right-1 left-1/2 rounded-r-sm bg-cream/90" />
        {/* Halaman kiri tetap */}
        <div className="absolute inset-y-1 left-1 right-1/2 rounded-l-sm bg-cream/80" />
        {/* Halaman yang membalik */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-y-1 right-1 left-1/2 origin-left rounded-r-sm border-l border-tan bg-cream"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -180 }}
            transition={{ duration: 0.9, delay: 0.3 + i * 0.42, ease: [0.45, 0, 0.55, 1] }}
          >
            <div className="mx-2 mt-3 space-y-1.5">
              <div className="h-px bg-tan" />
              <div className="h-px bg-tan" />
              <div className="h-px w-2/3 bg-tan" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-10 font-display text-3xl tracking-wide sm:text-4xl"
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <span className="gilt">{profile.name}</span>
      </motion.p>
      <motion.p
        className="mt-3 font-caps text-[0.7rem] uppercase tracking-[0.4em] text-tan/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ duration: 2, delay: 0.9 }}
      >
        Membuka halaman pertama…
      </motion.p>
    </motion.div>
  )
}
