export type Lang = "en" | "ar"

export type ProjectId =
  | "inverter"
  | "power"
  | "pizzaGo"
  | "whereShouldIGo"
  | "qvista"
  | "ideasTracker"
  | "cvEvaluation"
  | "timeCapsule"
  | "coffeeLab"

export interface ProjectMeta {
  id: ProjectId
  image: string
  imageKind?: "screenshot"
  stack: string[]
  links: { label: { en: string; ar: string }; href: string }[]
  accent: "primary" | "nebula" | "aurora"
}

/** Static per-project metadata (images, stacks, links) shared across languages. */
export const projectMeta: ProjectMeta[] = [
  {
    id: "inverter",
    image: "/projects/inverter-live.jpg",
    imageKind: "screenshot",
    stack: ["JavaScript", "Node.js", "PostgreSQL", "WebSocket", "MQTT", "ESP32"],
    links: [
      { label: { en: "Visit Website", ar: "زيارة الموقع" }, href: "https://inverter-frontend.vercel.app/" },
      { label: { en: "Frontend Code", ar: "كود الواجهة" }, href: "https://github.com/Shaimaa-22/Inverter_frontend" },
      { label: { en: "Backend Code", ar: "كود الخادم" }, href: "https://github.com/Shaimaa-22/Inverter_backend" },
    ],
    accent: "primary",
  },
  {
    id: "power",
    image: "/projects/power-live.jpg",
    imageKind: "screenshot",
    stack: ["React", "JavaScript", "Vite", "CSS", "Cloudflare Pages"],
    links: [
      { label: { en: "Visit Website", ar: "زيارة الموقع" }, href: "https://power-elec-site.pages.dev/" },
      { label: { en: "Source Code", ar: "الكود المصدري" }, href: "https://github.com/Shaimaa-22/power-frontend" },
    ],
    accent: "aurora",
  },
  {
    id: "pizzaGo",
    image: "/projects/pizza-go-live.jpg",
    imageKind: "screenshot",
    stack: ["Node.js", "Express", "PostgreSQL", "MQTT", "ESP32", "Stripe"],
    links: [
      { label: { en: "Visit Website", ar: "زيارة الموقع" }, href: "https://pizza-go-zeta.vercel.app/" },
      { label: { en: "Frontend Code", ar: "كود الواجهة" }, href: "https://github.com/Shaimaa-22/pizza_go-frontend" },
      { label: { en: "Backend Code", ar: "كود الخادم" }, href: "https://github.com/Shaimaa-22/pizza-go-backend" },
    ],
    accent: "aurora",
  },
  {
    id: "whereShouldIGo",
    image: "/projects/where-should-i-go.png",
    stack: ["Node.js", "OpenAI", "Google Places", "Geolocation", "JavaScript"],
    links: [{ label: { en: "Source Code", ar: "الكود المصدري" }, href: "https://github.com/Shaimaa-22/Where-Should-I-Go" }],
    accent: "primary",
  },
  {
    id: "qvista",
    image: "/projects/qvista.png",
    stack: ["RAG", "AI Vision", "Python", "Hackathon"],
    links: [{ label: { en: "Ask About This Project", ar: "استفسر عن المشروع" }, href: "mailto:shaimaadwedar03@gmail.com?subject=QVista%20AI%20project" }],
    accent: "aurora",
  },
  {
    id: "ideasTracker",
    image: "/projects/ideas-tracker.png",
    stack: ["JavaScript", "Firebase", "Cloudinary", "AI APIs"],
    links: [{ label: { en: "Source Code", ar: "الكود المصدري" }, href: "https://github.com/Shaimaa-22/ideas-tracker-web" }],
    accent: "nebula",
  },
  {
    id: "cvEvaluation",
    image: "/projects/cv-evaluation.png",
    stack: ["Python", "PyTorch", "Transformers", "NLP", "ML"],
    links: [{ label: { en: "Source Code", ar: "الكود المصدري" }, href: "https://github.com/Shaimaa-22/CV_Evaluation_Project" }],
    accent: "nebula",
  },
  {
    id: "timeCapsule",
    image: "/projects/time-capsule.png",
    stack: ["Flutter", "Dart", "Provider", "PostgreSQL"],
    links: [{ label: { en: "Source Code", ar: "الكود المصدري" }, href: "https://github.com/Shaimaa-22/time_capsule_app" }],
    accent: "primary",
  },
  {
    id: "coffeeLab",
    image: "/projects/coffee-lab.png",
    stack: ["Flutter", "Dart", "MVVM", "Clean Arch"],
    links: [{ label: { en: "Source Code", ar: "الكود المصدري" }, href: "https://github.com/Shaimaa-22/coffeelap" }],
    accent: "aurora",
  },
]

export const skillGroups = [
  { key: "programming", items: ["JavaScript", "TypeScript", "Python", "Dart", "C++", "SQL"] },
  { key: "frontend", items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { key: "backend", items: ["Node.js", "Express.js", "REST APIs", "WebSocket", "JWT"] },
  { key: "mobile", items: ["Flutter", "Provider", "MVVM", "Clean Architecture"] },
  { key: "databases", items: ["PostgreSQL", "Firestore", "SQLite"] },
  { key: "ai", items: ["OpenAI API", "NLP", "Transformers", "PyTorch", "scikit-learn"] },
  { key: "iot", items: ["ESP32", "MQTT", "Embedded Systems"] },
  { key: "testing", items: ["Unit Testing", "node:test", "API Diagnostics", "Debugging"] },
  { key: "tools", items: ["Git", "GitHub", "Oracle Cloud", "Vercel", "Render", "Firebase", "Neon", "Cloudinary"] },
] as const

export type SkillGroupKey = (typeof skillGroups)[number]["key"]

export const contact = {
  email: "shaimaadwedar03@gmail.com",
  linkedin: "https://www.linkedin.com/in/shaimaa-dwedar-a31561335/",
  github: "https://github.com/Shaimaa-22",
  cv: "/cv/Shaimaa_Dwedar.pdf",
}
