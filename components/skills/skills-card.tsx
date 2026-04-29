import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-lg border bg-background p-2"
        >
          <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
            <skill.icon size={50} />
            <div className="space-y-2">
              <h3 className="font-bold lowercase">{"$ " + skill.name}</h3>
              <p className="text-sm text-muted-foreground lowercase">
                {"> " + skill.description}
              </p>
              {skill.projects && skill.projects.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  <p className="text-xs text-muted-foreground lowercase">{"> Used in:"}</p>
                  {skill.projects.map((project) => (
                    <a
                      key={project.name}
                      href={project.href}
                      className="text-xs underline hover:text-primary"
                    >
                      {project.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
