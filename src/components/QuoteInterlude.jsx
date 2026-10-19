import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Sparkle } from './Ornaments'

// Jeda antar-bab: foto paralaks dengan kutipan yang muncul kata demi kata.
export default function QuoteInterlude({ quote, image, position = '50% 50%' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-18%', '18%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.25, 1.1, 1.25])
  const words = quote.text.split(' ')

  return (
    <section ref={ref} className="relative overflow-hidden bg-night py-32 sm:py-44">
      <motion.img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y, scale, objectPosition: position }}
      />
      <div className="absolute inset-0 bg-night/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgb(28_20_16/0.9)_85%)]" />

      <figure className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          className="mx-auto mb-8 w-fit text-gold"
          initial={{ opacity: 0, rotate: -90, scale: 0 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Sparkle className="h-7 w-7" />
        </motion.div>

        <blockquote className="font-display text-[1.9rem] leading-[1.3] text-cream sm:text-5xl sm:leading-[1.2]">
          <span className="gilt">“</span>
          {words.map((w, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
            >
              {w}
              {i < words.length - 1 && '\u00a0'}
            </motion.span>
          ))}
          <span className="gilt">”</span>
        </blockquote>

        {quote.id && (
          <motion.p
            className="mx-auto mt-6 max-w-[52ch] italic text-sand/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: words.length * 0.06 + 0.2 }}
          >
            {quote.id}
          </motion.p>
        )}

        <motion.figcaption
          className="mt-8 flex items-center justify-center gap-4 font-caps text-xs uppercase tracking-[0.3em] text-gold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: words.length * 0.06 + 0.4 }}
        >
          <span className="h-px w-10 bg-gold/50" />
          <span>
            {quote.author} · <cite className="not-italic text-sand/80">{quote.book}</cite>
          </span>
          <span className="h-px w-10 bg-gold/50" />
        </motion.figcaption>
      </figure>
    </section>
  )
}
