import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import data from "@/data.json";
type Project = {
  id: number;
  title: string;
  img: string;
  demo: string;
  code: string;
  description: string;
  skills: string[];
};

export default function Work() {
  const projects: Project[] = data.workSection.projects;
  return (
    <section id="work" className="py-10">
      <Title title="Work" />
      <ScrollArea className="w-full rounded-md border whitespace-nowrap">
        <ul className="flex w-max space-x-4 p-4">
          {projects.map((project) => (
            <li
              key={project.id}
              className="bg-primary-foreground rounded-lg shadow-sm max-w-72 md:max-w-80 flex flex-col overflow-hidden group"
            >
              <div className="relative w-full h-40 md:h-48">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <main className="grow flex flex-col gap-2 justify-between p-1">
                <span className="text-lg font-semibold">{project.title}</span>
                <span className="text-muted-foreground text-sm text-wrap">
                  {project.description}
                </span>

                <ul className="flex flex-wrap gap-1">
                  {project.skills.map((skill) => (
                    <li key={skill} className="bg-muted p-1 rounded-md text-xs">
                      {skill}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center mt-auto">
                  <Button asChild variant="outline">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </Button>
                  <Button asChild variant="destructive">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </Button>
                </div>
              </main>
            </li>
          ))}
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
