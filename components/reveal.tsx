"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const variants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
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
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.5, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem: Variants = variants
