"use client";

import { ListItem } from "@/components/list-item";
import { Section } from "@/components/section";
import { data } from "@/data";
import { toTitleCase } from "@/utils";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

export const People: FC = () => {
  const searchParams = useSearchParams();
  const discipline = searchParams.get("d");

  if (!discipline) {
    return null;
  }

  const isAll = discipline === "all";

  const people = isAll
    ? { ...data.artist, ...data.architect, ...data.designer }
    : data[discipline as keyof typeof data];

  function findCategoryByName(name: string): string | null {
    const category = Object.keys(data).find((category) =>
      Object.keys(data[category as keyof typeof data]).includes(name),
    );
    return category || null;
  }

  const sortedPeople = Object.keys(people).sort((a, b) => a.localeCompare(b));

  return (
    <Section className="w-96">
      {sortedPeople.map((person: string) => {
        return (
          <ListItem
            key={person}
            href={{ query: { a: person } }}
            subtitle={
              isAll
                ? toTitleCase(findCategoryByName(person) ?? "")
                : discipline.charAt(0).toUpperCase() + discipline.slice(1)
            }
          >
            {person}
          </ListItem>
        );
      })}
    </Section>
  );
};
