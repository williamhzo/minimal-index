import { cn } from "@/utils";
import { FC, PropsWithChildren } from "react";

export const Section: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <section className={cn("flex shrink-0 flex-col items-start", className)}>
      {children}
    </section>
  );
};
