import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

import { Icons } from "@/components/common/icons"
import ProjectDescription from "@/components/projects/project-description"
import { buttonVariants } from "@/components/ui/button"
import ChipContainer from "@/components/ui/chip-container"
import CustomTooltip from "@/components/ui/custom-tooltip"
import { Projects } from "@/config/projects"
import { siteConfig } from "@/config/site"
import { cn, formatDateFromObj } from "@/lib/utils"
import profileImg from "@/public/profile-img.png"

interface ProjectPageProps {
  params: Promise<{
    projectId: string
  }>
}

const githubUsername = "ClarkeNeedles"

export default async function Project({ params }: ProjectPageProps) {
  const { projectId } = await params
  let project = Projects.find((val) => val.id === projectId)
  if (!project) {
    redirect("/projects")
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex items-center gap-2"
        )}
      >
        <Icons.chevronLeft className="h-4 w-4" />
        all projects
      </Link>
      <div>
        <time
          dateTime={new Date(project.endDate).toISOString()}
          className="block text-sm text-muted-foreground"
        >
          {formatDateFromObj(project.endDate)}
        </time>
        <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          <h1 className="font-bold mb-2 whitespace-nowrap text-[clamp(1rem,4vw,1.875rem)]">
          {"$ " + project.companyName}
          <span className="cursor inline-block text-[1em] leading-none align-middle">█</span>
        </h1>
          <div className="flex items-center">
            {project.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link href={project.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                <Link href={project.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <ChipContainer textArr={project.category} />
        <div className="mt-4 flex space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={profileImg}
              alt={"clarke"}
              width={42}
              height={42}
              className="rounded-full bg-background"
            />

            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{"Clarke Needles"}</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="my-8 relative aspect-video w-full overflow-hidden rounded-md border bg-muted">
        <Image
          src={project.companyLogoImg}
          alt={`Clarke Needles Engineering Project - ${project.companyName} built with ${project.techStack.slice(0, 3).join(", ")}`}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          tech stack
        </h2>
        <ChipContainer textArr={project.techStack} />
      </div>

      <div className="mb-7 lowercase">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          description
        </h2>
        <ProjectDescription
          paragraphs={project.descriptionDetails.paragraphs}
          bullets={project.descriptionDetails.bullets}
        />
      </div>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "gap-2"
          )}
        >
          <Icons.chevronLeft className="h-4 w-4" />
          all projects
        </Link>
      </div>
    </article>
  )
}
