import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { AnimatedSection } from "@/components/common/animated-section"
import { AnimatedText } from "@/components/common/animated-text"
import { ClientPageWrapper } from "@/components/common/client-page-wrapper"
import { Icons } from "@/components/common/icons"
import ExperienceCard from "@/components/experience/experience-card"
import ProjectCard from "@/components/projects/project-card"
import SkillsCard from "@/components/skills/skills-card"
import { Button, buttonVariants } from "@/components/ui/button"
import { experiences } from "@/config/experience"
import { pagesConfig } from "@/config/pages"
import { featuredProjects } from "@/config/projects"
import { siteConfig } from "@/config/site"
import { featuredSkills } from "@/config/skills"
import { cn } from "@/lib/utils"
import profileImg from "@/public/profile-img.png"

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description: "Computer Engineer focused on firmware, embedded systems, and robotics, with a passion for building reliable, low-level systems.",
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Computer Engineering Student",
    description:
      "Computer engineer focused on embedded systems, firmware, robotics, and full-stack development.",
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ].filter(Boolean),
  }

  // Structured data for website as a software application
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: metadata.description,
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
    },
  }

  return (
    <ClientPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-secondary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary"
            alt="Clarke Needles - Computer Engineer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {"Clarke Needles"}
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            {"computer engineer"}
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base lowercase">
              {
                "focused on firmware, embedded systems, and robotics, with a passion for building reliable, low-level systems."
              }
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={"/resume"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="View resume"
              >
                <Icons.post className="w-4 h-4 mr-2" /> resume
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label="Contact Clarke Needles"
              >
                <Icons.contact className="w-4 h-4 mr-2" /> contact
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10" />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        direction="up"
        className="container py-10 my-14"
        id="about"
      >
        <div className="w-full p-8 border border-muted-foreground/30 bg-black rounded-none text-left space-y-6">
          <div className="flex items-center justify-between border-b border-muted-foreground/20 pb-2">
            <p className="text-xs font-mono text-primary">about</p>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-muted-foreground lowercase leading-relaxed">
            <p>
              I am a computer engineering student at queen&apos;s university, having just finished 
              my 3rd year. Currently, I am on a 16-month co-op work term at{" "}
              <Link href="https://www.semtech.com" target="_blank" className="text-white underline underline-offset-4 hover:text-primary">
                semtech
              </Link>{" "}
              working as a firmware designer.
            </p>
            <p>
              Before this, I worked at FUJIFILM Visualsonics, where I engineered automated testing frameworks 
              and developed features for large-scale biomedical software systems utilizing C, C++, C#, 
              WinAPI, ATL, and COM objects.
            </p>
            <p>
              Right now, I am focusing heavily on embedded systems and hardware interaction. I am currently 
              working on a custom RTOS telematic node via{" "}
              <Link href="https://github.com/ClarkeNeedles/freertos-can-telematics" target="_blank" 
                className="text-white underline underline-offset-4 hover:text-primary">
                freertos-can-telematics
              </Link>{" "}
              and a parallel computing visualization tool built with{" "}
              <Link href="https://github.com/ClarkeNeedles/cuda-opengl-fractals" target="_blank" 
                className="text-white underline underline-offset-4 hover:text-primary">
                cuda-opengl-fractals
              </Link>.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-5xl whitespace-nowrap"
          >
            {"/" + pagesConfig.projects.title + ":~$ "}
            <span className="cursor">█</span>
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
            {featuredProjects.map((exp, index) => (
              <AnimatedSection
                key={exp.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="h-full w-full min-w-0"
              >
                <ProjectCard project={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-none">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> view all
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-5xl whitespace-nowrap"
          >
            {"/" + pagesConfig.experience.title + ":~$ "}
            <span className="cursor">█</span>
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-none">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> view all
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-5xl whitespace-nowrap"
          >
            {"/" + pagesConfig.skills.title + ":~$ "}
            <span className="cursor">█</span>
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-none">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> view all
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  )
}
