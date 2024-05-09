"use client";

import { FC, PropsWithChildren } from "react";
import { disciplines, personalities } from "@/data";
import { Column } from "@/components/column";
import { Row } from "@/components/row";

export const Disciplines: FC = () => {
  const countPersonalitiesByDiscipline = (disciplineId: string) => {
    return personalities.filter(
      (personality) => personality.disciplineId === disciplineId,
    ).length;
  };

  return (
    <Column>
      {disciplines.map((discipline) => {
        return (
          <Item
            key={discipline.id}
            count={countPersonalitiesByDiscipline(discipline.id)}
          >
            {discipline.name}
          </Item>
        );
      })}
    </Column>
  );
};

const Item: FC<PropsWithChildren & { count: number }> = ({
  children,
  count,
}) => {
  return (
    <Row className="relative items-start" rows={count}>
      <Row rows={1} className="justify-start gap-2">
        <p className="flex h-full items-center gap-2 text-content-light">
          {children}
        </p>
        <span className="text-content-lightest">{count}</span>
      </Row>

      <span className="absolute bottom-0 left-0 h-px w-full bg-background-light duration-base" />
    </Row>
  );
};
