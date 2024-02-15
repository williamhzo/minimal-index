"use client";

import { Presentation } from "@/components/presentation";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

export const Content: FC = () => {
  const searchParams = useSearchParams();
  const person = searchParams.get("p");

  if (!person) {
    return null;
  }

  return <Presentation person={person} />;
};
