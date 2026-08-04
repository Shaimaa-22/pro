import type { Lang, ProjectId } from "./content"

type Dict = typeof en

export const en = {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    viewCV: "View CV",
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Shaimaa Dwedar",
    roles: ["Full-Stack Developer", "Flutter Developer", "AI Enthusiast", "IoT Engineer"],
    description:
      "Computer Engineering graduate building intelligent web apps, mobile solutions, AI platforms, and embedded systems that solve real-world problems.",
    exploreProjects: "Explore Projects",
    contactMe: "Contact Me",
    scroll: "Scroll to begin the story",
  },
  chapter: {
    origin: "Chapter 01 — Origin",
    craft: "Chapter 02 — The Craft",
    journey: "Chapter 03 — The Journey",
    works: "Chapter 04 — The Works",
    arsenal: "Chapter 05 — The Arsenal",
    connect: "Chapter 06 — Let's Connect",
  },
  about: {
    title: "Where it all begins",
    intro:
      "Computer Engineering graduate with hands-on experience in Full-Stack Development, Flutter Applications, Artificial Intelligence, and IoT Systems.",
    description:
      "From responsive web applications and Flutter mobile apps to AI-powered platforms and ESP32-based automation, I turn ideas into practical products through clean architecture, scalable backends, and user-focused design.",
    stats: [
      { value: "2026", label: "Graduation Year" },
      { value: "10+", label: "Completed Projects" },
      { value: "15+", label: "Technologies & Tools" },
    ],
  },
  experience: {
    title: "The Journey",
    items: [
      {
        date: "2025",
        position: "Software Development Trainee",
        company: "Dimensions Info-tech — Ramallah",
        tasks: [
          "Developed cross-platform Flutter mobile applications.",
          "Implemented responsive, user-friendly interfaces.",
          "Integrated REST APIs and backend services.",
          "Applied MVVM architecture principles.",
          "Collaborated within agile development teams.",
        ],
      },
      {
        date: "2025 — Present",
        position: "Freelance Software & IoT Engineer",
        company: "Self-Employed",
        tasks: [
          "Built a web control interface for an industrial inverter over MQTT in real time.",
          "Designed hardware and control electronics for a sugar-processing machine with a live monitoring website.",
          "Delivered a bilingual corporate website with a structured client-inquiry workflow.",
          "Shipped end-to-end projects — from embedded hardware to web interfaces.",
        ],
      },
    ],
    education: {
      title: "Education & Training",
      items: [
        {
          title: "B.Sc. in Computer Engineering",
          org: "Al-Quds University, Palestine",
          date: "Graduated: June 2026",
        },
        {
          title: "Front-End Nanodegree · Python & ML",
          org: "Udacity · The Hope International",
          date: "Certifications & Training",
        },
      ],
    },
  },
  projects: {
    title: "Featured Works",
    subtitle: "A constellation of things I've designed, engineered, and shipped.",
    viewProject: "View Project",
    data: {
      pizzaGo: {
        name: "Pizza Go",
        tag: "Full-Stack · IoT · Graduation Project",
        description:
          "Smart pizza ordering and automated preparation system integrating online ordering, payments, PostgreSQL, MQTT communication, and ESP32-controlled hardware into one complete end-to-end solution.",
      },
      whereShouldIGo: {
        name: "Where Should I Go?",
        tag: "AI Tourism Platform · Full-Stack",
        description:
          "AI-powered tourism platform built across 14 phases that recommends destinations based on mood, time, and location — combining geolocation, mapping, and OpenAI personalization.",
      },
      qvista: {
        name: "QVista AI",
        tag: "Hackathon · RAG · AI Vision",
        description:
          "Smart Jerusalem tourism platform combining RAG-based recommendations, AI landmark recognition, and a 'Hidden Jerusalem' feature that surfaces stories beyond the usual map.",
      },
      ideasTracker: {
        name: "Ideas Tracker",
        tag: "AI · Voice Input · Firebase",
        description:
          "AI platform for capturing, organizing, and enhancing ideas using voice input, intelligent assistance, mind maps, and community collaboration.",
      },
      cvEvaluation: {
        name: "CV Evaluation System",
        tag: "AI · NLP · Python",
        description:
          "AI system that evaluates resumes using NLP and Machine Learning to provide automated candidate assessment and scoring.",
      },
      timeCapsule: {
        name: "Time Capsule",
        tag: "Flutter · Mobile App",
        description:
          "Flutter app that lets users create digital time capsules of memories, messages, images, and files that unlock automatically at future dates.",
      },
      coffeeLab: {
        name: "Coffee Lab",
        tag: "Flutter · Clean Architecture",
        description:
          "Flutter mobile app built with MVVM and Clean Architecture, focusing on scalable development and maintainable structure.",
      },
    } as Record<ProjectId, { name: string; tag: string; description: string }>,
  },
  skills: {
    title: "The Arsenal",
    subtitle: "Tools and technologies I reach for.",
    groups: {
      programming: "Programming Languages",
      frontend: "Frontend Development",
      backend: "Backend Development",
      mobile: "Mobile Development",
      databases: "Databases & Cloud",
      ai: "AI & Machine Learning",
      iot: "IoT & Embedded Systems",
      tools: "Tools & Practices",
    } as Record<string, string>,
  },
  contact: {
    title: "Let's build something",
    intro:
      "I'm always open to discussing new projects, collaboration, and innovative ideas. Feel free to reach out.",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCV: "Download CV",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      success: "Thank you! I'll get back to you soon.",
    },
  },
  footer: {
    copyright: "© 2026 Shaimaa Dwedar. Crafted among the stars.",
  },
}

