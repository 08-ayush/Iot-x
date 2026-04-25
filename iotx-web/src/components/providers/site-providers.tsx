"use client";

import { LenisProvider } from "@/components/providers/lenis-provider";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { ParticleField } from "@/components/effects/particle-field";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { AuroraOrbs } from "@/components/effects/aurora-orbs";

type Props = { children: React.ReactNode };

export function SiteProviders({ children }: Props) {
  return (
    <LenisProvider>
      <ScrollProgress />
      <div className="cinematic-mesh" aria-hidden />
      <AuroraOrbs />
      <CursorGlow />
      <ParticleField />
      {children}
    </LenisProvider>
  );
}
