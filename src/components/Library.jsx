import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { images, projects, quotes } from '../data/portfolio'
import { SectionTitle, Sparkle } from './Ornaments'
import BookModal from './BookModal'

const ease = [0.22, 1, 0.36, 1]

function Spine({ project, index, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={`Buka ${project.title} — ${project.genre}, ${project.year}`}
      className="group relative shrink-0 origin-bottom"
      style={{ height: `${project.height}%` }}
      initial={{ y: -260, opacity: 0, rotate: -8 }}
      whileInView={{ y: 0, opacity: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 90, damping: 13, delay: index * 0.1 }}
      whileHover={{ y: -26, rotate: -2.5 }}
      whileTap={{ scale: 0.97 }}
    >
      <span
        className="leather relative flex h-full w-14 flex-col items-center justify-between overflow-hidden rounded-t-[3px] py-4 shadow-[inset_-6px_0_10px_rgb(0_0_0/0.35),inset_4px_0_6px_rgb(255_255_255/0.08),4px_0_10px_rgb(0_0_0/0.4)] sm:w-16"
        style={{ backgroundColor: project.cover }}
      >
        <span className="w-full space-y-1 px-1">
          <span className="block h-px" style={{ backgroundColor: project.accent, opacity: 0.7 }} />
          <span className="block h-px" style={{ backgroundColor: project.accent, opacity: 0.4 }} />
        </span>
        <span
          className="spine-title font-caps text-[0.78rem] uppercase tracking-[0.18em] whitespace-nowrap sm:text-sm"
          style={{ color: project.accent }}
        >
          {project.title}
        </span>
        <span className="flex w-full flex-col items-center gap-2 px-1">
          <Sparkle className="h-3 w-3" style={{ color: project.accent }} />
          <span className="block h-px w-full" style={{ backgroundColor: project.accent, opacity: 0.7 }} />
          <span className="text-[0.65rem]" style={{ color: project.accent }}>
            {String(project.year).slice(2)}
          </span>
        </span>
        {/* Kilau saat hover */}
        <span className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-transparent via-gold-soft/40 to-transparent transition-transform duration-700 group-hover:translate-y-full" />
      </span>

      {/* Label melayang */}
      <span className="pointer-events-none absolute -top-16 left-1/2 hidden w-max -translate-x-1/2 rounded-[2px] border border-gold/40 bg-night/95 px-3 py-1.5 text-center opacity-0 transition-all duration-300 group-hover:-top-20 group-hover:opacity-100 md:block">
        <span className="block font-display text-base text-cream">{project.title}</span>
        <span className="block text-xs italic text-tan">{project.genre}</span>
      </span>
    </motion.button>
  )
}

