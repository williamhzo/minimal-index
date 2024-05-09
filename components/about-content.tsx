"use client";

import { Column } from "@/components/column";
import { ListItem } from "@/components/list-item";
import { usePathname } from "next/navigation";

export const AboutContent = () => {
  const pathmame = usePathname();

  return (
    <Column>
      <ListItem href="/about/genesis" selected={pathmame.includes("genesis")}>
        Genesis
      </ListItem>
      <ListItem href="/about/creators" selected={pathmame.includes("creators")}>
        Creators
      </ListItem>
    </Column>
  );
};
