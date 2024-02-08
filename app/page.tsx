import { ListItem } from "@/components/list-item";
import { cn } from "@/utils";
import { FC, PropsWithChildren } from "react";

export default function Home() {
  return (
    <div className="flex gap-6 overflow-x-auto px-8">
      <Section className="w-32">
        <ListItem>Index</ListItem>
        <ListItem>About</ListItem>
      </Section>

      <Section className="w-64">
        <ListItem subtitle="7">All</ListItem>
        <ListItem subtitle="3">Artists</ListItem>
        <ListItem subtitle="2">Architects</ListItem>
        <ListItem subtitle="2">Designers</ListItem>
      </Section>

      <Section className="w-96">
        <ListItem subtitle="Architect">Álvaro Siza Vieira</ListItem>
        <ListItem subtitle="Designer">Charlotte Perriand</ListItem>
        <ListItem subtitle="Psychologist">Daniel Kahneman</ListItem>
        <ListItem subtitle="Architect">David Chipperfield</ListItem>
        <ListItem subtitle="Designer">Diter Rams</ListItem>
        <ListItem subtitle="Designer">Eero Saarinen</ListItem>
        <ListItem subtitle="Psychologist">Elizabeth Loftus</ListItem>
        <ListItem subtitle="Designer">Hans Wegner</ListItem>
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
