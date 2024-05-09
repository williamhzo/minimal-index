import { AboutContent } from "@/components/about-content";
import { ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-12">
      <AboutContent />
      {children}
    </div>
  );
}
