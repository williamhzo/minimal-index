"use client";

import { Presentation } from "@/components/presentation";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

export const Content: FC = () => {
  const searchParams = useSearchParams();
  const personalityId = searchParams.get("p");

  if (!personalityId) {
    return null;
  }

  return <Presentation personalityId={personalityId} />;
};
