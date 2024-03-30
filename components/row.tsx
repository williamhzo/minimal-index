import { cn } from "@/utils";
import { FC, PropsWithChildren } from "react";

type RowProps = PropsWithChildren & {
  rows?: 1 | 2 | 3 | 8;
  className?: string;
  as?: "div" | "li" | "span" | "p";
};

export const Row: FC<RowProps> = ({
  children,
  rows = 1,
  as = "div",
  className,
}) => {
  const height = rows * 48;

  const Component = as;

  return (
    <Component
      className={cn("flex w-full items-center", className)}
      style={{
        height: `${height}px`,
      }}
    >
      {children}
    </Component>
  );
};
