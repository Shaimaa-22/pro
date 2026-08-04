"use client"

import { motion } from "framer-motion"

export function ChapterLabel({ children }: { children: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-4 flex items-center gap-3"
    >
      <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{children}</span>
    </motion.div>
  )
}
