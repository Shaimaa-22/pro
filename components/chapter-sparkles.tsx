"use client"

import { useEffect, useRef } from "react"

/**
 * Replaces the old colorful 3D hero scene.
 * A field of drifting, twinkling particles where every particle is one of five
 * icon shapes tied to the site's story chapters — profile (About), graduation
 * cap (Experience), code brackets (Projects), gear (Skills), envelope (Contact).
 * Each particle smoothly morphs from one shape into the next, forever, in a
 * palette of pink shades with a few neon-pink beacons mixed in.
 */

type ShapeId = 0 | 1 | 2 | 3 | 4

const SHAPE_COUNT = 5

// ---- icon drawers -----------------------------------------------------
// Each function draws its icon centered at (0,0), scaled to `s`, using only
// stroke (line-art look). Called inside an already translated/rotated ctx.

function drawProfile(ctx: CanvasRenderingContext2D, s: number) {
  // head
  ctx.beginPath()
  ctx.arc(0, -0.34 * s, 0.2 * s, 0, Math.PI * 2)
  ctx.stroke()
  // shoulders
  ctx.beginPath()
  ctx.moveTo(-0.36 * s, 0.34 * s)
  ctx.quadraticCurveTo(0, -0.08 * s, 0.36 * s, 0.34 * s)
  ctx.stroke()
}

function drawGradCap(ctx: CanvasRenderingContext2D, s: number) {
  // mortarboard diamond
  ctx.beginPath()
  ctx.moveTo(0, -0.3 * s)
  ctx.lineTo(0.46 * s, -0.06 * s)
  ctx.lineTo(0, 0.18 * s)
  ctx.lineTo(-0.46 * s, -0.06 * s)
  ctx.closePath()
  ctx.stroke()
  // band
  ctx.beginPath()
  ctx.moveTo(-0.14 * s, 0.06 * s)
  ctx.lineTo(0.14 * s, 0.06 * s)
  ctx.lineTo(0.14 * s, 0.24 * s)
  ctx.lineTo(-0.14 * s, 0.24 * s)
  ctx.closePath()
  ctx.stroke()
  // tassel
  ctx.beginPath()
  ctx.moveTo(0.18 * s, -0.02 * s)
  ctx.lineTo(0.34 * s, 0.32 * s)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(0.34 * s, 0.38 * s, 0.05 * s, 0, Math.PI * 2)
  ctx.stroke()
}

function drawCodeBrackets(ctx: CanvasRenderingContext2D, s: number) {
  ctx.beginPath()
  ctx.moveTo(-0.08 * s, -0.32 * s)
  ctx.lineTo(-0.4 * s, 0)
  ctx.lineTo(-0.08 * s, 0.32 * s)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(0.08 * s, -0.32 * s)
  ctx.lineTo(0.4 * s, 0)
  ctx.lineTo(0.08 * s, 0.32 * s)
  ctx.stroke()
}

function drawGear(ctx: CanvasRenderingContext2D, s: number) {
  const outer = 0.24 * s
  const inner = 0.1 * s
  const teeth = 6
  ctx.beginPath()
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2
    const w = 0.11 * s
    const tx = Math.cos(a) * (outer + w)
    const ty = Math.sin(a) * (outer + w)
    ctx.moveTo(Math.cos(a) * outer, Math.sin(a) * outer)
    ctx.lineTo(tx, ty)
  }
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(0, 0, outer, 0, Math.PI * 2)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(0, 0, inner, 0, Math.PI * 2)
  ctx.stroke()
}

function drawEnvelope(ctx: CanvasRenderingContext2D, s: number) {
  ctx.beginPath()
  ctx.rect(-0.4 * s, -0.26 * s, 0.8 * s, 0.52 * s)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(-0.4 * s, -0.26 * s)
  ctx.lineTo(0, 0.04 * s)
  ctx.lineTo(0.4 * s, -0.26 * s)
  ctx.stroke()
}

const SHAPE_DRAWERS: ((ctx: CanvasRenderingContext2D, s: number) => void)[] = [
  drawProfile,
  drawGradCap,
  drawCodeBrackets,
  drawGear,
  drawEnvelope,
]