export const ar: Dict = {
  nav: {
    home: "الرئيسية",
    about: "عني",
    experience: "الخبرات",
    projects: "المشاريع",
    skills: "المهارات",
    contact: "تواصل معي",
    viewCV: "السيرة الذاتية",
  },
  hero: {
    greeting: "مرحباً، أنا",
    name: "شيماء دويدار",
    roles: ["مطوّرة Full-Stack", "مطوّرة Flutter", "مهتمة بالذكاء الاصطناعي", "مهندسة إنترنت أشياء"],
    description:
      "خريجة هندسة حاسوب أبني تطبيقات ويب ذكية وحلول موبايل ومنصات ذكاء اصطناعي وأنظمة مدمجة تحل مشاكل واقعية.",
    exploreProjects: "استكشف المشاريع",
    contactMe: "تواصل معي",
    scroll: "مرّر للأسفل لتبدأ القصة",
  },
  chapter: {
    origin: "الفصل الأول — البداية",
    craft: "الفصل الثاني — الحِرفة",
    journey: "الفصل الثالث — الرحلة",
    works: "الفصل الرابع — الأعمال",
    arsenal: "الفصل الخامس — الأدوات",
    connect: "الفصل السادس — لنتواصل",
  },
  about: {
    title: "من هنا تبدأ الحكاية",
    intro:
      "خريجة هندسة حاسوب بخبرة عملية في تطوير Full-Stack وتطبيقات Flutter والذكاء الاصطناعي وأنظمة إنترنت الأشياء.",
    description:
      "من تطبيقات الويب المتجاوبة وتطبيقات Flutter إلى المنصات المدعومة بالذكاء الاصطناعي وأنظمة الأتمتة المعتمدة على ESP32، أحوّل الأفكار إلى منتجات عملية عبر معمارية نظيفة وأنظمة backend قابلة للتوسّع وتصميم يركّز على المستخدم.",
    stats: [
      { value: "2026", label: "سنة التخرج" },
      { value: "+10", label: "مشاريع منجزة" },
      { value: "+15", label: "تقنيات وأدوات" },
    ],
  },
  experience: {
    title: "الرحلة",
    items: [
      {
        date: "2025",
        position: "متدربة تطوير برمجيات",
        company: "Dimensions Info-tech — رام الله",
        tasks: [
          "تطوير تطبيقات موبايل متعددة المنصات باستخدام Flutter.",
          "تنفيذ واجهات متجاوبة وسهلة الاستخدام.",
          "دمج واجهات REST API وخدمات backend.",
          "تطبيق مبادئ معمارية MVVM.",
          "التعاون ضمن فرق تطوير رشيقة.",
        ],
      },
      {
        date: "2025 — الحاضر",
        position: "مهندسة برمجيات وإنترنت أشياء مستقلة",
        company: "عمل حر",
        tasks: [
          "بناء واجهة تحكم ويب لجهاز Inverter صناعي بتواصل لحظي عبر MQTT.",
          "تصميم العتاد وإلكترونيات التحكم لآلة تصنيع سكر مع موقع مراقبة لحظي.",
          "بناء موقع تعريفي ثنائي اللغة مع نظام منظم لطلبات العملاء.",
          "تنفيذ مشاريع متكاملة — من العتاد المدمج إلى واجهات الويب.",
        ],
      },
    ],
    education: {
      title: "التعليم والتدريب",
      items: [
        {
          title: "بكالوريوس هندسة حاسوب",
          org: "جامعة القدس، فلسطين",
          date: "التخرج: يونيو 2026",
        },
        {
          title: "Front-End Nanodegree · Python & ML",
          org: "Udacity · The Hope International",
          date: "شهادات وتدريب",
        },
      ],
    },
  },
  projects: {
    title: "أبرز الأعمال",
    subtitle: "مجموعة من الأشياء التي صممتها وهندستها وأطلقتها.",
    viewProject: "عرض المشروع",
    data: {
      pizzaGo: {
        name: "Pizza Go",
        tag: "Full-Stack · إنترنت الأشياء · مشروع التخرج",
        description:
          "نظام ذكي لطلب البيتزا وتحضيرها آلياً يدمج الطلب عبر الإنترنت والدفع وقاعدة بيانات PostgreSQL والتواصل عبر MQTT وأتمتة العتاد بواسطة ESP32 في حل متكامل.",
      },
      whereShouldIGo: {
        name: "Where Should I Go؟",
        tag: "منصة سياحة ذكية · Full-Stack",
        description:
          "منصة سياحية مدعومة بالذكاء الاصطناعي بُنيت عبر 14 مرحلة تقترح وجهات بناءً على المزاج والوقت والموقع — بدمج تحديد الموقع والخرائط وتخصيص OpenAI.",
      },
      qvista: {
        name: "QVista AI",
        tag: "هاكاثون · RAG · رؤية بالذكاء الاصطناعي",
        description:
          "منصة سياحية ذكية للقدس تجمع بين توصيات RAG وتعرّف بصري على المعالم وميزة \"القدس الخفية\" التي تكشف قصصاً أبعد من الخريطة المعتادة.",
      },
      ideasTracker: {
        name: "Ideas Tracker",
        tag: "ذكاء اصطناعي · إدخال صوتي · Firebase",
        description:
          "منصة ذكاء اصطناعي لالتقاط الأفكار وتنظيمها وتحسينها باستخدام الإدخال الصوتي والمساعدة الذكية والخرائط الذهنية والتعاون المجتمعي.",
      },
      cvEvaluation: {
        name: "نظام تقييم السيرة الذاتية",
        tag: "ذكاء اصطناعي · NLP · Python",
        description:
          "نظام ذكاء اصطناعي لتقييم السير الذاتية باستخدام معالجة اللغة الطبيعية وتعلّم الآلة لتقديم تقييم ودرجات آلية للمرشحين.",
      },
      timeCapsule: {
        name: "Time Capsule",
        tag: "Flutter · تطبيق موبايل",
        description:
          "تطبيق Flutter يتيح إنشاء كبسولات زمنية رقمية من الذكريات والرسائل والصور والملفات تُفتح تلقائياً في تواريخ مستقبلية.",
      },
      coffeeLab: {
        name: "Coffee Lab",
        tag: "Flutter · Clean Architecture",
        description:
          "تطبيق موبايل Flutter مبني بمبادئ MVVM و Clean Architecture، يركّز على تطوير قابل للتوسّع وبنية قابلة للصيانة.",
      },
    },
  },
  skills: {
    title: "الأدوات",
    subtitle: "التقنيات والأدوات التي أعتمد عليها.",
    groups: {
      programming: "لغات البرمجة",
      frontend: "تطوير الواجهات الأمامية",
      backend: "تطوير الخلفية",
      mobile: "تطوير الموبايل",
      databases: "قواعد البيانات والسحابة",
      ai: "الذكاء الاصطناعي وتعلّم الآلة",
      iot: "إنترنت الأشياء والأنظمة المدمجة",
      tools: "الأدوات والممارسات",
    },
  },
  contact: {
    title: "لنبنِ شيئاً معاً",
    intro: "أنا دائماً منفتحة لمناقشة مشاريع جديدة وفرص التعاون والأفكار المبتكرة. لا تتردد في التواصل.",
    email: "البريد الإلكتروني",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCV: "تحميل السيرة الذاتية",
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال الرسالة",
      success: "شكراً لك! سأعاود التواصل معك قريباً.",
    },
  },
  footer: {
    copyright: "© 2026 شيماء دويدار. صُنع بين النجوم.",
  },
}

export const dictionaries: Record<Lang, Dict> = { en, ar }
export type { Dict }
