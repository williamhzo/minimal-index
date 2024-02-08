import { ThemeSwitcher } from '@/components/theme-switcher';

export default function Home() {
  return (
    <main className="flex bg-background min-h-screen relative flex-col items-center justify-center">
      <h1 className="uppercase text-2xl">minimal index</h1>
      <p className="text-foreground-light">stay tuned...</p>

      <div className="absolute bottom-4 right-4">
        <ThemeSwitcher />
      </div>
    </main>
  );
}
