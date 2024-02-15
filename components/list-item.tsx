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
        "group flex w-full cursor-default gap-2 border-b border-background-light py-3 text-content-light",
        "hover:text-content-medium focus:border-border focus:text-content-bold focus-visible:outline-none",
        animateClasses,
      )}
    >
      {children}
      {subtitle && (
        <span
          className={cn(
            "text-content-lightest",
            "group-hover:text-content-light group-focus:text-content-medium",
            animateClasses,
          )}
        >
          {subtitle}
        </span>
      )}
    </button>
  );
};
