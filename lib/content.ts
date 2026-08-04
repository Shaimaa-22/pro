export type Lang = "en" | "ar"

export type ProjectId =
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
  stack: string[]
  links: { label: { en: string; ar: string }; href: string }[]
  accent: "primary" | "nebula" | "aurora"
}

/** Static per-project metadata (images, stacks, links) shared across languages. */
export const projectMeta: ProjectMeta[] = [
  {
    id: "pizzaGo",
    image: "/projects/pizza-go.png",
    stack: ["Node.js", "Express", "PostgreSQL", "MQTT", "ESP32", "Stripe"],
    links: [{ label: { en: "View Project", ar: "عرض المشروع" }, href: "https://github.com/Shaimaa-22" }],
    accent: "aurora",
  },
  {
    id: "whereShouldIGo",
    image: "/projects/where-should-i-go.png",
    stack: ["Node.js", "OpenAI", "Google Places", "Geolocation", "JavaScript"],
    links: [{ label: { en: "View Project", ar: "عرض المشروع" }, href: "https://github.com/Shaimaa-22" }],
    accent: "primary",
  },
  {
    id: "qvista",
    image: "/projects/qvista.png",
    stack: ["RAG", "AI Vision", "Python", "Hackathon"],
    links: [{ label: { en: "View Project", ar: "عرض المشروع" }, href: "https://github.com/Shaimaa-22" }],
    accent: "aurora",
  },
  {
    id: "ideasTracker",
    image: "/projects/ideas-tracker.png",
    stack: ["JavaScript", "Firebase", "Cloudinary", "AI APIs"],
    links: [{ label: { en: "View Project", ar: "عرض المشروع" }, href: "https://github.com/Shaimaa-22" }],
    accent: "nebula",
  },
  {
    id: "cvEvaluation",
    image: "/projects/cv-evaluation.png",
    stack: ["Python", "PyTorch", "Transformers", "NLP", "ML"],
    links: [{ label: { en: "View Project", ar: "عرض المشروع" }, href: "https://github.com/Shaimaa-22" }],
    accent: "nebula",
  },
  {
    id: "timeCapsule",
    image: "/projects/time-capsule.png",
    stack: ["Flutter", "Dart", "Firebase"],
    links: [{ label: { en: "View Project", ar: "عرض المشروع" }, href: "https://github.com/Shaimaa-22" }],
    accent: "primary",
  },
  {
    id: "coffeeLab",
    image: "/projects/coffee-lab.png",
    stack: ["Flutter", "Dart", "MVVM", "Clean Arch"],
    links: [{ label: { en: "View Project", ar: "عرض المشروع" }, href: "https://github.com/Shaimaa-22" }],
    accent: "aurora",
  },
]

export const skillGroups = [
  { key: "programming", items: ["JavaScript", "Python", "Dart", "C++", "SQL"] },
  { key: "frontend", items: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { key: "backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { key: "mobile", items: ["Flutter", "Dart"] },
  { key: "databases", items: ["PostgreSQL", "Firebase", "SQLite", "Neon"] },
  { key: "ai", items: ["NLP", "Machine Learning", "Transformers", "PyTorch"] },
  { key: "iot", items: ["ESP32", "MQTT", "Embedded Systems"] },
  { key: "tools", items: ["Git", "GitHub", "Vercel", "Render", "VS Code"] },
] as const

export const contact = {
  email: "shaimaadwedar03@gmail.com",
  linkedin: "https://www.linkedin.com/in/shaimaa-dwedar-a31561335/",
  github: "https://github.com/Shaimaa-22",
  cv: "/cv/Shaimaa_Dwedar.pdf",
}
