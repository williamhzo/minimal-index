"use client";

import { data } from "@/data";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

type PresentationProps = {
  name: string;
};

export const Presentation: FC<PresentationProps> = ({ name }) => {
  function findCategoryByName(name: string): string | null {
    const category = Object.keys(data).find((category) =>
      Object.keys(data[category as keyof typeof data]).includes(name),
    );
    return category || null;
  }

  const searchParams = useSearchParams();
  const d = searchParams.get("d");
  const p = searchParams.get("p");

  if (!d || !p) {
    return null;
  }

  const category = findCategoryByName(name);
  const person = data[d][p];

  return (
    <div>
      <p>{p}</p>
    </div>
  );
};
