"use client";

import { Disciplines } from "@/components/disciplines";
import { ProjectsContent } from "@/components/projects";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Column } from "@/components/column";
import { personalities } from "@/data";
import {
  ComponentProps,
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import sortBy from "lodash/sortBy";
import { cn, removeAccents } from "@/utils";
import { Presentation } from "@/components/presentation";
import { Row } from "@/components/row";
import { Splash } from "@/components/splash";

export const HomeContent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sortedPersonalities = useMemo(
    () =>
      sortBy(personalities, [
        (p) => p.disciplineId,
        (p) => removeAccents(p.name),
      ]),
    [],
  );

  const router = useRouter();

  const personalityId = searchParams.get("p");
  const projects = personalities.find((p) => p.id === personalityId)?.projects;

  const scrollToRef = useRef<HTMLDivElement>(null);

  function handleSelect(id: string) {
    const initialProjectId =
      personalities.find((p) => p.id === id)?.projects[0].id ?? "";

    const params = new URLSearchParams(searchParams.toString());
    params.set("p", id);
    params.set("pj", initialProjectId);

    router.push(pathname + "?" + params);

    // FIXME: annoying hack to ensure the projects are populated before scroll happens.
    setTimeout(() => {
      if (scrollToRef.current) {
        scrollToRef.current.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    }, 100);
  }

  useEffect(() => {
    if (showSplash) {
      setTimeout(() => setShowSplash(false), 2000);
    }
  }, [showSplash]);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <div className="mr-12 flex h-full w-full gap-0">
      <Disciplines />

      <div className="flex">
        <Column size="medium">
          {sortedPersonalities.map((personality) => (
            <PersonalityItem
              key={personality.id}
              handleClick={() => handleSelect(personality.id)}
              selected={personalityId === personality.id}
              onMouseEnter={() => setHoveredId(personality.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {personality.name}
            </PersonalityItem>
          ))}
        </Column>

        <div className="flex" ref={scrollToRef}>
          {!!hoveredId || !!personalityId ? (
            <Presentation
              hideQuote={!!hoveredId || !personalityId}
              personalityId={(hoveredId || personalityId) as string}
            />
          ) : null}

          {projects ? <ProjectsContent projects={projects} /> : null}
        </div>
      </div>
    </div>
  );
};

type PersonalityItemProps = PropsWithChildren &
  ComponentProps<"button"> & {
    subtitle?: string;
    selected?: boolean;
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
    handleClick: MouseEventHandler<HTMLButtonElement>;
  };

const PersonalityItem: FC<PersonalityItemProps> = ({
  children,
  subtitle,
  selected,
  onMouseEnter,
  onMouseLeave,
  handleClick,
}) => {
  const animateClasses = "transition-colors duration-base";

  return (
    <Row className="relative">
      <button
        className={cn(
          "group flex h-full w-full items-center gap-2 text-content-light",
          "hover:text-content-medium focus:text-content-bold focus-visible:outline-none",
          animateClasses,
          selected && "text-content-bold",
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={handleClick}
      >
        {children}

        {subtitle && (
          <span
            className={cn(
              "text-content-lightest",
              "group-hover:text-content-light group-focus:text-content-medium",
              animateClasses,
              selected && "text-content-medium",
            )}
          >
            {subtitle}
          </span>
        )}

        <span className="absolute bottom-0 left-0 h-px w-full bg-background-light duration-base" />

        <span
          className={cn(
            "absolute bottom-0 left-0 h-px w-0 bg-background-boldest transition-width duration-base",
            "group-focus:w-full",
            selected && "w-full",
          )}
        />
      </button>
    </Row>
  );
};
