"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const ChapterSparkles = dynamic(() => import("@/components/chapter-sparkles").then((m) => m.ChapterSparkles), {
  ssr: false,
})

export function SectionHero() {
  const { t, dir } = useLanguage()
  const [roleIndex, setRoleIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  const contentY = useTransform(scrollYProgress, [0, 0.15], [0, -80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % t.hero.roles.length), 2600)
    return () => clearInterval(id)
  }, [t.hero.roles.length])

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pb-28 pt-32 sm:pb-32">
      {/* chapter sparkles layer */}
      <div className="absolute inset-0">
        <ChapterSparkles />
      </div>

      {/* readability gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full min-w-0 max-w-4xl px-6 text-center"
        dir={dir}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          {t.hero.greeting}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-gradient">{t.hero.name}</span>
        </motion.h1>

        <div className="mt-4 flex min-h-14 items-center justify-center text-lg font-medium text-foreground sm:min-h-9 sm:text-2xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="inline-block bg-gradient-to-r from-primary to-nebula bg-clip-text text-transparent"
            >
              {t.hero.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 glow-primary"
          >
            <span className="relative z-10">{t.hero.exploreProjects}</span>
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
          >
            {t.hero.contactMe}
          </button>
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute inset-x-6 bottom-6 z-10 flex flex-col items-center gap-2 text-center text-muted-foreground sm:bottom-8"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.6 }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
