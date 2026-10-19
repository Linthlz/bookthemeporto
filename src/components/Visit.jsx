import { useState } from 'react'
import rumahMenara from '../assets/rumah-menara.jpg'

export default function Visit() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | done

  const submit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('done')
  }

  return (
    <section id="kunjungi" className="scroll-mt-6 bg-tan/30 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
        <div className="md:col-span-4">
          <img
            src={rumahMenara}
            alt="Ilustrasi rumah menara tua beratap jingga dengan banyak jendela"
            className="mx-auto w-full max-w-xs rounded-[2px] md:max-w-none"
            loading="lazy"
          />
        </div>

        <div className="md:col-span-8">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">Cari menara beratap jingga</h2>
          <p className="mt-5 max-w-[54ch] text-[1.15rem] text-ink-soft">
            Kami ada di ujung Jalan Kenanga, bangunan tinggi yang sedikit miring. Pintu masuknya di sisi
            kanan, di bawah lampu tembaga.
          </p>

          <address className="mt-8 grid max-w-xl gap-6 not-italic sm:grid-cols-2">
            <div>
              <p className="font-display text-xl">Alamat</p>
              <p className="mt-1 text-ink-soft">
                Jalan Kenanga No. 12
                <br />
                Parkir sepeda di halaman depan
              </p>
            </div>
            <div>
              <p className="font-display text-xl">Hubungi</p>
              <p className="mt-1 text-ink-soft">
                <a href="tel:+6236200000" className="hover:text-ink">(0362) 000 000</a>
                <br />
                <a href="mailto:halo@pustakasenja.id" className="hover:text-ink">halo@pustakasenja.id</a>
              </p>
            </div>
          </address>

          <form onSubmit={submit} noValidate className="mt-12 max-w-xl border-t border-mocha/40 pt-8">
            <h3 className="font-display text-2xl">Surat dari rak</h3>
            <p className="mt-2 text-ink-soft">
              Satu surat setiap awal bulan, berisi buku yang baru tiba dan jadwal klub buku.
            </p>

            {status === 'done' ? (
              <p role="status" className="mt-5 text-lg">
                Terima kasih. Surat pertama dikirim ke {email} awal bulan depan.
              </p>
            ) : (
              <>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="email" className="sr-only">
                    Alamat email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (status === 'error') setStatus('idle')
                    }}
                    placeholder="nama@email.com"
                    aria-invalid={status === 'error'}
                    aria-describedby={status === 'error' ? 'email-error' : undefined}
                    className="flex-1 rounded-[2px] border border-mocha bg-cream px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:outline-none focus-visible:outline-2 focus-visible:outline-ink"
                  />
                  <button
                    type="submit"
                    className="rounded-[2px] bg-ink px-6 py-3 text-cream transition-colors hover:bg-ink-soft"
                  >
                    Kirimi saya surat
                  </button>
                </div>
                {status === 'error' && (
                  <p id="email-error" className="mt-2 text-[1rem] text-ink">
                    Alamat email belum lengkap. Contoh: nama@email.com
                  </p>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
