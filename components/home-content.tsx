"use client";

import { Content } from "@/components/content";
import { Disciplines } from "@/components/disciplines";
import { People } from "@/components/people";
import { useRef, useEffect } from "react";

export const HomeContent = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      console.log(event.deltaY);
      if (Math.abs(event.deltaY) > 0 && scrollContainerRef.current) {
        event.preventDefault();
        scrollContainerRef.current.scrollLeft += event.deltaY;
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="mr-12 flex h-full w-full gap-0">
      <Disciplines />

      <div className="flex gap-6">
        <People />
        <Content />
      </div>
    </div>
  );
};
