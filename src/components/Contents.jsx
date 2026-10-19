import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { chapters, images, quotes } from '../data/portfolio'
import { Deckle, SectionTitle } from './Ornaments'
import MarginNote from './MarginNote'

const ease = [0.22, 1, 0.36, 1]

// Keahlian disusun sebagai daftar isi sebuah buku.
// Arahkan/klik satu bab untuk membuka ringkasan dan alatnya.
export default function Contents() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="daftar-isi" className="relative overflow-x-clip bg-sand py-28 sm:py-36">
      <Deckle position="top" color="var(--color-sand)" />

      {/* Foto rak sebagai tekstur samar di belakang */}
      <img
        src={images.bukuDaisy}
        alt=""
        className="pointer-events-none absolute -right-32 top-10 hidden w-[520px] rotate-[8deg] opacity-[0.13] mix-blend-multiply lg:block"
      />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 md:px-8 lg:grid-cols-[1fr_280px]">
        <div>
          <SectionTitle kicker="Bab Kedua" title="Daftar Isi" align="left" />
          <p className="mt-4 max-w-[52ch] italic text-ink-soft">
            Lima bab keahlian yang saya tulis, hapus, dan tulis ulang selama bertahun-tahun.
          </p>

          <ol className="mt-12 border-t border-mocha/40">
            {chapters.map((c, i) => {
              const open = openIdx === i
              return (
                <motion.li
                  key={c.title}
                  className="border-b border-mocha/40"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    onMouseEnter={() => setOpenIdx(i)}
                    aria-expanded={open}
                    className="group flex w-full items-baseline gap-4 py-5 text-left"
                  >
                    <span className="w-10 shrink-0 font-caps text-sm text-mocha">{c.numeral}</span>
                    <span
                      className={`font-display text-2xl transition-all duration-500 sm:text-3xl ${
                        open ? 'translate-x-2 text-ink' : 'text-ink-soft group-hover:text-ink'
                      }`}
                    >
                      {c.title}
                    </span>
                    <motion.span
                      className="leader h-2 flex-1 origin-left self-center"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.12, ease }}
                    />
                    <span className="font-display text-xl text-mocha tabular-nums">{c.page}</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-14">
                          <p className="italic text-ink-soft">{c.note}</p>
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {c.tools.map((t, j) => (
                              <motion.li
                                key={t}
                                initial={{ opacity: 0, y: 10, rotate: -4 }}
                                animate={{ opacity: 1, y: 0, rotate: 0 }}
                                transition={{ delay: 0.1 + j * 0.06 }}
                                className="rounded-full border border-mocha/50 bg-cream/60 px-4 py-1 text-[0.95rem] text-ink"
                              >
                                {t}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              )
            })}
          </ol>
        </div>

        <aside className="flex flex-col items-center gap-14 lg:pt-28">
          <MarginNote quote={quotes[2]} rotate={4} />
          <MarginNote quote={quotes[7]} rotate={-5} delay={0.2} />
        </aside>
      </div>

      <Deckle position="bottom" color="var(--color-sand)" />
    </section>
  )
}
