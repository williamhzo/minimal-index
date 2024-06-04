"use client";

import { Column, sizeToWidth } from "@/components/column";
import { ListItem } from "@/components/list-item";
import { personalities } from "@/data";
import { FC } from "react";
import sortBy from "lodash/sortBy";
import { usePathname, useSearchParams } from "next/navigation";
import { removeAccents } from "@/utils";
import { useMouse } from "@/app/hooks/use-mouse";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import Image from "next/image";

export const People: FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function createQueryString(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    params.delete("pj");
    return params.toString();
  }

  const sortedPersonalities = sortBy(personalities, [
    (p) => p.disciplineId,
    (p) => removeAccents(p.name),
  ]);

  const { ref, x, y } = useMouse();

  return (
    <div>
      <Column size="medium">
        {sortedPersonalities.map((personality) => {
          return (
            <HoverCard key={personality.id} openDelay={0} closeDelay={0}>
              <HoverCardTrigger className="w-full">
                <ListItem
                  key={personality.id}
                  href={pathname + "?" + createQueryString("p", personality.id)}
                  selected={searchParams.get("p") === personality.id}
                  // @ts-ignore
                  ref={ref}
                >
                  {personality.name}
                </ListItem>
              </HoverCardTrigger>

              <HoverCardContent
                align="start"
                alignOffset={x - sizeToWidth["small"]}
                sideOffset={-y * 2}
                hideWhenDetached
                className="z-10 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
              >
                <Image
                  src={personality.bio.image}
                  alt={personality.name}
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </HoverCardContent>
            </HoverCard>
          );
        })}
      </Column>
      {/*
      <Column size="medium">
        {sortedPersonalities.map((personality) => {
          return (
            <ListItem
              key={personality.id}
              href={pathname + "?" + createQueryString("p", personality.id)}
              selected={searchParams.get("p") === personality.id}
            >
              {personality.name}
            </ListItem>
          );
        })}
      </Column> */}

      {/* <Presentation personalityId={personalityId} /> */}
    </div>
  );
};
