import { Row } from "@/components/row";
import { cn } from "@/utils";
import Link, { LinkProps } from "next/link";
import { FC, PropsWithChildren } from "react";

type ListItemProps = PropsWithChildren &
  LinkProps & {
    subtitle?: string;
  };

export const ListItem: FC<ListItemProps> = ({ children, subtitle, href }) => {
  const animateClasses = "transition-colors duration-200";

  return (
    <Row className="relative">
      <Link
        href={href}
        className={cn(
          "group flex h-full w-full items-center gap-2 text-content-light",
          "hover:text-content-medium focus:text-content-bold focus-visible:outline-none",
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

        <span className="absolute bottom-0 left-0 h-px w-full bg-background-light" />

        <span
          className={cn(
            "absolute bottom-0 left-0 h-px w-0 bg-background-boldest transition-width duration-200",
            "group-focus:w-full",
          )}
        />
      </Link>
    </Row>
  );
};