// Ornamen rak yang bukan karya: buku miring, tumpukan, lilin
function ShelfDecor({ kind }) {
  if (kind === 'lean')
    return (
      <div aria-hidden="true" className="h-[78%] w-11 shrink-0 origin-bottom-left rotate-[12deg] rounded-t-[3px] bg-[#7a5a44] shadow-[inset_-5px_0_8px_rgb(0_0_0/0.35)]">
        <div className="mx-2 mt-4 h-px bg-sand/50" />
      </div>
    )
  if (kind === 'stack')
    return (
      <div aria-hidden="true" className="flex shrink-0 flex-col justify-end gap-[2px]">
        <div className="h-5 w-28 rounded-[2px] bg-[#5c4636] shadow-inner" />
        <div className="ml-2 h-6 w-24 rounded-[2px] bg-[#8a6a52]" />
        <div className="h-4 w-28 rounded-[2px] bg-[#3f3029]" />
      </div>
    )
  return (
    <div aria-hidden="true" className="relative flex h-full w-10 shrink-0 flex-col items-center justify-end">
      <div className="candle-glow absolute bottom-[38%] h-24 w-24 rounded-full bg-[radial-gradient(circle,rgb(255_210_130/0.45),transparent_65%)]" />
      <motion.div
        className="h-5 w-2.5 rounded-[50%_50%_40%_40%] bg-gradient-to-t from-[#ff9a3c] via-[#ffd27a] to-[#fff4d0]"
        animate={{ scaleY: [1, 1.2, 0.9, 1.1, 1], rotate: [-2, 3, -1, 2, -2] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        style={{ transformOrigin: 'bottom center' }}
      />
      <div className="h-px w-px" />
      <div className="h-16 w-5 rounded-t-[2px] bg-gradient-to-b from-cream to-sand" />
      <div className="h-2 w-9 rounded-[2px] bg-gold/70" />
    </div>
  )
}

export default function Library() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const quote = quotes[5]

  const shelf = [
    { type: 'decor', kind: 'candle' },
    ...projects.slice(0, 3).map((p, i) => ({ type: 'book', p, i })),
    { type: 'decor', kind: 'lean' },
    ...projects.slice(3).map((p, i) => ({ type: 'book', p, i: i + 3 })),
    { type: 'decor', kind: 'stack' },
  ]

  return (
    <section id="rak-karya" ref={ref} className="relative overflow-hidden bg-night py-28 sm:py-36">
      <motion.img
        src={images.rakTanaman}
        alt=""
        style={{ y: bgY }}
        className="absolute inset-0 h-[125%] w-full object-cover opacity-30 blur-[2px]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-night)_0%,rgb(28_20_16/0.6)_30%,rgb(28_20_16/0.7)_70%,var(--color-night)_100%)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle kicker="Bab Ketiga" title="Rak Karya" light />
        <motion.p
          className="mx-auto mt-4 max-w-[48ch] text-center italic text-sand/75"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Setiap karya adalah sebuah buku. Ambil satu dari rak, dan biarkan sampulnya terbuka.
        </motion.p>

        {/* Rak */}
        <div className="relative mt-24">
          <div className="no-scrollbar overflow-x-auto overflow-y-visible pt-24">
            <div className="mx-auto flex h-[340px] w-max items-end gap-1.5 px-6 sm:h-[380px] sm:gap-2">
              {shelf.map((s, k) =>
                s.type === 'book' ? (
                  <Spine key={k} project={s.p} index={s.i} onOpen={() => setSelected(s.i)} />
                ) : (
                  <ShelfDecor key={k} kind={s.kind} />
                ),
              )}
            </div>
          </div>
          {/* Papan kayu */}
          <div className="relative h-5 rounded-[2px] bg-gradient-to-b from-[#8a6748] to-[#5a4130] shadow-[0_20px_30px_-10px_rgb(0_0_0/0.7)]">
            <div className="absolute inset-x-0 top-0 h-px bg-[#c9a37f]/60" />
          </div>
          <div className="mx-4 h-3 bg-gradient-to-b from-[#3a2a20] to-transparent" />
          <p className="mt-4 text-center font-caps text-[0.65rem] uppercase tracking-[0.3em] text-tan/60 md:hidden">
            ← geser rak · ketuk buku →
          </p>
        </div>

        {/* Indeks karya */}
        <ol className="mx-auto mt-20 grid max-w-4xl gap-x-12 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease }}
            >
              <button
                type="button"
                onClick={() => setSelected(i)}
                className="group flex w-full items-baseline gap-4 border-b border-gold/15 py-4 text-left"
              >
                <span className="font-caps text-xs text-gold/70">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1">
                  <span className="block font-display text-2xl text-cream transition-colors group-hover:text-gold-soft">
                    {p.title}
                  </span>
                  <span className="block text-sm italic text-tan/70">{p.genre}</span>
                </span>
                <span className="text-sm text-tan/60 transition-transform group-hover:-translate-x-1">{p.year}</span>
              </button>
            </motion.li>
          ))}
        </ol>

        <motion.figure
          className="mx-auto mt-20 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <blockquote className="font-display text-xl italic text-cream/70">“{quote.text}”</blockquote>
          <figcaption className="mt-3 font-caps text-[0.65rem] uppercase tracking-[0.3em] text-gold/70">
            {quote.author} · <cite className="not-italic">{quote.book}</cite>
          </figcaption>
        </motion.figure>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <BookModal project={projects[selected]} index={selected} onClose={close} />
        )}
      </AnimatePresence>
    </section>
  )
}
