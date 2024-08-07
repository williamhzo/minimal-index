"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";

type FooterLinkProps = PropsWithChildren & {
  href: string;
};

export const FooterLink: FC<FooterLinkProps> = ({ children, ...props }) => {
  const pathname = usePathname();

  const isActive =
    pathname === props.href || (pathname === "/" && props.href === "/");

  return (
    <Link
      className={cn(
        "border-b-[0.5px] border-background-light text-sm uppercase hover:text-content-medium focus:outline-none",
        isActive ? "text-content-bold" : "text-content-light",
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
