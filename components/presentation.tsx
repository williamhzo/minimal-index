"use client";

import { Column } from "@/components/column";
import { Quote } from "@/components/quote";
import { Row } from "@/components/row";
import { Personality, personalities } from "@/data";
import Image from "next/image";
import { FC } from "react";

type PresentationProps = {
  personalityId: Personality["id"];
  hideQuote?: boolean;
};

export const Presentation: FC<PresentationProps> = ({
  personalityId,
  hideQuote = false,
}) => {
  const personality = personalities.find((p) => p.id === personalityId);

  if (!personality) {
    return null;
  }

  return (
    <Column className="gap-24 pl-6" size="large">
      <div className="flex gap-6">
        <figure className="relative shrink-0">
          <Image
            src={personality.bio.image}
            alt={personality.name}
            width={192}
            height={192}
            className="object-cover"
          />
        </figure>

        <div className="flex flex-col items-start">
          <Row rows={2}>
            <p>{personality.bio.description}</p>
          </Row>

          <Row>
            <p className="my-4 text-content-light">{personality.bio.born}</p>
          </Row>
        </div>
      </div>

      {!hideQuote && <Quote quote={personality.quote} />}
    </Column>
  );
};
