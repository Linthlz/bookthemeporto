import { motion } from 'motion/react'
import { profile } from '../data/portfolio'
import { Flourish } from './Ornaments'

// Halaman terakhir buku: "Tamat" dan kolofon.
export default function Colophon() {
  return (
    <footer className="paper grain relative pt-24 pb-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center">
        <motion.p
          className="font-display text-6xl italic text-ink sm:text-7xl"
          initial={{ opacity: 0, letterSpacing: '0.4em', filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, letterSpacing: '0.02em', filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Tamat
        </motion.p>
        <Flourish className="mt-4 h-6 w-48 text-mocha" delay={0.6} />
        <p className="mt-4 italic text-ink-soft">— untuk sementara —</p>

        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {profile.socials.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <a
                href={s.href}
                className="font-caps text-sm uppercase tracking-[0.2em] text-ink-soft underline-offset-[6px] decoration-tan transition-colors hover:text-ink hover:underline"
              >
                {s.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="mt-14 w-full border-t border-sand pt-6 text-[0.9rem] italic text-ink-soft">
          <p>
            Kolofon — Disusun dengan huruf IM Fell English &amp; EB Garamond, dicetak di atas kertas digital di{' '}
            {profile.city}.
          </p>
          <p className="mt-1">© 2026 {profile.name}. Seluruh halaman dilindungi debu bintang.</p>
        </div>

        <a
          href="#awal"
          className="mt-8 font-caps text-xs uppercase tracking-[0.3em] text-mocha transition-colors hover:text-ink"
        >
          ↑ Kembali ke halaman pertama
        </a>
      </div>
    </footer>
  )
}
