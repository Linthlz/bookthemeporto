import { useState } from 'react'
import { books, rupiah } from '../data/books'

const spineStyles = {
  mocha: 'bg-mocha text-cream border-ink/20',
  ink: 'bg-ink text-sand border-ink',
  sand: 'bg-sand text-ink border-mocha/40',
  tan: 'bg-tan text-ink border-mocha/40',
  cream: 'bg-cream text-ink border-tan',
}
const bandStyles = {
  mocha: 'border-cream/50',
  ink: 'border-sand/60',
  sand: 'border-mocha/60',
  tan: 'border-ink/30',
  cream: 'border-mocha/50',
}

export default function Shelf() {
  const [activeId, setActiveId] = useState(books[0].id)
  const [saved, setSaved] = useState(() => new Set())
  const book = books.find((b) => b.id === activeId)
  const isSaved = saved.has(book.id)

  const toggleSave = () =>
    setSaved((prev) => {
      const next = new Set(prev)
      next.has(book.id) ? next.delete(book.id) : next.add(book.id)
      return next
    })

  return (
    <section id="rak" className="scroll-mt-6 border-t border-sand pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">Rak bulan ini</h2>
          <p className="mt-4 text-ink-soft">
            Sepuluh buku yang baru kami bersihkan, perbaiki jilidnya, dan beri sampul pelindung. Pilih
            punggung buku untuk membaca keterangannya.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Rak */}
          <div className="min-w-0 lg:col-span-7">
            <div
              role="listbox"
              aria-label="Buku di rak bulan ini"
              className="no-scrollbar flex items-end gap-[3px] overflow-x-auto px-3 pt-8"
            >
              {books.map((b) => {
                const active = b.id === activeId
                return (
                  <button
                    key={b.id}
                    type="button"
                    role="option"
                    aria-selected={active}
                    aria-label={`${b.title}, ${b.author}`}
                    onClick={() => setActiveId(b.id)}
                    style={{ height: Math.round(b.h * 1.12), width: Math.round(b.w * 1.15) }}
                    className={`relative flex shrink-0 flex-col items-center justify-between rounded-t-[3px] border px-1 py-3 transition-transform duration-300 ease-out ${
                      spineStyles[b.spine]
                    } ${active ? '-translate-y-5' : 'hover:-translate-y-1.5'}`}
                  >
                    <span className={`block h-1.5 w-full border-t-2 border-b ${bandStyles[b.spine]}`} />
                    <span className="spine-title max-h-[78%] overflow-hidden font-display text-[1.02rem] leading-none text-ellipsis whitespace-nowrap">
                      {b.title}
                    </span>
                    <span className={`block h-1.5 w-full border-t border-b-2 ${bandStyles[b.spine]}`} />
                  </button>
                )
              })}
            </div>
            {/* Papan kayu */}
            <div className="h-4 rounded-[2px] bg-mocha shadow-[0_14px_22px_-12px_rgb(59_42_33/0.55)]" />
            <div className="mx-3 h-2 bg-ink/20" />
            <p className="mt-5 text-[0.95rem] italic text-ink-soft">
              Semua harga sudah termasuk sampul plastik pelindung.
            </p>
          </div>

          {/* Keterangan buku */}
          <article aria-live="polite" className="border-t border-sand pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-2 lg:pl-12">
            <h3 className="font-display text-4xl leading-tight">{book.title}</h3>
            <p className="mt-1 text-lg italic text-ink-soft">
              {book.author}, terbit pertama {book.year}
            </p>

            <p className="mt-6 text-[1.12rem] leading-relaxed first-letter:float-left first-letter:mt-1 first-letter:mr-2 first-letter:font-display first-letter:text-[3.4rem] first-letter:leading-[0.8] first-letter:text-mocha">
              {book.blurb}
            </p>

            <dl className="mt-6 grid grid-cols-[6rem_1fr] gap-y-2 border-t border-sand pt-5 text-[1rem]">
              <dt className="text-ink-soft">Edisi</dt>
              <dd>{book.edition}</dd>
              <dt className="text-ink-soft">Kondisi</dt>
              <dd>{book.condition}</dd>
            </dl>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <p className="font-display text-3xl">{rupiah(book.price)}</p>
              <button
                type="button"
                onClick={toggleSave}
                aria-pressed={isSaved}
                className={`rounded-[2px] px-6 py-2.5 transition-colors ${
                  isSaved ? 'border border-mocha bg-sand/60 text-ink' : 'bg-ink text-cream hover:bg-ink-soft'
                }`}
              >
                {isSaved ? 'Disimpan untuk Anda' : 'Simpan untuk saya'}
              </button>
            </div>
            {isSaved && (
              <p className="mt-3 text-[0.95rem] text-ink-soft">
                Kami tahan buku ini selama 3 hari. Sebutkan nama Anda di kasir.
              </p>
            )}
          </article>
        </div>
      </div>
    </section>
  )
}
