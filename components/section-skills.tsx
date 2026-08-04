"use client"

import { motion } from "framer-motion"
import { Code2, Layout, Server, Smartphone, Database, BrainCircuit, Cpu, Wrench } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { ChapterLabel } from "@/components/chapter-label"
import { Reveal, StaggerGroup, staggerItem } from "@/components/reveal"
import { skillGroups } from "@/lib/content"

const icons: Record<string, typeof Code2> = {
  programming: Code2,
  frontend: Layout,
  backend: Server,
  mobile: Smartphone,
  databases: Database,
  ai: BrainCircuit,
  iot: Cpu,
  tools: Wrench,
}

const marquee = [
  "JavaScript",
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
  "OpenAI",
  "Git",
]

export function SectionSkills() {
  const { t, dir } = useLanguage()
  return (
    <section id="skills" className="relative scroll-mt-24 py-28" dir={dir}>
      {/* marquee band */}
      <div className="mb-16 -rotate-1 border-y border-border bg-card/40 py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex shrink-0 items-center gap-8 pe-8 font-display text-2xl font-bold text-muted-foreground/40 sm:text-3xl"
            animate={{ x: dir === "rtl" ? ["-50%", "0%"] : ["0%", "-50%"] }}
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

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = icons[group.key]
            return (
              <motion.div
                key={group.key}
                variants={staggerItem}
                className="glass group rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-nebula/20 text-primary transition-colors group-hover:from-primary group-hover:to-nebula group-hover:text-background">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-sm font-bold">{t.skills.groups[group.key]}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-secondary/40 px-2 py-1 text-[11px] text-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
