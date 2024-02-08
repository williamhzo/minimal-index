import { FC, PropsWithChildren } from "react";

type ListItemProps = PropsWithChildren & {
  subtitle?: string;
};

export const ListItem: FC<ListItemProps> = ({ children, subtitle }) => {
  return (
    <button className="flex w-full cursor-default gap-2 border-b border-background-light py-3 text-foreground-light transition-colors duration-200 hover:border-border hover:text-foreground">
      {children}
      {subtitle && <span className="text-foreground-lightest">{subtitle}</span>}
    </button>
  );
};
