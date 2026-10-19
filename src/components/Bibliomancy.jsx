import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { quotes } from '../data/portfolio'
import { Sparkle } from './Ornaments'

// Bibliomansi: buka halaman acak dan temukan kutipan untuk hari ini.
export default function Bibliomancy() {
  const [idx, setIdx] = useState(null)

  const draw = () => {
    let next
    do next = Math.floor(Math.random() * quotes.length)
    while (next === idx && quotes.length > 1)
    setIdx(next)
  }

  const q = idx !== null ? quotes[idx] : null

  return (
    <div className="fixed right-4 bottom-4 z-[65] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence mode="wait">
        {q && (
          <motion.figure
            key={idx}
            role="status"
            className="paper relative w-[min(20rem,calc(100vw-2rem))] origin-bottom-right rounded-[2px] border border-tan px-5 pt-5 pb-4 shadow-[0_24px_50px_-15px_rgb(0_0_0/0.7)]"
            initial={{ opacity: 0, scaleY: 0.2, y: 20, rotate: 4 }}
            animate={{ opacity: 1, scaleY: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scaleY: 0.2, y: 20 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={() => setIdx(null)}
              aria-label="Tutup kutipan"
              className="absolute top-2 right-3 text-ink-soft hover:text-ink"
            >
              ✕
            </button>
            <p className="font-caps text-[0.6rem] uppercase tracking-[0.3em] text-mocha">Halaman acak untukmu</p>
            <blockquote className="mt-2 font-display text-lg italic leading-snug text-ink">“{q.text}”</blockquote>
            {q.id && <p className="mt-2 text-sm italic text-ink-soft">{q.id}</p>}
            <figcaption className="mt-3 text-sm text-mocha">
              — {q.author}, <cite>{q.book}</cite>
            </figcaption>
            <button
              type="button"
              onClick={draw}
              className="mt-3 font-caps text-[0.65rem] uppercase tracking-[0.25em] text-ink underline decoration-tan underline-offset-4 hover:decoration-ink"
            >
              Balik halaman lain
            </button>
          </motion.figure>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={draw}
        aria-label="Buka kutipan acak dari buku terkenal"
        className="group relative grid h-14 w-14 place-items-center rounded-full border border-gold/60 bg-night text-gold shadow-[0_10px_30px_-8px_rgb(217_178_111/0.55)]"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 3.6, type: 'spring', stiffness: 160, damping: 14 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className="absolute inset-0 rounded-full border border-gold/40"
          animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
        {/* Buku terbuka kecil */}
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
          <path d="M2 5.5c3.5-1 6.5-.6 10 1.8 3.5-2.4 6.5-2.8 10-1.8v13c-3.5-1-6.5-.6-10 1.8-3.5-2.4-6.5-2.8-10-1.8z" />
          <path d="M12 7.3v13" />
        </svg>
        <Sparkle className="absolute -top-1 -right-1 h-3.5 w-3.5 text-gold-soft transition-transform duration-500 group-hover:rotate-90" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-[2px] bg-night/90 px-3 py-1 font-caps text-[0.6rem] uppercase tracking-[0.25em] text-gold opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          Bibliomansi
        </span>
      </motion.button>
    </div>
  )
}
