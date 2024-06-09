"use client";

import { Column } from "@/components/column";
import { ListItem } from "@/components/list-item";
import { personalities } from "@/data";
import { FC, useState } from "react";
import sortBy from "lodash/sortBy";
import { usePathname, useSearchParams } from "next/navigation";
import { removeAccents } from "@/utils";
import { Presentation } from "@/components/presentation";

export const People: FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [hoveredId, setHoveredId] = useState<string | null>(null);

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

      {hoveredId && <Presentation personalityId={hoveredId} />}
    </div>
  );
};
