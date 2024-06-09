import { Row } from "@/components/row";
import { cn } from "@/utils";
import Link, { LinkProps } from "next/link";
import { FC, MouseEventHandler, PropsWithChildren } from "react";

type ListItemProps = PropsWithChildren &
  LinkProps & {
    subtitle?: string;
    selected?: boolean;
    onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
    onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
  };

export const ListItem: FC<ListItemProps> = ({
  children,
  subtitle,
  href,
  selected,
  onMouseEnter,
  onMouseLeave,
}) => {
  const animateClasses = "transition-colors duration-base";

  return (
    <Row className="relative">
      <Link
        href={href}
        className={cn(
          "group flex h-full w-full items-center gap-2 text-content-light",
          "hover:text-content-medium focus:text-content-bold focus-visible:outline-none",
          animateClasses,
          selected && "text-content-bold",
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
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
};
