import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter, Tajawal } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shaimaa Dwedar — Full-Stack, Flutter, AI & IoT Engineer",
  description:
    "Interactive 3D portfolio of Shaimaa Dwedar, a Computer Engineering graduate building intelligent web apps, Flutter mobile solutions, AI platforms, and IoT systems.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0b1020",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${tajawal.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
