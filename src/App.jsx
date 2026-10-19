import { useCallback, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'motion/react'
import { images, quotes } from './data/portfolio'
import Preloader from './components/Preloader'
import MagicLayer from './components/MagicLayer'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Prologue from './components/Prologue'
import Contents from './components/Contents'
import QuoteInterlude from './components/QuoteInterlude'
import Library from './components/Library'
import Chronicle from './components/Chronicle'
import Letter from './components/Letter'
import Colophon from './components/Colophon'
import Bibliomancy from './components/Bibliomancy'

export default function App() {
  const [ready, setReady] = useState(false)
  const done = useCallback(() => setReady(true), [])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{!ready && <Preloader onDone={done} />}</AnimatePresence>

      <a
        href="#prolog"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
      >
        Langsung ke isi
      </a>

      <MagicLayer />
      <Nav />
      <main>
        <Hero ready={ready} />
        <Prologue />
        <Contents />
        <QuoteInterlude quote={quotes[4]} image={images.bukuDaisy} position="50% 40%" />
        <Library />
        <QuoteInterlude quote={quotes[9]} image={images.ayunan} position="50% 30%" />
        <Chronicle />
        <QuoteInterlude quote={quotes[10]} image={images.ruangBaca} position="50% 60%" />
        <Letter />
      </main>
      <Colophon />
      <Bibliomancy />
    </MotionConfig>
  )
}
