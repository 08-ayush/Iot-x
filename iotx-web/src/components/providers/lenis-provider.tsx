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
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const useNativeScroll = isCoarsePointer || reduceMotion;

    const onAnchorNative = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id) as HTMLElement | null;
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (useNativeScroll) {
      document.addEventListener("click", onAnchorNative);
      return () => {
        document.removeEventListener("click", onAnchorNative);
      };
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.85,
      lerp: 0.08,
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
      lenis.scrollTo(el, { offset: -88, duration: 1.05 });
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
