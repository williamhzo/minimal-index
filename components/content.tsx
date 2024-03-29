"use client";

import { Presentation } from "@/components/presentation";
import { Projects } from "@/components/projects";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

export const Content: FC = () => {
  const searchParams = useSearchParams();
  const personalityId = searchParams.get("p");

  if (!personalityId) {
    return null;
  }

  return (
    <div className="flex gap-6">
      <Presentation personalityId={personalityId} />
      <Projects personalityId={personalityId} />
    </div>
  );
};
