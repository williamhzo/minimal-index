import { CreatorsContent } from "@/components/creators-content";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <CreatorsContent />
    </Suspense>
  );
}
