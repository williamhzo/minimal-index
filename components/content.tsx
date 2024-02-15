"use client";

import { Presentation } from "@/components/presentation";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

export const Content: FC = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("p");

  if (!name) {
    return null;
  }

  return <Presentation name={name} />;
};
