import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { images, profile, quotes } from '../data/portfolio'
import { Deckle, SectionTitle, Sparkle } from './Ornaments'

const ease = [0.22, 1, 0.36, 1]

function Field({ label, as = 'input', ...props }) {
  const Tag = as
  return (
    <label className="group block">
      <span className="font-caps text-[0.65rem] uppercase tracking-[0.25em] text-mocha">{label}</span>
      <span className="relative block">
        <Tag
          {...props}
          className="peer mt-1 block w-full resize-none bg-transparent pb-2 font-display text-xl text-ink placeholder:text-ink-soft/40 focus:outline-none"
        />
        <span className="absolute bottom-0 left-0 h-px w-full bg-tan" />
        <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-500 peer-focus:scale-x-100" />
      </span>
    </label>
  )
}

// Kontak sebagai surat: tulis, lalu segel dengan lilin.
// Mengirim membuka aplikasi email pembaca dengan isi surat yang sudah terisi.
export default function Letter() {
  const [sealed, setSealed] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const towerY = useTransform(scrollYProgress, [0, 1], [120, -120])
  const quote = quotes[12]

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSealed(true)
    const subject = encodeURIComponent(`Surat dari ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    }, 1600)
  }

  return (
    <section id="surat" ref={ref} className="relative overflow-x-clip bg-night pt-28 pb-24 sm:pt-36">
      {/* Langit malam berbintang */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }, (_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold-soft"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 70}%`,
              width: (i % 3) + 1,
              height: (i % 3) + 1,
            }}
            animate={{ opacity: [0.15, 0.9, 0.15] }}
            transition={{ duration: 2 + (i % 5), repeat: Infinity, delay: (i % 7) * 0.4 }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Menara tempat surat-surat disimpan */}
        <motion.div
          style={{ y: towerY }}
          className="pointer-events-none absolute -left-10 bottom-0 hidden w-[300px] lg:block xl:left-[2%] xl:w-[340px]"
          aria-hidden="true"
        >
          <div className="candle-glow absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(255_200_120/0.25),transparent_65%)]" />
          <img
            src={images.rumahMenara}
            alt=""
            className="relative w-full opacity-75 brightness-90 sepia-[.35] [mask-image:radial-gradient(ellipse_55%_50%_at_50%_50%,black_55%,transparent_100%)]"
          />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle kicker="Bab Penutup" title="Kirimkan Sepucuk Surat" light />
        <p className="mx-auto mt-4 max-w-[46ch] text-center italic text-sand/75">
          Punya naskah yang ingin dihidupkan? Tuliskan di sini — saya membalas setiap surat dalam dua hari kerja.
        </p>

        <div className="perspective mx-auto mt-16 max-w-2xl lg:ml-auto lg:mr-[4%]">
          <AnimatePresence mode="wait">
            {!sealed ? (
              <motion.form
                key="letter"
                onSubmit={onSubmit}
                className="paper grain relative origin-top rounded-[2px] px-7 py-10 shadow-[0_40px_70px_-25px_rgb(0_0_0/0.9)] sm:px-12"
                initial={{ opacity: 0, y: 60, rotateX: 25 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                exit={{ rotateX: 90, y: 40, scale: 0.85, opacity: 0, transition: { duration: 0.8, ease } }}
                transition={{ duration: 1, ease }}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-display text-lg italic text-ink-soft">Kepada {profile.name} yang baik,</p>
                  <div className="grid h-16 w-14 shrink-0 rotate-6 place-items-center border-2 border-dashed border-mocha/60 bg-sand/40 p-1">
                    <Sparkle className="h-6 w-6 text-mocha" />
                  </div>
                </div>

                <div className="mt-8 grid gap-7 sm:grid-cols-2">
                  <Field label="Nama pengirim" name="name" required value={form.name} onChange={update('name')} placeholder="Nama Anda" autoComplete="name" />
                  <Field label="Alamat balasan" name="email" type="email" required value={form.email} onChange={update('email')} placeholder="nama@surel.com" autoComplete="email" />
                </div>
                <div className="mt-7">
                  <Field label="Isi surat" as="textarea" name="message" rows={4} required value={form.message} onChange={update('message')} placeholder="Ceritakan proyek atau sekadar menyapa…" />
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
                  <p className="text-sm italic text-ink-soft">
                    atau langsung ke{' '}
                    <a href={`mailto:${profile.email}`} className="text-ink underline decoration-tan underline-offset-4 hover:decoration-ink">
                      {profile.email}
                    </a>
                  </p>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.06, rotate: -4 }}
                    whileTap={{ scale: 0.92 }}
                    className="relative grid h-20 w-20 place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#b25f47,#6e2a1f)] font-caps text-[0.62rem] uppercase leading-tight tracking-[0.12em] text-[#f6dcc6] shadow-[0_6px_14px_rgb(0_0_0/0.4),inset_0_-3px_6px_rgb(0_0_0/0.35)]"
                  >
                    <span className="absolute inset-2 rounded-full border border-[#f6dcc6]/40" />
                    Segel &amp;
                    <br />
                    Kirim
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="envelope"
                className="flex flex-col items-center py-6 text-center"
                initial={{ opacity: 0, y: -40, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease }}
              >
                <div className="relative h-44 w-72">
                  <div className="absolute inset-0 rounded-[3px] bg-sand shadow-[0_30px_50px_-20px_rgb(0_0_0/0.8)]" />
                  <div className="absolute inset-x-0 bottom-0 h-full [clip-path:polygon(0_100%,50%_45%,100%_100%)] bg-tan" />
                  <motion.div
                    className="absolute inset-x-0 top-0 h-[60%] origin-top [clip-path:polygon(0_0,100%_0,50%_100%)] bg-mocha"
                    initial={{ rotateX: 180 }}
                    animate={{ rotateX: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease }}
                  />
                  <motion.div
                    className="absolute top-[42%] left-1/2 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#b25f47,#6e2a1f)] font-display text-xl text-[#f6dcc6] shadow-[0_4px_10px_rgb(0_0_0/0.45)]"
                    initial={{ scale: 3, opacity: 0, rotate: -40 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.9 }}
                  >
                    {profile.monogram}
                  </motion.div>
                </div>
                <motion.p
                  className="mt-10 font-display text-3xl text-cream"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Surat Anda telah disegel.
                </motion.p>
                <motion.p
                  className="mt-2 max-w-[40ch] italic text-sand/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  Aplikasi email Anda akan terbuka untuk mengirimkannya. Terima kasih telah menulis.
                </motion.p>
                <button
                  type="button"
                  onClick={() => {
                    setSealed(false)
                    setForm({ name: '', email: '', message: '' })
                  }}
                  className="mt-8 font-caps text-xs uppercase tracking-[0.3em] text-gold hover:text-gold-soft"
                >
                  Tulis surat lain
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.figure
          className="mx-auto mt-24 max-w-2xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        >
          <blockquote className="font-display text-xl italic text-cream/65">“{quote.text}”</blockquote>
          <figcaption className="mt-3 font-caps text-[0.65rem] uppercase tracking-[0.3em] text-gold/70">
            {quote.author} · <cite className="not-italic">{quote.book}</cite>
          </figcaption>
        </motion.figure>
      </div>

      <Deckle position="bottom" color="var(--color-night)" />
    </section>
  )
}
