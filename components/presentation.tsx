"use client";

import { Personality, personalities } from "@/data";
import Image from "next/image";
import { FC } from "react";

type PresentationProps = {
  personalityId: Personality["id"];
};

export const Presentation: FC<PresentationProps> = ({ personalityId }) => {
  const discipline =
    personalities.find((p) => p.id === personalityId)?.name ?? "";
  const personality = personalities.find((p) => p.id === personalityId);

  if (!personality) {
    return null;
  }

  return (
    <div>
      <div className="flex gap-6">
        <Image
          src={personality.bio.image}
          alt={personality.name}
          width={192}
          height={192}
        />

        <p>
          {personality.name} - {discipline}
        </p>
      </div>
    </div>
  );
};
