import { useState } from 'react'
import { motion } from 'motion/react'

// Secarik catatan kutipan yang "ditempel" di pinggir halaman.
// Melayang pelan; klik untuk membalik dan membaca terjemahannya.
export default function MarginNote({ quote, rotate = -4, className = '', delay = 0, tone = 'paper' }) {
  const [flipped, setFlipped] = useState(false)
  const back = quote.id ?? `Dari ${quote.book}, karya ${quote.author}.`
  const face =
    tone === 'dark'
      ? 'bg-night-soft text-cream border-gold/30'
      : 'bg-[#fff6dc] text-ink border-tan/70'

  return (
    <motion.div
      className={`perspective w-60 ${className}`}
      initial={{ opacity: 0, y: 40, rotate: rotate * 3 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6 + delay * 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.button
          type="button"
          onClick={() => setFlipped((v) => !v)}
          aria-label={flipped ? 'Tampilkan kutipan' : 'Balik catatan'}
          className="preserve-3d relative block w-full text-left"
          animate={{ rotateY: flipped ? 180 : 0 }}
          whileHover={{ scale: 1.04, rotate: -rotate }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
        >
          {/* Selotip */}
          <span className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-[-3deg] bg-sand/70 shadow-sm backdrop-blur-[1px]" />

          <div className={`backface-hidden border px-5 pt-6 pb-4 shadow-[0_14px_30px_-12px_rgb(0_0_0/0.45)] ${face}`}>
            <span aria-hidden="true" className="font-display text-4xl leading-none text-mocha">“</span>
            <p className="-mt-3 font-display text-[1.02rem] italic leading-snug">{quote.text}</p>
            <p className="mt-3 font-caps text-[0.6rem] uppercase tracking-[0.2em] text-mocha">
              — {quote.author}
            </p>
            <p className="text-[0.8rem] italic opacity-70">{quote.book}</p>
          </div>

          <div
            className={`backface-hidden absolute inset-0 flex flex-col justify-center border px-5 py-4 shadow-[0_14px_30px_-12px_rgb(0_0_0/0.45)] ${face}`}
            style={{ transform: 'rotateY(180deg)' }}
          >
            <p className="font-caps text-[0.6rem] uppercase tracking-[0.25em] text-mocha">
              {quote.id ? 'Terjemahan bebas' : 'Catatan pinggir'}
            </p>
            <p className="mt-2 text-[0.98rem] leading-snug">{back}</p>
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
