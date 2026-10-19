import { useState } from 'react'
import bukuDaisy from '../assets/buku-daisy.jpg'

const meetings = [
  { id: 'okt-24', day: '24', month: 'Okt', weekday: 'Sabtu', book: 'Siti Nurbaya', host: 'Dipandu Ibu Ratna', seats: 4 },
  { id: 'nov-07', day: '7', month: 'Nov', weekday: 'Sabtu', book: 'The Secret Garden', host: 'Dipandu Kadek', seats: 9 },
  { id: 'nov-21', day: '21', month: 'Nov', weekday: 'Sabtu', book: 'Layar Terkembang', host: 'Dipandu Pak Wayan', seats: 12 },
]

export default function BookClub() {
  const [joined, setJoined] = useState(() => new Set())

  const toggle = (id) =>
    setJoined((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <section id="klub-buku" className="scroll-mt-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:gap-14 md:px-8">
        <div className="md:col-span-7 md:order-1">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">Klub buku, dua minggu sekali</h2>
          <p className="mt-5 max-w-[56ch] text-[1.15rem] text-ink-soft">
            Kami membaca satu buku bersama, lalu berkumpul hari Sabtu pukul 16.00 di ruang baca. Datang
            walau belum selesai membaca; obrolannya justru sering paling seru di situ.
          </p>

          <ol className="mt-10 border-t border-sand">
            {meetings.map((m) => {
              const isJoined = joined.has(m.id)
              return (
                <li
                  key={m.id}
                  className="grid grid-cols-[4.5rem_1fr] items-center gap-x-5 gap-y-3 border-b border-sand py-6 sm:grid-cols-[5rem_1fr_auto]"
                >
                  <div className="text-center leading-none">
                    <span className="block font-display text-[2.8rem] text-mocha">{m.day}</span>
                    <span className="mt-1 block text-[0.95rem] text-ink-soft">{m.month}</span>
                  </div>
                  <div>
                    <p className="font-display text-2xl leading-snug">{m.book}</p>
                    <p className="text-[1rem] text-ink-soft">
                      {m.weekday}, 16.00. {m.host}. Sisa {isJoined ? m.seats - 1 : m.seats} kursi.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggle(m.id)}
                    aria-pressed={isJoined}
                    className={`col-start-2 justify-self-start rounded-[2px] px-5 py-2 text-[1rem] transition-colors sm:col-start-3 ${
                      isJoined
                        ? 'border border-mocha bg-sand/60 text-ink'
                        : 'border border-ink text-ink hover:bg-ink hover:text-cream'
                    }`}
                  >
                    {isJoined ? 'Terdaftar' : 'Daftar'}
                  </button>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="md:col-span-5 md:order-2">
          <img
            src={bukuDaisy}
            alt="Buku terbuka di atas rumput dengan tiga tangkai bunga daisy di halamannya"
            className="aspect-square w-full rounded-[2px] object-cover md:mt-16"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
