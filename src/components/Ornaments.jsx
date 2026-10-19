import { motion } from 'motion/react'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.6, delay: i * 0.15, ease: 'easeInOut' }, opacity: { duration: 0.2, delay: i * 0.15 } },
  }),
}

// Garis hias yang "digambar" ketika masuk layar
export function Flourish({ className = '', delay = 0 }) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 240 30"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delayChildren: delay }}
    >
      <motion.path variants={draw} custom={0} d="M4 15h78c10 0 14-9 22-9s10 9 16 9" />
      <motion.path variants={draw} custom={0} d="M236 15h-78c-10 0-14-9-22-9s-10 9-16 9" />
      <motion.path variants={draw} custom={1} d="M120 4c-6 5-6 17 0 22 6-5 6-17 0-22z" />
      <motion.path variants={draw} custom={2} d="M104 15c4 6 10 8 16 8s12-2 16-8" />
      <motion.circle variants={draw} custom={3} cx="120" cy="15" r="2.2" fill="currentColor" />
      <motion.circle variants={draw} custom={3} cx="60" cy="15" r="1.4" fill="currentColor" />
      <motion.circle variants={draw} custom={3} cx="180" cy="15" r="1.4" fill="currentColor" />
    </motion.svg>
  )
}

// Bintang kecil berkilau
export function Sparkle({ className = '', style }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 0c.6 5.6 2.4 8 12 12-9.6 4-11.4 6.4-12 12-.6-5.6-2.4-8-12-12C9.6 8 11.4 5.6 12 0z" />
    </svg>
  )
}

// Tepi kertas bergerigi — diletakkan di atas/bawah bagian berlatar kertas
const DECKLE_PATH = (() => {
  let d = 'M0 22V12'
  let seed = 7
  const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280)
  for (let x = 0; x < 1200; ) {
    x = Math.min(1200, x + 14 + rand() * 18)
    d += `L${x.toFixed(1)} ${(6 + rand() * 9).toFixed(1)}`
  }
  return d + 'V22z'
})()

export function Deckle({ position = 'top', color = 'var(--color-cream)' }) {
  return (
    <svg
      aria-hidden="true"
      className={position === 'top' ? 'deckle-top' : 'deckle-bottom'}
      viewBox="0 0 1200 22"
      preserveAspectRatio="none"
    >
      <path fill={color} d={DECKLE_PATH} />
    </svg>
  )
}

// Judul bagian: label kecil + judul yang muncul kata per kata
export function SectionTitle({ kicker, title, light = false, align = 'center' }) {
  const words = title.split(' ')
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <motion.p
        initial={{ opacity: 0, letterSpacing: '0.6em' }}
        whileInView={{ opacity: 1, letterSpacing: '0.32em' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className={`font-caps text-xs uppercase sm:text-sm ${light ? 'text-gold' : 'text-mocha'}`}
      >
        {kicker}
      </motion.p>
      <h2
        className={`mt-4 font-display text-[2.6rem] leading-[1.05] sm:text-6xl ${light ? 'text-cream' : 'text-ink'}`}
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: '110%', rotate: 6 }}
              whileInView={{ y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
              {i < words.length - 1 && ' '}
            </motion.span>
          </span>
        ))}
      </h2>
      <Flourish
        className={`mt-5 h-6 w-48 ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-gold' : 'text-mocha'}`}
        delay={0.4}
      />
    </div>
  )
}
