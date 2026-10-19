import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { images, profile, quotes } from '../data/portfolio'
import { Deckle, SectionTitle } from './Ornaments'
import MarginNote from './MarginNote'

const ease = [0.22, 1, 0.36, 1]

export default function Prologue() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [28, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1])
  const leftRotate = useTransform(scrollYProgress, [0.2, 1], [-25, 0])

  return (
    <section id="prolog" className="paper grain relative py-28 sm:py-36">
      <Deckle position="top" />

      <SectionTitle kicker="Bab Pembuka" title="Prolog" />

      <MarginNote
        quote={quotes[1]}
        rotate={-6}
        className="absolute top-40 left-[3%] hidden 2xl:block"
        delay={0.3}
      />
      <MarginNote
        quote={quotes[3]}
        rotate={5}
        className="absolute right-[3%] bottom-24 hidden 2xl:block"
        delay={0.5}
      />

      <div ref={ref} className="perspective mx-auto mt-16 max-w-5xl px-5 md:px-8">
        <motion.div
          style={{ rotateX, scale }}
          className="grid rounded-[3px] shadow-[0_2px_0_var(--color-sand),0_4px_0_var(--color-cream),0_5px_0_var(--color-tan),0_7px_0_var(--color-cream),0_8px_0_var(--color-tan),0_40px_60px_-25px_rgb(59_42_33/0.55)] md:grid-cols-2"
        >
          {/* Halaman kiri */}
          <motion.figure
            style={{ rotateY: leftRotate, transformPerspective: 1600, transformOrigin: 'right center' }}
            className="paper relative flex flex-col px-6 pt-8 pb-6 shadow-[inset_-28px_0_32px_-24px_rgb(59_42_33/0.3)] md:px-10 md:pt-10"
          >
            {/* Pemicu ada di bingkai: elemen yang ter-clip penuh tak terdeteksi IntersectionObserver */}
            <motion.div
              className="relative overflow-hidden border border-tan p-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.img
                src={images.potret}
                alt={`Potret ${profile.name}`}
                className="aspect-[4/5] w-full object-cover object-center sepia-[.12]"
                variants={{
                  hidden: { clipPath: 'inset(100% 0 0 0)', scale: 1.3 },
                  show: { clipPath: 'inset(0% 0 0 0)', scale: 1, transition: { duration: 1.6, ease } },
                }}
              />
            </motion.div>
            <figcaption className="mt-4 text-center text-[0.95rem] italic text-ink-soft">
              Fig. I — Sang penulis, di antara buku dan cahaya senja.
            </figcaption>
            <span className="mt-auto pt-4 text-center text-sm text-mocha">ii</span>
          </motion.figure>

          {/* Halaman kanan */}
          <div className="paper relative flex flex-col px-6 pt-10 pb-6 shadow-[inset_28px_0_32px_-24px_rgb(59_42_33/0.3)] md:px-12">
            <p className="font-caps text-xs uppercase tracking-[0.3em] text-mocha">Tentang saya</p>
            {profile.about.map((p, i) => (
              <motion.p
                key={i}
                className={`mt-5 text-[1.08rem] leading-[1.75] text-ink-soft ${i === 0 ? 'drop-cap text-ink' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.25, ease }}
              >
                {p}
              </motion.p>
            ))}

            <dl className="mt-8 grid grid-cols-3 border-y border-sand py-5 text-center">
              {profile.facts.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 140, damping: 12, delay: 0.5 + i * 0.15 }}
                >
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="font-display text-4xl text-mocha">{f.value}</dd>
                  <dd className="mt-1 text-[0.82rem] italic leading-tight text-ink-soft">{f.label}</dd>
                </motion.div>
              ))}
            </dl>

            {/* Tanda tangan yang ditulis */}
            <div className="mt-6 flex items-end justify-between">
              <span className="text-sm italic text-ink-soft">{profile.city}</span>
              <motion.svg viewBox="0 0 200 60" className="h-14 w-44 text-ink" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-label={`Tanda tangan ${profile.name}`}>
                <motion.path
                  d="M8 44c10-26 22-36 26-30s-10 30-4 30 14-24 20-24-4 22 2 22 10-14 16-14-2 12 4 12 12-20 18-20c4 0-6 22 0 22s14-18 22-18 0 16 8 16 14-10 22-12M60 52c30-4 70-6 120-8"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.6, delay: 0.9, ease: 'easeInOut' }}
                />
              </motion.svg>
            </div>
            <span className="mt-4 text-center text-sm text-mocha">iii</span>
          </div>
        </motion.div>

        {/* Catatan pinggir untuk layar kecil */}
        <div className="mt-14 flex flex-wrap justify-center gap-10 2xl:hidden">
          <MarginNote quote={quotes[1]} rotate={-3} />
          <MarginNote quote={quotes[3]} rotate={3} delay={0.2} />
        </div>
      </div>

    </section>
  )
}
