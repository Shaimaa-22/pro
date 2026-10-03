"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/components/language-provider"
import { ChapterLabel } from "@/components/chapter-label"
import { Reveal } from "@/components/reveal"

function CountUpStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <Reveal delay={delay} className="glass min-w-0 rounded-2xl px-2 py-5 text-center sm:p-6">
      <div className="font-display text-2xl font-bold text-gradient min-[400px]:text-3xl sm:text-5xl">{value}</div>
      <div className="mt-2 text-xs text-muted-foreground sm:text-sm">{label}</div>
    </Reveal>
  )
}

export function SectionAbout() {
  const { t, dir } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="about" ref={ref} className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28" dir={dir}>
      <ChapterLabel>{t.chapter.origin}</ChapterLabel>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-balance font-display text-4xl font-bold leading-tight sm:text-5xl">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty leading-relaxed text-foreground/90">{t.about.intro}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.about.description}</p>
          </Reveal>
        </div>

        {/* Portrait / decorative orb card */}
        <motion.div style={{ y: imgY }} className="relative">
          <div className="glass relative overflow-hidden rounded-3xl p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative flex flex-col items-center gap-5">
              <div className="grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-primary via-nebula to-aurora text-3xl font-bold text-background shadow-2xl glow-primary">
                SD
              </div>
              <div className="text-center">
                <div className="font-display text-xl font-bold">{t.hero.name}</div>
                <div className="mt-1 text-sm text-primary">
                  {dir === "rtl" ? "خريجة هندسة حاسوب" : "Computer Engineering Graduate"}
                </div>
              </div>
              <div className="grid w-full grid-cols-2 gap-2 pt-2 text-center text-xs">
                {["AI", "IoT", "Full-Stack", "Flutter"].map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-secondary/40 py-1.5 text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-14 grid grid-cols-3 gap-2 sm:gap-4">
        {t.about.stats.map((s, i) => (
          <CountUpStat key={s.label} value={s.value} label={s.label} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
