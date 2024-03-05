"use client";

import { Column } from "@/components/column";
import { ListItem } from "@/components/list-item";
import { disciplines, personalities } from "@/data";
import { usePathname, useSearchParams } from "next/navigation";
import { FC, useCallback, useMemo } from "react";

export const People: FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const disciplineId = searchParams.get("d");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const isAll = disciplineId === "all";

  const personalitiesToRender = useMemo(() => {
    const filtered =
      disciplineId === "all"
        ? personalities
        : personalities.filter(
            (personality) => personality.disciplineId === disciplineId,
          );

    return filtered.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
    );
  }, [disciplineId]);

  if (!disciplineId) {
    return null;
  }

  const discipline = disciplines.find((d) => d.id === disciplineId)?.name ?? "";

  return (
    <Column size="medium">
      {personalitiesToRender.map((personality) => {
        return (
          <ListItem
            key={personality.id}
            href={pathname + "?" + createQueryString("p", personality.id)}
            subtitle={discipline}
          >
            {personality.name}
          </ListItem>
        );
      })}
    </Column>
  );
};
