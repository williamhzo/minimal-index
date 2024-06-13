import { cn } from "@/utils";
import { ComponentProps, FC, PropsWithChildren } from "react";

export const sizeToWidth: Record<NonNullable<ColumnProps["size"]>, number> = {
  small: 256,
  medium: 396,
  large: 536,
  xlarge: 762,
};

type ColumnProps = ComponentProps<"div"> &
  PropsWithChildren & {
    size?: "small" | "medium" | "large" | "xlarge";
    className?: string;
  };

export const Column: FC<ColumnProps> = ({
  children,
  size = "small",
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn("flex shrink-0 flex-col items-start", className)}
      style={{
        width: `${sizeToWidth[size]}px`,
      }}
    >
      {children}
    </div>
  );
};
