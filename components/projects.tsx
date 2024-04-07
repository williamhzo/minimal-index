import { AspectRatio } from "@/components/aspect-ratio";
import { Row } from "@/components/row";
import { Youtube } from "@/components/youtube";
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
      className="flex w-full items-center gap-2"
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
      <figure>
        <Image
          className="object-cover"
          alt={project.image.alt}
          src={project.image.url}
          fill
        />
      </figure>
    );
  } else if (project.video) {
    const hasFigCaption = project.title || project.description;
    return (
      <figure className="flex flex-col gap-2 px-16">
        {hasFigCaption ? (
          <figcaption className="flex gap-2">
            {project.title}
            <span className="text-content-light">{project.description}</span>
          </figcaption>
        ) : null}
        <Youtube
          videoId={project.video}
          videoTitle={project.title ?? "Project video embed"}
        />
      </figure>
    );
  } else if (project.links) {
    return (
      <div className="flex flex-col items-start">
        <Row as="p" className="uppercase tracking-widest text-content-bold">
          Minimal ressources
        </Row>

        <ul>
          {project.links.map((link) => (
            <Row key={link.url} as="li">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-content-light"
              >
                {link.label}
                <span className="text-content-lightest">{link.subLabel}</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </Row>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-1 p-6">
        <p className="uppercase tracking-widest text-content-bold">
          {project.title}
        </p>
        <p>{project.description}</p>
      </div>
    );
  }
};
