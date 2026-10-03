"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, FileDown, Send, Check } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { useLanguage } from "@/components/language-provider"
import { ChapterLabel } from "@/components/chapter-label"
import { Reveal } from "@/components/reveal"
import { contact } from "@/lib/content"

export function SectionContact() {
  const { t, dir } = useLanguage()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "visitor"}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const channels = [
    { icon: Mail, label: t.contact.email, value: contact.email, href: `mailto:${contact.email}` },
    { icon: LinkedinIcon, label: t.contact.linkedin, value: "Shaimaa Dwedar", href: contact.linkedin },
    { icon: GithubIcon, label: t.contact.github, value: "Shaimaa-22", href: contact.github },
  ]

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28" dir={dir}>
      <ChapterLabel>{t.chapter.connect}</ChapterLabel>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-balance font-display text-4xl font-bold sm:text-5xl">{t.contact.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">{t.contact.intro}</p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-3">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={0.15 + i * 0.06}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex items-center gap-4 rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{c.label}</span>
                    <span dir="ltr" className="block break-all text-sm font-medium text-foreground sm:text-base">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.35}>
              <a
                href={contact.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-nebula p-4 font-semibold text-background transition-transform hover:scale-[1.02] glow-primary"
              >
                <FileDown className="h-4 w-4" />
                {t.contact.downloadCV}
              </a>
            </Reveal>
          </div>
        </div>

        {/* form */}
        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">{t.contact.form.name}</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">{t.contact.form.email}</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">{t.contact.form.message}</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> {t.contact.form.success}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> {t.contact.form.send}
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
