"use client";

import { Column } from "@/components/column";
import { ListItem } from "@/components/list-item";
import { usePathname } from "next/navigation";

export default function CreatorsLayout() {
  const pathname = usePathname();

  return (
    <Column>
      <ListItem
        subtitle="Product Designer"
        href="/about/creators/micka"
        selected={pathname.includes("/about/creators/micka")}
      >
        Micka Touillaud
      </ListItem>
      <ListItem
        subtitle="Product Engineer"
        href="/about/creators/william"
        selected={pathname.includes("/about/creators/william")}
      >
        William Hermozo
      </ListItem>
    </Column>
  );
}
