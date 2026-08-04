"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase, GraduationCap, Check } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { ChapterLabel } from "@/components/chapter-label"
import { Reveal } from "@/components/reveal"

export function SectionExperience() {
  const { t, dir } = useLanguage()
  const lineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start center", "end center"] })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="relative mx-auto max-w-5xl scroll-mt-24 px-6 py-28" dir={dir}>
      <ChapterLabel>{t.chapter.journey}</ChapterLabel>
      <Reveal>
        <h2 className="mb-14 text-balance font-display text-4xl font-bold sm:text-5xl">{t.experience.title}</h2>
      </Reveal>

      <div ref={lineRef} className="relative ps-8 md:ps-12">
        {/* track */}
        <div className="absolute inset-y-0 start-[7px] w-0.5 bg-border md:start-[15px]" />
        {/* animated progress */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute inset-y-0 start-[7px] w-0.5 origin-top bg-gradient-to-b from-primary via-nebula to-aurora md:start-[15px]"
        />

        <div className="flex flex-col gap-10">
          {t.experience.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="relative">
                <span className="absolute -start-8 top-1 grid h-4 w-4 place-items-center rounded-full bg-primary ring-4 ring-background md:-start-[43px]">
                  <span className="h-2 w-2 rounded-full bg-background" />
                </span>
                <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary">
                      <Briefcase className="h-4 w-4" />
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-primary">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold">{item.position}</h3>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                  <ul className="mt-4 grid gap-2">
                    {item.tasks.map((task, ti) => (
                      <li key={ti} className="flex items-start gap-2 text-sm text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* education */}
      <Reveal delay={0.1}>
        <h3 className="mb-6 mt-16 flex items-center gap-2 font-display text-xl font-bold">
          <GraduationCap className="h-5 w-5 text-primary" />
          {t.experience.education.title}
        </h3>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {t.experience.education.items.map((edu, i) => (
          <Reveal key={i} delay={i * 0.08} className="glass rounded-2xl p-6">
            <div className="font-mono text-xs text-aurora">{edu.date}</div>
            <div className="mt-2 font-display font-bold">{edu.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{edu.org}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
