import { Content } from "@/components/Contentt";
import { Disciplines } from "@/components/disciplines";
import { People } from "@/components/people";

export default function Home() {
  return (
    <div className="flex gap-6 overflow-x-auto">
      <Disciplines />
      <People />
      <Content />
    </div>
  );
}
