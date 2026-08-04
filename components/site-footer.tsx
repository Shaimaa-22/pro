"use client"

import { Mail, ArrowUp } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { useLanguage } from "@/components/language-provider"
import { contact } from "@/lib/content"

export function SiteFooter() {
  const { t, dir } = useLanguage()
  return (
    <footer className="relative border-t border-border py-10" dir={dir}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-center text-sm text-muted-foreground sm:text-start">{t.footer.copyright}</p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
