import { cn } from "@/utils";
import { FC, PropsWithChildren } from "react";

type RowProps = PropsWithChildren & {
  rows?: number;
  className?: string;
  as?: "div" | "li" | "span" | "p";
};

export const Row: FC<RowProps> = ({
  children,
  rows = 1,
  as = "div",
  className,
}) => {
  const height = `calc(${rows} * var(--row-height))`;

  const Component = as;

  return (
    <Component
      className={cn("flex w-full items-center", className)}
      style={{
        height,
      }}
    >
      {children}
    </Component>
  );
};
