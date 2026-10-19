import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

// Satu kanvas di atas halaman: debu emas yang melayang pelan,
// dan percikan bintang yang mengikuti kursor (hanya perangkat dengan mouse).
export default function MagicLayer() {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w = 0
    let h = 0
    let dpr = 1
    let raf = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const count = w < 640 ? 28 : 55
    const motes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.6 + Math.random() * 1.8,
      vy: -(0.08 + Math.random() * 0.25),
      phase: Math.random() * Math.PI * 2,
      speed: 0.004 + Math.random() * 0.01,
    }))

    const sparks = []
    const finePointer = window.matchMedia('(pointer: fine)').matches
    let last = 0
    const onMove = (e) => {
      const now = performance.now()
      if (now - last < 22) return
      last = now
      for (let i = 0; i < 2; i++) {
        sparks.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.8,
          vy: Math.random() * 0.6 + 0.2,
          life: 1,
          size: 1.5 + Math.random() * 3,
          star: Math.random() > 0.55,
        })
      }
    }
    if (finePointer) window.addEventListener('pointermove', onMove, { passive: true })

    const drawStar = (x, y, s) => {
      ctx.beginPath()
      ctx.moveTo(x, y - s)
      ctx.quadraticCurveTo(x, y, x + s, y)
      ctx.quadraticCurveTo(x, y, x, y + s)
      ctx.quadraticCurveTo(x, y, x - s, y)
      ctx.quadraticCurveTo(x, y, x, y - s)
      ctx.fill()
    }

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'

      for (const m of motes) {
        m.phase += m.speed
        m.y += m.vy
        m.x += Math.sin(m.phase) * 0.25
        if (m.y < -10) {
          m.y = h + 10
          m.x = Math.random() * w
        }
        const a = 0.25 + Math.sin(m.phase * 2) * 0.2
        const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 4)
        g.addColorStop(0, `rgba(255, 228, 170, ${a})`)
        g.addColorStop(1, 'rgba(255, 228, 170, 0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(m.x, m.y, m.r * 4, 0, Math.PI * 2)
        ctx.fill()
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x += s.vx
        s.y += s.vy
        s.life -= 0.022
        if (s.life <= 0) {
          sparks.splice(i, 1)
          continue
        }
        ctx.fillStyle = `rgba(241, 210, 150, ${s.life * 0.9})`
        if (s.star) drawStar(s.x, s.y, s.size * 1.6 * s.life)
        else {
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.size * 0.5 * s.life, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) raf = requestAnimationFrame(tick)
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reduce])

  if (reduce) return null
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60]" />
}
