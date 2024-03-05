import { Content } from "@/components/content";
import { Disciplines } from "@/components/disciplines";
import { People } from "@/components/people";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="scrollbar-none mr-56 flex h-full gap-6 overflow-x-auto">
      <Disciplines />

      <Suspense>
        <People />
      </Suspense>

      <Suspense>
        <Content />
      </Suspense>
    </div>
  );
}
