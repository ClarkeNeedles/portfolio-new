import { Metadata } from "next"

import PageContainer from "@/components/common/page-container"
import ProjectCard from "@/components/projects/project-card"
import { ResponsiveTabs } from "@/components/ui/responsive-tabs"
import { pagesConfig } from "@/config/pages"
import { Projects } from "@/config/projects"

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
}

const renderContent = (tabVal: string) => {
  let projectArr = Projects
  if (tabVal === "personal") {
    projectArr = projectArr.filter((val) => val.type === "Personal")
  } else if (tabVal === "team") {
    projectArr = projectArr.filter((val) => val.type === "Team")
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static items-stretch">
      {projectArr.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  )
}

export default function ProjectsPage() {
  const tabItems = [
    {
      value: "all",
      label: "all",
      content: renderContent("all"),
    },
    {
      value: "personal",
      label: "personal",
      content: renderContent("personal"),
    },
    {
      value: "team",
      label: "team",
      content: renderContent("team"),
    },
  ]

  return (
    <PageContainer title={"/" + pagesConfig.projects.title + ":~$ "}>
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  )
}
