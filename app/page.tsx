import { Content } from "@/components/content";
import { Disciplines } from "@/components/disciplines";
import { People } from "@/components/people";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="mr-12 flex h-full gap-0">
      <Disciplines />

      <div className="flex gap-6">
        <Suspense>
          <People />
        </Suspense>

        <Suspense>
          <Content />
        </Suspense>
      </div>
    </div>
  );
}
