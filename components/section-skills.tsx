"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Code2, Layout, Server, Smartphone, Database, BrainCircuit, Cpu, Wrench, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { ChapterLabel } from "@/components/chapter-label"
import { Reveal, StaggerGroup, staggerItem } from "@/components/reveal"
import { skillGroups, type SkillGroupKey } from "@/lib/content"

const icons: Record<SkillGroupKey, typeof Code2> = {
  programming: Code2,
  frontend: Layout,
  backend: Server,
  mobile: Smartphone,
  databases: Database,
  ai: BrainCircuit,
  iot: Cpu,
  tools: Wrench,
  testing: ShieldCheck,
}

const marquee = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Dart",
  "Flutter",
  "Node.js",
  "PostgreSQL",
  "MQTT",
  "ESP32",
  "PyTorch",
  "NLP",
  "Firebase",
  "Tailwind CSS",
  "OpenAI API",
  "Git",
]

export function SectionSkills() {
  const { t, dir } = useLanguage()
  const reducedMotion = useReducedMotion()
  return (
    <section id="skills" className="relative overflow-x-clip scroll-mt-24 py-20 sm:py-28" dir={dir}>
      {/* marquee band */}
      <div aria-hidden="true" className="mb-16 -rotate-1 border-y border-border bg-card/40 py-4 backdrop-blur-sm" dir="ltr">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex shrink-0 items-center gap-8 pe-8 font-display text-2xl font-bold text-muted-foreground/40 sm:text-3xl"
            animate={reducedMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 22 }}
          >
            {[...marquee, ...marquee].map((s, i) => (
              <span key={i} className="flex items-center gap-8">
                {s}
                <span className="text-primary">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <ChapterLabel>{t.chapter.arsenal}</ChapterLabel>
        <Reveal>
          <h2 className="text-balance font-display text-4xl font-bold sm:text-5xl">{t.skills.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-xl text-pretty text-muted-foreground">{t.skills.subtitle}</p>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = icons[group.key]
            return (
              <motion.article
                key={group.key}
                variants={staggerItem}
                className="glass group min-w-0 rounded-2xl p-5 sm:p-6"
                aria-labelledby={`skill-${group.key}`}
              >
                <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-nebula/20 text-primary transition-colors group-hover:from-primary group-hover:to-nebula group-hover:text-background">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 id={`skill-${group.key}`} className="font-display text-base font-bold">{t.skills.groups[group.key]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.skills.descriptions[group.key]}</p>
                <ul className="mt-4 flex flex-wrap gap-2" dir="ltr">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="max-w-full break-words rounded-lg border border-border bg-secondary/40 px-2.5 py-1.5 text-xs text-foreground/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
