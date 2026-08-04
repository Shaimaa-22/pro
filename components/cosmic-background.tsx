"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Lightweight canvas starfield + parallax nebula that spans the whole story scroll.
 * Rendered once behind all sections (pointer-events: none).
 */
export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll()
  const nebula1Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const nebula2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const hue = useTransform(scrollYProgress, [0, 0.5, 1], [0, 40, 90])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let stars: { x: number; y: number; z: number; r: number; glow: boolean; hue: number }[] = []
    type Meteor = { x: number; y: number; len: number; speed: number; angle: number; life: number; hue: number }
    let meteors: Meteor[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const count = Math.min(220, Math.floor((canvas.width * canvas.height) / 8000))
      stars = Array.from({ length: count }).map(() => {
        const z = Math.random()
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z,
          r: Math.random() * 1.4 + 0.2,
          // ~12% of stars are bright glowing beacons
          glow: Math.random() < 0.12,
          // hue between cyan (190) and violet (270) with a few warm amber accents
          hue: Math.random() < 0.15 ? 40 : 190 + Math.random() * 80,
        }
      })
    }
    resize()
    window.addEventListener("resize", resize)

    const spawnMeteor = () => {
      const fromLeft = Math.random() < 0.5
      meteors.push({
        x: fromLeft ? -50 : canvas.width + 50,
        y: Math.random() * canvas.height * 0.6,
        len: 120 + Math.random() * 160,
        speed: 6 + Math.random() * 6,
        angle: fromLeft ? Math.PI / 6 : Math.PI - Math.PI / 6,
        life: 1,
        hue: Math.random() < 0.4 ? 40 : 190 + Math.random() * 60,
      })
    }

    let t = 0
    const draw = () => {
      t += 0.008
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "lighter"

      for (const s of stars) {
        const twinkle = 0.5 + 0.5 * Math.sin(t * (1 + s.z) + s.x)
        const alpha = 0.25 + twinkle * 0.65 * (s.glow ? 1 : s.z)
        if (s.glow) {
          // radial halo for beacon stars
          const R = s.r * (5 + twinkle * 4)
          const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, R)
          grad.addColorStop(0, `hsla(${s.hue}, 100%, 80%, ${alpha})`)
          grad.addColorStop(1, `hsla(${s.hue}, 100%, 70%, 0)`)
          ctx.beginPath()
          ctx.fillStyle = grad
          ctx.arc(s.x, s.y, R, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${s.hue}, 90%, 88%, ${alpha})`
        ctx.fill()
        // slow drift
        s.y += 0.02 + s.z * 0.05
        if (s.y > canvas.height) s.y = 0
      }

      // occasionally spawn a shooting star
      if (Math.random() < 0.006 && meteors.length < 3) spawnMeteor()

      meteors = meteors.filter((m) => m.life > 0 && m.x > -100 && m.x < canvas.width + 100)
      for (const m of meteors) {
        const dx = Math.cos(m.angle) * m.len
        const dy = Math.sin(m.angle) * m.len
        const grad = ctx.createLinearGradient(m.x, m.y, m.x - dx, m.y - dy)
        grad.addColorStop(0, `hsla(${m.hue}, 100%, 85%, ${0.9 * m.life})`)
        grad.addColorStop(1, `hsla(${m.hue}, 100%, 75%, 0)`)
        ctx.strokeStyle = grad
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(m.x, m.y)
        ctx.lineTo(m.x - dx, m.y - dy)
        ctx.stroke()
        m.x += Math.cos(m.angle) * m.speed
        m.y += Math.sin(m.angle) * m.speed
        m.life -= 0.004
      }

      ctx.globalCompositeOperation = "source-over"
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-background" />
      <motion.div
        style={{ y: nebula1Y }}
        className="absolute -left-1/4 top-0 h-[70vh] w-[70vh] rounded-full opacity-40 blur-[100px]"
      >
        <div className="h-full w-full rounded-full bg-primary/30" />
      </motion.div>
      <motion.div
        style={{ y: nebula2Y }}
        className="absolute -right-1/4 top-1/3 h-[60vh] w-[60vh] rounded-full opacity-30 blur-[110px]"
      >
        <div className="h-full w-full rounded-full bg-accent/40" />
      </motion.div>
      <motion.div
        style={{ y: nebula1Y }}
        className="absolute bottom-0 left-1/3 h-[50vh] w-[50vh] rounded-full opacity-20 blur-[120px]"
      >
        <div className="h-full w-full rounded-full bg-nebula/40" />
      </motion.div>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  )
}
