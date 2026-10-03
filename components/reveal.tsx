"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "section" | "li" | "span"
}) {
  const reducedMotion = useReducedMotion()
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: reducedMotion ? 0 : 0.35, delay: reducedMotion ? 0 : delay, ease: [0.21, 0.5, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.05 } } }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem: Variants = variants
