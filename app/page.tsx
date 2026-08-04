import { CosmicBackground } from "@/components/cosmic-background"
import { SiteNav } from "@/components/site-nav"
import { SectionHero } from "@/components/section-hero"
import { SectionAbout } from "@/components/section-about"
import { SectionExperience } from "@/components/section-experience"
import { SectionProjects } from "@/components/section-projects"
import { SectionSkills } from "@/components/section-skills"
import { SectionContact } from "@/components/section-contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <CosmicBackground />
      <SiteNav />
      <main className="relative">
        <SectionHero />
        <SectionAbout />
        <SectionExperience />
        <SectionProjects />
        <SectionSkills />
        <SectionContact />
      </main>
      <SiteFooter />
    </>
  )
}
