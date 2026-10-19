import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { journey, quotes } from '../data/portfolio'
import { Deckle, SectionTitle } from './Ornaments'
import MarginNote from './MarginNote'

const ease = [0.22, 1, 0.36, 1]

// Riwayat perjalanan sebagai naskah: garis tinta tergambar mengikuti gulir.
export default function Chronicle() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const ink = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })

  return (
    <section id="kronik" className="paper grain relative py-28 sm:py-36">
      <Deckle position="top" />

      <SectionTitle kicker="Bab Keempat" title="Kronik Perjalanan" />

      <div className="mx-auto mt-20 max-w-4xl px-5 md:px-8">
        <div ref={ref} className="relative">
          {/* Garis tinta */}
          <div className="absolute top-0 bottom-0 left-9 w-px bg-tan/50 md:left-1/2">
            <motion.div style={{ scaleY: ink }} className="h-full w-px origin-top bg-ink" />
          </div>

          <ol className="space-y-16">
            {journey.map((j, i) => {
              const right = i % 2 === 1
              return (
                <li key={j.title} className="relative grid md:grid-cols-2 md:gap-16">
                  {/* Segel lilin */}
                  <motion.span
                    className="absolute top-1 left-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#a8553f,#6e2a1f)] font-caps text-[0.6rem] text-[#f3d2b8] shadow-[0_3px_8px_rgb(0_0_0/0.35),inset_0_-2px_4px_rgb(0_0_0/0.3)] md:left-1/2 md:-translate-x-1/2"
                    initial={{ scale: 0, rotate: -120 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', stiffness: 180, damping: 12 }}
                  >
                    {['I', 'II', 'III', 'IV', 'V', 'VI'][i]}
                  </motion.span>

                  <motion.div
                    className={`pl-16 md:pl-0 ${right ? 'md:col-start-2' : 'md:text-right'}`}
                    initial={{ opacity: 0, x: right ? 50 : -50, filter: 'blur(6px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1, ease }}
                  >
                    <p className="font-caps text-xs uppercase tracking-[0.3em] text-mocha">{j.year}</p>
                    <h3 className="mt-2 font-display text-3xl leading-tight text-ink">{j.title}</h3>
                    <p className="mt-1 italic text-ink-soft">{j.place}</p>
                    <p className={`mt-3 max-w-[42ch] text-[1.02rem] leading-relaxed text-ink-soft ${right ? '' : 'md:ml-auto'}`}>
                      {j.text}
                    </p>
                  </motion.div>
                </li>
              )
            })}
          </ol>
        </div>

        <motion.p
          className="mt-16 text-center font-display text-2xl italic text-mocha"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          …dan bab berikutnya masih ditulis.
        </motion.p>

        <div className="mt-16 flex flex-wrap justify-center gap-10">
          <MarginNote quote={quotes[6]} rotate={-4} />
          <MarginNote quote={quotes[8]} rotate={3} delay={0.15} />
          <MarginNote quote={quotes[11]} rotate={-2} delay={0.3} />
        </div>
      </div>

      <Deckle position="bottom" />
    </section>
  )
}
