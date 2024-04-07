"use client";

import { Column } from "@/components/column";
import { Row } from "@/components/row";
import { Personality, personalities } from "@/data";
import Image from "next/image";
import { FC } from "react";

type PresentationProps = {
  personalityId: Personality["id"];
};

export const Presentation: FC<PresentationProps> = ({ personalityId }) => {
  const personality = personalities.find((p) => p.id === personalityId);

  if (!personality) {
    return null;
  }

  return (
    <Column className="gap-24" size="large">
      <div className="flex gap-6">
        <figure className="relative h-48 w-48">
          <Image
            src={personality.bio.image}
            alt={personality.name}
            layout="fill"
            objectFit="cover"
          />
        </figure>

        <div className="flex flex-col items-start">
          <Row rows={2}>
            <p className="max-w-80">{personality.bio.description}</p>
          </Row>

          <Row>
            <p className="my-4 text-content-light">{personality.bio.born}</p>
          </Row>
        </div>
      </div>

      <p className="flex items-start text-xl text-content-lightest">
        <span className="text-[48px]">“</span> {personality.quote}
      </p>
    </Column>
  );
};
