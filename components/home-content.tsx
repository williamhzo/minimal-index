"use client";

import { Disciplines } from "@/components/disciplines";
import { ProjectsContent } from "@/components/projects";
import { usePathname, useSearchParams } from "next/navigation";
import { Column } from "@/components/column";
import { ListItem } from "@/components/list-item";
import { personalities } from "@/data";
import { useState } from "react";
import sortBy from "lodash/sortBy";
import { removeAccents } from "@/utils";
import { Presentation } from "@/components/presentation";

export const HomeContent = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const personalityId = searchParams.get("p");

  function createQueryString(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    params.delete("pj");
    return params.toString();
  }

  const sortedPersonalities = sortBy(personalities, [
    (p) => p.disciplineId,
    (p) => removeAccents(p.name),
  ]);

  return (
    <div className="mr-12 flex h-full w-full gap-0">
      <Disciplines />

      <div className="flex gap-6">
        <Column size="medium">
          {sortedPersonalities.map((personality) => {
            return (
              <ListItem
                key={personality.id}
                href={pathname + "?" + createQueryString("p", personality.id)}
                selected={searchParams.get("p") === personality.id}
                onMouseEnter={() => setHoveredId(personality.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {personality.name}
              </ListItem>
            );
          })}
        </Column>

        {hoveredId ? <Presentation personalityId={hoveredId} /> : null}
        {personalityId && !hoveredId ? (
          <>
            <Presentation personalityId={personalityId} />
            <ProjectsContent personalityId={personalityId} />
          </>
        ) : null}
      </div>
    </div>
  );
};
