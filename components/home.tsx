"use client";

import { FC, useEffect, useState } from "react";
import { Splash } from "@/components/splash";
import { HomeContent } from "@/components/home-content";
import { NextPage } from "next";

export const Home: FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) {
      const timeout = setTimeout(() => setShowSplash(false), 2500);
      return () => clearTimeout(timeout);
    }
  }, [showSplash]);

  return showSplash ? <Splash /> : <HomeContent />;
};
