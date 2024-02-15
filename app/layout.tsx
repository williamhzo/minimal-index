import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Title } from "@/components/title";
import { FooterLink } from "@/components/footer-link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minimal Index",
  description: "Coming soon...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="grid min-h-dvh grid-rows-[auto_1fr] gap-16 bg-background py-8 text-content">
            <header className="flex items-center justify-between px-8">
              <Title />
              <ThemeSwitcher />
            </header>

            <main className="px-8">{children}</main>

            <footer className="flex items-center gap-6 px-8">
              <FooterLink href="/">Influences of Minimalism</FooterLink>
              <FooterLink href="/vote">Vote</FooterLink>
              <FooterLink href="/about">About</FooterLink>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
