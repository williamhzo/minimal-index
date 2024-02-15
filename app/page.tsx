import { ListItem } from "@/components/list-item";
import { cn } from "@/utils";
import { FC, PropsWithChildren } from "react";

export default function Home() {
  return (
    <div className="flex gap-6 overflow-x-auto">
      <Section className="w-64">
        <ListItem href={{ query: { a: "c" } }} subtitle="7">
          All
        </ListItem>
        <ListItem href={{ query: { a: "d" } }} subtitle="3">
          Artists
        </ListItem>
        <ListItem href={{ query: { a: "e" } }} subtitle="2">
          Architects
        </ListItem>
        <ListItem href={{ query: { a: "f" } }} subtitle="2">
          Designers
        </ListItem>
      </Section>

      <Section className="w-96">
        <ListItem href={{ query: { a: "g" } }} subtitle="Architect">
          Álvaro Siza Vieira
        </ListItem>
        <ListItem href={{ query: { a: "h" } }} subtitle="Designer">
          Charlotte Perriand
        </ListItem>
        <ListItem href={{ query: { a: "i" } }} subtitle="Psychologist">
          Daniel Kahneman
        </ListItem>
        <ListItem href={{ query: { a: "j" } }} subtitle="Architect">
          David Chipperfield
        </ListItem>
        <ListItem href={{ query: { a: "k" } }} subtitle="Designer">
          Diter Rams
        </ListItem>
        <ListItem href={{ query: { a: "l" } }} subtitle="Designer">
          Eero Saarinen
        </ListItem>
        <ListItem href={{ query: { a: "m" } }} subtitle="Psychologist">
          Elizabeth Loftus
        </ListItem>
        <ListItem href={{ query: { a: "n" } }} subtitle="Designer">
          Hans Wegner
        </ListItem>
      </Section>
    </div>
  );
}

const Section: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <section
      className={cn("flex shrink-0 flex-col items-start gap-3", className)}
    >
      {children}
    </section>
  );
};
