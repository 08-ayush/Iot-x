"use client";

import { useEffect, useState } from "react";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { AuroraOrbs } from "@/components/effects/aurora-orbs";

type Props = { children: React.ReactNode };

export function SiteProviders({ children }: Props) {
  const [isPhoneLike, setIsPhoneLike] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsPhoneLike(mq.matches || window.matchMedia("(hover: none)").matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <LenisProvider>
      <ScrollProgress />
      <div className="cinematic-mesh" aria-hidden />
      {!isPhoneLike ? <AuroraOrbs /> : null}
      {!isPhoneLike ? <CursorGlow /> : null}
      {children}
    </LenisProvider>
  );
}
