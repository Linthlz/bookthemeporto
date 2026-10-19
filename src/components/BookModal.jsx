import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { Sparkle } from './Ornaments'

const ease = [0.65, 0, 0.35, 1]

function Details({ project, index }) {
  return (
    <>
      <p className="font-caps text-xs uppercase tracking-[0.3em] text-mocha">
        Jilid {String(index + 1).padStart(2, '0')} · {project.year}
      </p>
      <h3 className="mt-3 font-display text-4xl leading-tight text-ink">{project.title}</h3>
      <p className="mt-1 italic text-ink-soft">{project.genre}</p>
      <div className="my-5 h-px w-16 bg-tan" />
      <p className="drop-cap text-[1.05rem] leading-[1.75] text-ink">{project.synopsis}</p>
      <dl className="mt-6 space-y-3 text-[0.98rem]">
        <div>
          <dt className="font-caps text-[0.65rem] uppercase tracking-[0.25em] text-mocha">Peran</dt>
          <dd className="text-ink-soft">{project.role}</dd>
        </div>
        <div>
          <dt className="font-caps text-[0.65rem] uppercase tracking-[0.25em] text-mocha">Ditulis dengan</dt>
          <dd className="mt-1 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="rounded-full border border-tan px-3 py-0.5 text-sm text-ink">
                {t}
              </span>
            ))}
          </dd>
        </div>
      </dl>
      <a
        href={project.link}
        className="group mt-8 inline-flex items-center gap-3 self-start border-b border-ink pb-1 font-caps text-sm uppercase tracking-[0.2em] text-ink"
      >
        Baca selengkapnya
        <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
      </a>
    </>
  )
}

// Buku yang sampulnya terbuka ketika sebuah karya dipilih.
export default function BookModal({ project, index, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[70] flex overflow-y-auto p-4 pt-16 sm:p-8 sm:pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.2 } }}
    >
      <div className="fixed inset-0 bg-night/85 backdrop-blur-sm" onClick={onClose} />
      <div className="candle-glow pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vmin] w-[80vmin] rounded-full bg-[radial-gradient(circle,rgb(217_178_111/0.18),transparent_65%)]" />

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="fixed top-5 right-5 z-10 font-caps text-xs uppercase tracking-[0.3em] text-gold hover:text-gold-soft"
      >
        Tutup buku ✕
      </button>

      {/* Layar lebar: buku terbuka dua halaman */}
      <motion.div
        className="perspective relative m-auto hidden w-full max-w-4xl md:block"
        initial={{ y: 80, scale: 0.7, rotateX: 20 }}
        animate={{ y: 0, scale: 1, rotateX: 0 }}
        exit={{ y: 60, scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid aspect-[3/2] grid-cols-2 shadow-[0_50px_80px_-30px_rgb(0_0_0/0.8)]">
          {/* Halaman kiri di bawah sampul (bayangan saja) */}
          <div className="rounded-l-[4px] bg-night-soft" />
          {/* Halaman kanan */}
          <div className="paper relative flex flex-col overflow-y-auto rounded-r-[4px] px-10 py-9 shadow-[inset_28px_0_32px_-24px_rgb(59_42_33/0.3)]">
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Details project={project} index={index} />
            </motion.div>
          </div>
        </div>

        {/* Lembar sampul yang membuka: depan = kulit, belakang = halaman kiri */}
        <motion.div
          className="preserve-3d absolute inset-y-0 right-0 left-1/2 origin-left"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: -180 }}
          exit={{ rotateY: 0 }}
          transition={{ duration: 1.3, delay: 0.35, ease }}
        >
          <div
            className="leather backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-r-[4px] text-center"
            style={{ backgroundColor: project.cover }}
          >
            <div className="absolute inset-5 rounded-[2px] border" style={{ borderColor: `${project.accent}66` }} />
            <div className="absolute inset-7 rounded-[2px] border" style={{ borderColor: `${project.accent}33` }} />
            <Sparkle className="h-6 w-6" style={{ color: project.accent }} />
            <p className="mt-6 px-12 font-display text-4xl leading-tight" style={{ color: project.accent }}>
              {project.title}
            </p>
            <p className="mt-4 font-caps text-xs uppercase tracking-[0.3em]" style={{ color: `${project.accent}bb` }}>
              {project.year}
            </p>
          </div>

          <div
            className="paper backface-hidden absolute inset-0 flex flex-col rounded-l-[4px] px-9 py-9 shadow-[inset_-28px_0_32px_-24px_rgb(59_42_33/0.3)]"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <div className="flex-1 overflow-hidden border border-tan p-2">
              <img src={project.image} alt="" className="h-full w-full object-cover sepia-[.25]" />
            </div>
            <p className="mt-4 text-center text-sm italic text-ink-soft">Fig. — {project.title}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Layar kecil: satu halaman */}
      <motion.div
        className="paper relative z-0 m-auto w-full max-w-md overflow-hidden rounded-[4px] shadow-[0_40px_60px_-20px_rgb(0_0_0/0.8)] md:hidden"
        initial={{ y: 60, opacity: 0, rotateX: 25 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1200 }}
      >
        <img src={project.image} alt="" className="aspect-[16/10] w-full object-cover sepia-[.25]" />
        <div className="flex flex-col px-6 py-7">
          <Details project={project} index={index} />
        </div>
      </motion.div>
    </motion.div>
  )
}
