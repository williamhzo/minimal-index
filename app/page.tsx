import { ListItem } from "@/components/list-item";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <main className="grid place-items-center">
      <section className="flex flex-col items-start gap-8">
        <ListItem>A list item</ListItem>
        <ListItem subtitle="Lil subtitle">List with subtitle</ListItem>
        <ListItem>And another one, without</ListItem>
      </section>
    </main>
  );
}
