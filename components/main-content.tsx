"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Title } from "@/components/title";
import { FooterLink } from "@/components/footer-link";
import { Splash } from "@/components/splash";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const MainContent: FC<PropsWithChildren> = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) {
      const timeout = setTimeout(() => setShowSplash(false), 2500);
      return () => clearTimeout(timeout);
    }
  }, [showSplash]);

  if (showSplash) return <Splash show={showSplash} />;

  return (
    <motion.div
      className="relative flex min-h-dvh gap-16 py-[--global-padding] text-content-medium"
      transition={{
        duration: 0.3,
        delay: 0,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <header className="fixed left-[--global-padding] top-[--global-padding] z-10">
        <Title />
      </header>

      <main className="flex px-[--global-padding] pb-[calc(14.5px+var(--global-padding))] pt-[calc(var(--title-height)+var(--global-padding))]">
        {children}
      </main>

      <footer className="fixed bottom-[--global-padding] left-[--global-padding] z-10 flex gap-6">
        <FooterLink href="/">Influences of Minimalism</FooterLink>
        <FooterLink href="/about/genesis">About</FooterLink>
      </footer>

      <ThemeSwitcher className="fixed bottom-[--global-padding] right-[--global-padding] z-10" />
    </motion.div>
  );
};
