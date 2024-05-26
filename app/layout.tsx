import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Title } from "@/components/title";
import { FooterLink } from "@/components/footer-link";
import localFont from "next/font/local";

const lausanne = localFont({
  src: "./lausanne-300.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minimal Index",
  description:
    "Influences of Minimalism in Art, Architecture, Design, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lausanne.className + " bg-background"}>
        <ThemeProvider>
          <div className="relative flex min-h-dvh grid-rows-[auto_1fr] gap-16 py-[--global-padding] text-content-medium">
            <header className="fixed left-[--global-padding] top-[--global-padding] z-10">
              <Title />
            </header>

            <main className="px-[--global-padding] pt-[calc(var(--title-height)+var(--global-padding))]">
              {children}
            </main>

            <footer className="fixed bottom-[--global-padding] left-[--global-padding] z-10 flex gap-6">
              <FooterLink href="/">Influences of Minimalism</FooterLink>
              <FooterLink href="/about">About</FooterLink>
            </footer>

            <ThemeSwitcher className="fixed bottom-[--global-padding] right-[--global-padding] z-10" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
