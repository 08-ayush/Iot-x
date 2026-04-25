"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type LenisProviderProps = {
  children: React.ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const isCoarsePointer =
      window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches;

    const lenis = new Lenis({
      duration: isCoarsePointer ? 1.9 : 1.35,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: isCoarsePointer ? 0.78 : 1.05,
      wheelMultiplier: isCoarsePointer ? 0.82 : 0.9,
      lerp: isCoarsePointer ? 0.06 : 0.09,
    });

    const onAnchor = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id) as HTMLElement | null;
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -88, duration: isCoarsePointer ? 1.45 : 1.2 });
    };
    document.addEventListener("click", onAnchor);

    let raf = 0;
    const onFrame = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(onFrame);
    };
    raf = requestAnimationFrame(onFrame);

    return () => {
      document.removeEventListener("click", onAnchor);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
