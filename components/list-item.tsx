import { cn } from "@/utils";
import { FC, PropsWithChildren } from "react";

type ListItemProps = PropsWithChildren & {
  subtitle?: string;
};

export const ListItem: FC<ListItemProps> = ({ children, subtitle }) => {
  const animateClasses = "transition-colors duration-200 ";

  return (
    <button
      className={cn(
        "group flex w-full cursor-default gap-2 border-b border-background-light py-3 text-foreground-light hover:border-border hover:text-foreground",
        animateClasses,
      )}
    >
      {children}
      {subtitle && (
        <span
          className={cn(
            "text-foreground-lightest group-hover:text-foreground-medium",
            animateClasses,
          )}
        >
          {subtitle}
        </span>
      )}
    </button>
  );
};
