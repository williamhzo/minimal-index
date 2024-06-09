"use client";

import { AspectRatio } from "@/components/aspect-ratio";
import { Column } from "@/components/column";
import { ListItem } from "@/components/list-item";
import { Quote } from "@/components/quote";
import { Row } from "@/components/row";
import { Youtube } from "@/components/youtube";
import {
  type ProjectItem,
  type Project,
  personalities,
  principles,
  Principle,
} from "@/data";
import { cn } from "@/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const ROW_HEIGHT = 362;

export const ProjectsContent: FC<{ personalityId: string }> = ({
  personalityId,
}) => {
  const projects = personalities.find((p) => p.id === personalityId)?.projects;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const projectId = searchParams.get("pj");
  const project = projects?.find((p) => p.id === projectId);

  const router = useRouter();

  useEffect(() => {
    function createQueryString(name: string, value: string) {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    }

    if (projects && !projectId) {
      router.replace(pathname + "?" + createQueryString("pj", projects[0].id));
    }
  }, [pathname, projectId, searchParams, projects, router]);

  if (!projects) {
    return null;
  }

  return projects.length > 1 ? (
    <>
      <ProjectsList projects={projects} />
      {project && <ProjectItem project={project} />}
    </>
  ) : (
    <ProjectItem project={projects[0]} />
  );
};

const ProjectsList: FC<{ projects: Project[] }> = ({ projects }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function createQueryString(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  }

  function hasLongTitle(projects: Project[]) {
    return projects.some((p) => p.title.length > 25);
  }

  return (
    <Column size={hasLongTitle(projects) ? "medium" : "small"}>
      {projects.map((p) => (
        <ListItem
          key={p.title}
          href={pathname + "?" + createQueryString("pj", p.id)}
          subtitle={p.id}
          selected={searchParams.get("pj") === p.id}
        >
          {p.title}
        </ListItem>
      ))}
    </Column>
  );
};

const ProjectItem: FC<{ project: Project }> = ({ project }) => {
  // handle Rams' special 10 principles project
  if (project.id === "10") {
    return <Dieter10Principles />;
  }

  return (
    <div className="flex shrink-0 flex-col gap-2">
      <ProjectRow>
        <ProjectCells projects={project.content.row1} />
      </ProjectRow>
      <ProjectRow>
        <ProjectCells projects={project.content.row2} />
      </ProjectRow>
    </div>
  );
};

const Dieter10Principles: FC = () => {
  const [principle, setPrinciple] = useState<Principle>(principles[0]);

  return (
    <div className="flex gap-6">
      <div className="flex shrink-0 flex-col gap-0">
        {principles.map((p) => (
          <PrincipleItem
            key={p.title}
            handleClick={setPrinciple}
            principle={p}
            isActive={principle.title === p.title}
          />
        ))}
      </div>
    </div>
  );
};

type PrincipleItemProps = PropsWithChildren & {
  handleClick: Dispatch<SetStateAction<Principle>>;
  principle: Principle;
  isActive: boolean;
};

const PrincipleItem: FC<PrincipleItemProps> = ({
  children,
  handleClick,
  principle,
  isActive,
}) => {
  const animateClasses = "transition-colors duration-base";

  return (
    <div className={cn("flex gap-6 pt-[14px]", isActive && "pt-10")}>
      <Column size="medium" className="relative">
        <button
          className={cn(
            "flex h-full w-full items-center text-balance pb-[14px] text-left text-content-light",
            isActive && "pb-10 text-xl text-content-bold",
          )}
          onClick={() => handleClick(principle)}
        >
          {principle.title}
        </button>

        <span className="absolute bottom-0 left-0 h-px w-full bg-background-light duration-base" />

        <span
          className={cn(
            "absolute bottom-0 left-0 h-px w-0 bg-background-boldest transition-width duration-base",
            isActive && "w-full",
          )}
        />
      </Column>

      {isActive ? (
        <Column size="medium" className="mt-2 gap-5">
          {principle.content.map((c) => (
            <p key={c.slice(0, 5)} className="text-content-bold">
              {c}
            </p>
          ))}
        </Column>
      ) : null}
    </div>
  );
};

const ProjectCells: FC<{ projects: Array<ProjectItem> }> = ({ projects }) => {
  return projects.map((p, i) => (
    <div
      key={
        p.image?.url ||
        (Array.isArray(p.description) ? p.description[0] : p.description) ||
        i
      }
      style={{ width: ROW_HEIGHT * p.aspectRatio }}
    >
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
      style={{ height: ROW_HEIGHT }}
    >
      {children}
    </div>
  );
};

const Project: FC<{ project: ProjectItem }> = ({ project }) => {
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
      <div className="flex flex-col gap-3 p-6">
        <p className="uppercase tracking-widest text-content-bold">
          {project.title}
        </p>
        <span className="space-y-2">
          {Array.isArray(project.description) ? (
            project.description.map((desc) => (
              <p key={desc.slice(0, 5)}>{desc}</p>
            ))
          ) : project.aspectRatio === 19 / 9 && project.description ? (
            <Quote quote={project.description} />
          ) : (
            <p>{project.description}</p>
          )}
        </span>
      </div>
    );
  }
};
