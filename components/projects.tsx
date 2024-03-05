import { AspectRatio } from "@/components/aspect-ratio";
import { type Project, personalities } from "@/data";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";

const ROW_HEIGHT = 362;

type ProjectsProps = {
  personalityId: string;
};

export const Projects: FC<ProjectsProps> = ({ personalityId }) => {
  const projects = personalities.find((p) => p.id === personalityId)?.projects;

  if (!projects) {
    return null;
  }

  return (
    <div className="flex shrink-0 flex-col gap-2">
      <ProjectRow>
        <ProjectContent projects={projects.row1} />
      </ProjectRow>
      <ProjectRow>
        <ProjectContent projects={projects.row2} />
      </ProjectRow>
    </div>
  );
};

const ProjectContent: FC<{ projects: Array<Project> }> = ({ projects }) => {
  return projects.map((p) => (
    <div key={p.id} style={{ width: ROW_HEIGHT * p.aspectRatio }}>
      <AspectRatio ratio={p.aspectRatio} className="grid place-items-center">
        <Project project={p} />
      </AspectRatio>
    </div>
  ));
};

const ProjectRow: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="flex w-full items-center"
      style={{
        height: ROW_HEIGHT,
      }}
    >
      {children}
    </div>
  );
};

const Project: FC<{ project: Project }> = ({ project }) => {
  if (project.image) {
    return (
      <Image
        className="object-cover"
        alt={project.image.alt}
        src={project.image.url}
        // width={ROW_HEIGHT * project.aspectRatio}
        // height={ROW_HEIGHT}
        fill
      />
    );
  } else if (project.video) {
    return (
      <div>
        {project.title}
        {project.description}
        {project.video}
      </div>
    );
  } else if (project.links) {
    return <p>links</p>;
  } else {
    return (
      <div className="grid place-items-center p-6">
        <p>{project.title}</p>
        <p>{project.description}</p>
      </div>
    );
  }
};