function randomOtherShape(current: ShapeId): ShapeId {
  let next = Math.floor(Math.random() * SHAPE_COUNT)
  while (next === current) next = Math.floor(Math.random() * SHAPE_COUNT)
  return next as ShapeId
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  rotation: number
  rotSpeed: number
  shape: ShapeId
  nextShape: ShapeId
  morphT: number
  morphSpeed: number
  hold: number
  hue: number
  neon: boolean
  twinklePhase: number
  twinkleSpeed: number
}

export function ChapterSparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let particles: Particle[] = []

    const makeParticle = (w: number, h: number): Particle => {
      const shape = Math.floor(Math.random() * SHAPE_COUNT) as ShapeId
      // pink family: soft rose through magenta, with ~1 in 4 being a bright neon-pink beacon
      const neon = Math.random() < 0.25
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.08 - Math.random() * 0.2,
        size: neon ? 22 + Math.random() * 20 : 14 + Math.random() * 16,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.01,
        shape,
        nextShape: randomOtherShape(shape),
        morphT: Math.random(),
        morphSpeed: 1 / (70 + Math.random() * 50),
        hold: Math.random() * 240,
        hue: 305 + Math.random() * 40, // ~305-345: rose -> magenta -> hot pink
        neon,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.02 + Math.random() * 0.03,
      }
    }

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      const w = rect?.width ?? window.innerWidth
      const h = rect?.height ?? window.innerHeight
      canvas.width = w
      canvas.height = h
      const count = Math.min(55, Math.max(24, Math.floor((w * h) / 26000)))
      particles = Array.from({ length: count }).map(() => makeParticle(w, h))
    }
    resize()
    window.addEventListener("resize", resize)

    let t = 0
    const draw = () => {
      t += 1
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = "lighter"
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      for (const p of particles) {
        // drift
        p.x += p.vx
        p.y += p.vy
        p.rotation += p.rotSpeed
        if (p.x < -40) p.x = w + 40
        if (p.x > w + 40) p.x = -40
        if (p.y < -40) p.y = h + 40
        if (p.y > h + 40) p.y = -40

        // morph state machine
        if (p.hold > 0) {
          p.hold -= 1
        } else {
          p.morphT += p.morphSpeed
          if (p.morphT >= 1) {
            p.morphT = 0
            p.shape = p.nextShape
            p.nextShape = randomOtherShape(p.shape)
            p.hold = 100 + Math.random() * 220
          }
        }

        const twinkle = 0.55 + 0.45 * Math.sin(t * p.twinkleSpeed + p.twinklePhase)
        const baseAlpha = (p.neon ? 0.85 : 0.55) * twinkle
        const lightness = p.neon ? 62 + twinkle * 10 : 78
        const sat = p.neon ? 100 : 65
        const color = `hsla(${p.hue}, ${sat}%, ${lightness}%, ${baseAlpha})`
        const lineWidth = p.neon ? 2 : 1.4

        ctx.save()
        ctx.translate(p.x, p.y)

        // soft glow halo for neon particles
        if (p.neon) {
          const R = p.size * (0.9 + twinkle * 0.4)
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, R)
          grad.addColorStop(0, `hsla(${p.hue}, 100%, 70%, ${0.35 * twinkle})`)
          grad.addColorStop(1, `hsla(${p.hue}, 100%, 70%, 0)`)
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(0, 0, R, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth

        const eased = easeInOut(p.morphT)
        const morphing = p.hold <= 0

        // current shape fading out, next shape fading in, with a gentle scale pulse
        ctx.save()
        ctx.rotate(p.rotation)
        ctx.globalAlpha = morphing ? 1 - eased : 1
        const scaleA = morphing ? 1 - eased * 0.15 : 1
        ctx.scale(scaleA, scaleA)
        SHAPE_DRAWERS[p.shape](ctx, p.size)
        ctx.restore()

        if (morphing) {
          ctx.save()
          ctx.rotate(p.rotation + eased * 0.6)
          ctx.globalAlpha = eased
          const scaleB = 0.85 + eased * 0.15
          ctx.scale(scaleB, scaleB)
          SHAPE_DRAWERS[p.nextShape](ctx, p.size)
          ctx.restore()
        }

        ctx.restore()
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
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
