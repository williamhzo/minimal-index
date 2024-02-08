import { ListItem } from "@/components/list-item";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <main className="">
      <div className="flex gap-6 overflow-x-auto px-8">
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
      </div>
    </main>
  );
}

const Section = () => {
  return (
    <section className="flex shrink-0 flex-col items-start gap-8">
      <ListItem subtitle="Architect">Álvaro Siza Vieira</ListItem>
      <ListItem subtitle="Designer">Diter Rams</ListItem>
      <ListItem subtitle="Designer">Eero Saarinen</ListItem>
      <ListItem subtitle="Lil subtitle">List with subtitle</ListItem>
    </section>
  );
};
