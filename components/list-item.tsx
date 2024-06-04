import { Row } from "@/components/row";
import { cn } from "@/utils";
import Link, { LinkProps } from "next/link";
import { FC, PropsWithChildren, forwardRef } from "react";

type ListItemProps = PropsWithChildren &
  LinkProps & {
    subtitle?: string;
    selected?: boolean;
  };

export const ListItem: FC<ListItemProps> = forwardRef<
  HTMLAnchorElement,
  ListItemProps
>(({ children, subtitle, href, selected }, ref) => {
  const animateClasses = "transition-colors duration-base";

  return (
    <Row className="relative w-full">
      <Link
        ref={ref}
        href={href}
        className={cn(
          "group flex h-full w-full items-center gap-2 text-content-light",
          "hover:text-content-medium focus:text-content-bold focus-visible:outline-none",
          animateClasses,
          selected && "text-content-bold",
        )}
      >
        {children}

        {subtitle && (
          <span
            className={cn(
              "text-content-lightest",
              "group-hover:text-content-light group-focus:text-content-medium",
              animateClasses,
              selected && "text-content-medium",
            )}
          >
            {subtitle}
          </span>
        )}

        <span className="absolute bottom-0 left-0 h-px w-full bg-background-light duration-base" />

        <span
          className={cn(
            "absolute bottom-0 left-0 h-px w-0 bg-background-boldest transition-width duration-base",
            "group-focus:w-full",
            selected && "w-full",
          )}
        />
      </Link>
    </Row>
  );
});

ListItem.displayName = "ListItem";
