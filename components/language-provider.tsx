"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import type { Lang } from "@/lib/content"
import { dictionaries, type Dict } from "@/lib/translations"

interface LanguageContextValue {
  lang: Lang
  dir: "ltr" | "rtl"
  t: Dict
  setLang: (lang: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    if (typeof document !== "undefined") {
      document.documentElement.lang = next
      document.documentElement.dir = next === "ar" ? "rtl" : "ltr"
    }
    try {
      localStorage.setItem("portfolio-lang", next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio-lang") as Lang | null
      if (stored === "en" || stored === "ar") setLang(stored)
    } catch {
      /* ignore */
    }
  }, [setLang])

  const toggle = useCallback(() => setLang(lang === "en" ? "ar" : "en"), [lang, setLang])

  const value: LanguageContextValue = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    t: dictionaries[lang],
    setLang,
    toggle,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
