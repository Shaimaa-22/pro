"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { Languages, Menu, X, FileText } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { contact } from "@/lib/content"

const sections = ["home", "about", "experience", "projects", "skills", "contact"] as const

export function SiteNav() {
  const { t, lang, toggle, dir } = useLanguage()
  const [active, setActive] = useState<string>("home")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-45% 0px -45% 0px" },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      {/* scroll progress bar */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary via-nebula to-aurora"
        style={{ scaleX: progress }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-4 transition-all duration-500 sm:px-6 ${
            scrolled ? "glass mx-4 py-2.5 sm:mx-auto" : "py-2"
          }`}
        >
          <button
            onClick={() => go("home")}
            className="group flex items-center gap-2 font-display text-sm font-bold tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-nebula text-background shadow-lg glow-primary">
              SD
            </span>
            <span className="hidden text-foreground sm:inline">
              {lang === "ar" ? "شيماء دويدار" : "Shaimaa Dwedar"}
            </span>
          </button>

          {/* desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {sections.map((id) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                    active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t.nav[id]}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:flex"
            >
              <FileText className="h-3.5 w-3.5" />
              {t.nav.viewCV}
            </a>
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Toggle language"
            >
              <Languages className="h-3.5 w-3.5" />
              {lang === "en" ? "عربي" : "EN"}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-secondary/50 text-foreground lg:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            dir={dir}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.ul
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="glass absolute inset-x-4 top-24 flex flex-col gap-1 rounded-3xl p-4"
            >
              {sections.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => go(id)}
                    className={`w-full rounded-xl px-4 py-3 text-start text-lg font-medium transition-colors ${
                      active === id ? "bg-secondary text-primary" : "text-foreground"
                    }`}
                  >
                    {t.nav[id]}
                  </button>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
