"use client";

import { Content } from "@/components/content";
import { Disciplines } from "@/components/disciplines";
import { People } from "@/components/people";

export const HomeContent = () => {
  return (
    <div className="mr-12 flex h-full w-full gap-0">
      <Disciplines />

      <div className="flex gap-6">
        <People />
        <Content />
      </div>
    </div>
  );
};
