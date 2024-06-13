"use client";

import { Column } from "@/components/column";
import { ListItem } from "@/components/list-item";
import { personalities } from "@/data";
import { FC, useState } from "react";
import sortBy from "lodash/sortBy";
import { usePathname, useSearchParams } from "next/navigation";
import { createQueryString, removeAccents } from "@/utils";
import { Presentation } from "@/components/presentation";

export const People: FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sortedPersonalities = sortBy(personalities, [
    (p) => p.disciplineId,
    (p) => removeAccents(p.name),
  ]);

  return (
    <div className="flex gap-0">
      <Column size="medium">
        {sortedPersonalities.map((personality) => {
          return (
            <ListItem
              key={personality.id}
              href={
                pathname +
                "?" +
                createQueryString({
                  name: "p",
                  value: personality.id,
                  searchParams,
                  queryToRemove: "pj",
                })
              }
              selected={searchParams.get("p") === personality.id}
            >
              {personality.name}
            </ListItem>
          );
        })}
      </Column>
    </div>
  );
};
