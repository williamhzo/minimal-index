"use client";

import { ListItem } from "@/components/list-item";
import { Section } from "@/components/section";
import { FC } from "react";
import { disciplines, personalities } from "@/data";

export const Disciplines: FC = () => {
  const countPersonalitiesByDiscipline = (disciplineId: string) => {
    return personalities.filter(
      (personality) => personality.disciplineId === disciplineId,
    ).length;
  };

  return (
    <Section className="w-64">
      <ListItem
        subtitle={personalities.length.toString()}
        href={{ query: { d: "all" } }}
      >
        All
      </ListItem>

      {disciplines.map((discipline) => {
        return (
          <ListItem
            key={discipline.id}
            subtitle={countPersonalitiesByDiscipline(discipline.id).toString()}
            href={{ query: { d: discipline.id } }}
          >
            {discipline.name}
          </ListItem>
        );
      })}
    </Section>
  );
};
