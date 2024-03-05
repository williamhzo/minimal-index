import { cn } from "@/utils";
import { FC, PropsWithChildren } from "react";

type RowProps = PropsWithChildren & {
  rows?: 1 | 2 | 3 | 4;
  className?: string;
};

export const Row: FC<RowProps> = ({ children, rows = 1, className }) => {
  const height = rows * 48;

  return (
    <div
      className={cn("flex w-full items-center", className)}
      style={{
        height: `${height}px`,
      }}
    >
      {children}
    </div>
  );
};
