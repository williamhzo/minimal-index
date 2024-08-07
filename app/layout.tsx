import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { MainContent } from "@/components/main-content";

const lausanne = localFont({
  src: "./lausanne-300.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://minimalindex.com/"),
  title: "Minimal Index",
  description:
    "Influences of Minimalism in Art, Architecture, Design, and more.",
  openGraph: {
    url: "https://minimalindex.com",
    title: "Minimal Index",
    description:
      "Influences of Minimalism in Art, Architecture, Design, and more.",
  },
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
          <MainContent>{children}</MainContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
