import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { images, profile, quotes } from '../data/portfolio'
import { Flourish, Sparkle } from './Ornaments'

const ease = [0.22, 1, 0.36, 1]

export default function Hero({ ready }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.3])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // Paralaks halus mengikuti mouse
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 40, damping: 18 })
  const sy = useSpring(my, { stiffness: 40, damping: 18 })
  const bgX = useTransform(sx, (v) => v * -14)
  const bgYm = useTransform(sy, (v) => v * -10)
  const glowX = useTransform(sx, (v) => `${50 + v * 10}%`)
  const glowY = useTransform(sy, (v) => `${45 + v * 10}%`)

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  const letters = profile.name.split('')
  const quote = quotes[0]
  const show = ready ? 'show' : 'hidden'

  return (
    <section
      id="awal"
      ref={ref}
      onPointerMove={onMove}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-night"
    >
      <motion.div className="absolute inset-0" style={{ scale: bgScale, y: bgY }}>
        <motion.img
          src={images.ruangBaca}
          alt=""
          className="h-full w-full object-cover object-[50%_40%]"
          style={{ x: bgX, y: bgYm }}
          initial={{ filter: 'blur(14px) brightness(0.4)' }}
          animate={ready ? { filter: 'blur(0px) brightness(1)' } : {}}
          transition={{ duration: 2.4, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Lapisan senja: vignette hangat + cahaya lilin mengikuti mouse */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(28_20_16/0.75)_0%,rgb(28_20_16/0.35)_40%,rgb(28_20_16/0.85)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(28_20_16/0.85)_100%)]" />
      <motion.div
        className="candle-glow pointer-events-none absolute h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(241_217_166/0.22),transparent_65%)] mix-blend-screen"
        style={{ left: glowX, top: glowY }}
      />

      {/* Bintang-bintang kecil */}
      {[
        ['12%', '22%', 14, 0],
        ['84%', '18%', 10, 0.8],
        ['76%', '70%', 16, 1.6],
        ['18%', '74%', 9, 2.2],
        ['50%', '12%', 8, 1.2],
      ].map(([l, t, s, d], i) => (
        <motion.div
          key={i}
          className="absolute text-gold-soft"
          style={{ left: l, top: t }}
          initial={{ opacity: 0, scale: 0 }}
          animate={ready ? { opacity: [0, 1, 0.3, 1], scale: [0, 1, 0.7, 1], rotate: [0, 90] } : {}}
          transition={{ duration: 4, delay: 1 + d, repeat: Infinity, repeatType: 'reverse' }}
        >
          <Sparkle style={{ width: s, height: s }} />
        </motion.div>
      ))}

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-4xl px-5 pt-28 pb-32 text-center"
      >
        <motion.p
          className="font-caps text-[0.62rem] uppercase tracking-[0.28em] text-gold sm:text-xs sm:tracking-[0.45em]"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          — Sebuah Portofolio · Jilid MMXXVI —
        </motion.p>

        <h1 className="mt-6 font-display text-[3.4rem] leading-[0.95] text-cream sm:text-8xl lg:text-[8.5rem]" aria-label={profile.name}>
          <motion.span
            aria-hidden="true"
            className="inline-block"
            initial="hidden"
            animate={show}
            variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } } }}
          >
            {letters.map((ch, i) => (
              <motion.span
                key={i}
                className={`inline-block ${ch === ' ' ? 'w-[0.3em] sm:block sm:h-0 sm:w-full' : ''}`}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: 'blur(12px)', rotateX: -80 },
                  show: { opacity: 1, y: 0, filter: 'blur(0px)', rotateX: 0, transition: { duration: 1.1, ease } },
                }}
              >
                {ch === ' ' ? ' ' : ch}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          {ready && <Flourish className="mx-auto mt-6 h-7 w-56 text-gold" delay={1.4} />}
        </motion.div>

        <motion.p
          className="mt-6 font-display text-xl italic text-sand sm:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.7, ease }}
        >
          {profile.role}
        </motion.p>

        <motion.p
          className="mx-auto mt-5 max-w-[46ch] text-[1.08rem] leading-relaxed text-cream/75"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.9, ease }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.1, ease }}
        >
          <a
            href="#rak-karya"
            className="group relative overflow-hidden rounded-[2px] border border-gold bg-gold/90 px-8 py-3 font-caps text-sm uppercase tracking-[0.2em] text-night transition-colors"
          >
            <span className="relative z-10">Buka Rak Karya</span>
            <span className="absolute inset-0 -translate-x-full bg-gold-soft transition-transform duration-500 group-hover:translate-x-0" />
          </a>
          <a
            href="#surat"
            className="rounded-[2px] border border-cream/30 px-8 py-3 font-caps text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Kirim Surat
          </a>
        </motion.div>

        <motion.figure
          className="mx-auto mt-12 max-w-xl"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1.6, delay: 2.5 }}
        >
          <blockquote className="font-display text-base italic leading-relaxed text-cream/60 sm:text-lg">
            “{quote.text}”
          </blockquote>
          <figcaption className="mt-2 font-caps text-[0.65rem] uppercase tracking-[0.3em] text-gold/70">
            {quote.author} · <cite className="not-italic">{quote.book}</cite>
          </figcaption>
        </motion.figure>
      </motion.div>

      {/* Ajakan menggulir */}
      <motion.a
        href="#prolog"
        aria-label="Gulir ke prolog"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gold/80"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 3 }}
      >
        <span className="font-caps text-[0.6rem] uppercase tracking-[0.35em]">Balik halaman</span>
        <span className="relative h-10 w-px overflow-hidden bg-gold/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-gold"
            animate={{ y: ['-100%', '250%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
