"use client";

import { ListItem } from "@/components/list-item";
import { Section } from "@/components/section";
import { FC } from "react";
import { data } from "@/data";
import { toTitleCase } from "@/utils";

export const Disciplines: FC = () => {
  const totalCount = Object.keys(data)
    .reduce(
      (acc, discipline) =>
        acc + Object.keys(data[discipline as keyof typeof data]).length,
      0,
    )
    .toString();

  return (
    <Section className="w-64">
      <ListItem href={{ query: { d: "all" } }} subtitle={totalCount}>
        All
      </ListItem>

      {Object.keys(data).map((discipline: string) => {
        return (
          <ListItem
            key={discipline}
            href={{ query: { d: discipline } }}
            subtitle={Object.keys(
              data[discipline as keyof typeof data],
            ).length.toString()}
          >
            {toTitleCase(discipline)}
          </ListItem>
        );
      })}
    </Section>
  );
};
