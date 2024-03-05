import { cn } from "@/utils";
import { FC, PropsWithChildren } from "react";

type ColumnProps = PropsWithChildren & {
  size?: "small" | "medium" | "large";
  className?: string;
};

export const Column: FC<ColumnProps> = ({
  children,
  size = "small",
  className,
}) => {
  // TODO: Temorarily dirty tu connais
  const height = size === "small" ? 256 : size === "medium" ? 396 : 536;

  return (
    <div
      className={cn("flex shrink-0 flex-col items-start", className)}
      style={{
        width: `${height}px`,
      }}
    >
      {children}
    </div>
  );
};
