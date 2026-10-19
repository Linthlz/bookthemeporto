import ruangBaca from '../assets/ruang-baca.jpg'
import rakTanaman from '../assets/rak-tanaman.jpg'

const hours = [
  ['Senin – Jumat', '09.00 – 20.00'],
  ['Sabtu', '08.00 – 21.00'],
  ['Minggu', '10.00 – 18.00'],
]

export default function ReadingRoom() {
  return (
    <section id="ruang-baca" className="scroll-mt-6 bg-sand/35 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:gap-14 md:px-8">
        <div className="md:col-span-5">
          <img
            src={ruangBaca}
            alt="Ruang baca dengan rak buku dari lantai ke langit-langit, jendela besar, dan tanaman hijau"
            className="aspect-[3/4] w-full rounded-[2px] object-cover md:sticky md:top-8"
            loading="lazy"
          />
        </div>

        <div className="md:col-span-7 md:pt-6">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">Ruang baca di lantai dua</h2>
          <div className="mt-6 max-w-[58ch] space-y-5 text-[1.15rem] leading-[1.75] text-ink-soft">
            <p>
              Jendela besarnya menghadap pohon ketapang. Ada enam kursi berlengan, satu meja panjang, dan
              rak-rak yang boleh Anda jelajahi tanpa harus membeli apa pun.
            </p>
            <p>
              Membaca di tempat selalu gratis. Kalau satu buku tidak bisa Anda tinggalkan, bawa ke kasir
              di bawah dan buku itu ikut pulang bersama Anda.
            </p>
          </div>

          <figure className="mt-12 grid items-end gap-6 sm:grid-cols-[1.1fr_1fr]">
            <img
              src={rakTanaman}
              alt="Rak buku kayu dengan tanaman merambat di samping jendela"
              className="aspect-[4/3] w-full rounded-[2px] object-cover"
              loading="lazy"
            />
            <figcaption className="text-[1rem] italic text-ink-soft">
              Tanaman di rak dirawat bergiliran oleh para pengunjung tetap. Silakan siram kalau tanahnya
              kering.
            </figcaption>
          </figure>

          <div className="mt-12 max-w-md">
            <h3 className="font-display text-2xl">Jam buka</h3>
            <dl className="mt-4 divide-y divide-tan/60 border-y border-tan/60">
              {hours.map(([day, time]) => (
                <div key={day} className="flex justify-between py-3">
                  <dt>{day}</dt>
                  <dd className="tabular-nums text-ink-soft">{time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
