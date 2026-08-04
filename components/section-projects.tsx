"use client"

import { useRef, type MouseEvent } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { ChapterLabel } from "@/components/chapter-label"
import { Reveal } from "@/components/reveal"
import { projectMeta } from "@/lib/content"

const accentMap: Record<string, string> = {
  primary: "from-primary/40",
  nebula: "from-nebula/40",
  aurora: "from-aurora/40",
}

function ProjectCard({
  meta,
  index,
}: {
  meta: (typeof projectMeta)[number]
  index: number
}) {
  const { t, lang, dir } = useLanguage()
  const data = t.projects.data[meta.id]
  const ref = useRef<HTMLDivElement>(null)

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }
  const handleLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <Reveal delay={(index % 2) * 0.08}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-md"
      >
        {/* glow following accent */}
        <div
          className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${accentMap[meta.accent]} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />
        <div className="relative">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={meta.image || "/placeholder.svg"}
              alt={data.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            <span className="absolute start-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary backdrop-blur-md">
              {data.tag}
            </span>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-bold">{data.name}</h3>
              <a
                href={meta.links[0]?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.projects.viewProject}: ${data.name}`}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{data.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {meta.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-secondary/60 px-2 py-1 font-mono text-[10px] text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  )
}

export function SectionProjects() {
  const { t, dir } = useLanguage()
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28" dir={dir}>
      <ChapterLabel>{t.chapter.works}</ChapterLabel>
      <Reveal>
        <h2 className="text-balance font-display text-4xl font-bold sm:text-5xl">{t.projects.title}</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">{t.projects.subtitle}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projectMeta.map((meta, i) => (
          <ProjectCard key={meta.id} meta={meta} index={i} />
        ))}
      </div>
    </section>
  )
}
