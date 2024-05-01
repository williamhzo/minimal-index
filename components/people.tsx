"use client";

import { Column } from "@/components/column";
import { ListItem } from "@/components/list-item";
import { personalities } from "@/data";
import { FC } from "react";
import sortBy from "lodash/sortBy";
import { usePathname, useSearchParams } from "next/navigation";
import { removeAccents } from "@/utils";

export const People: FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
    <Column size="medium">
      {sortedPersonalities.map((personality) => {
        return (
          <ListItem
            key={personality.id}
            href={pathname + "?" + createQueryString("p", personality.id)}
            selected={searchParams.get("p") === personality.id}
          >
            {personality.name}
          </ListItem>
        );
      })}
    </Column>
  );
};
