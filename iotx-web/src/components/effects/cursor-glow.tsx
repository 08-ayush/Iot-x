"use client";

import { useEffect, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useSpring, useMotionValue } from "framer-motion";

function getReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribePrefersReduced(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribePrefersReduced,
    getReduced,
    () => true
  );
}

export function CursorGlow() {
  const reduce = usePrefersReducedMotion();
  const on = !reduce;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (!on) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y, on]);

  return (
    <AnimatePresence>
      {on ? (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[1] h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 mix-blend-screen will-change-transform"
          style={{ x: sx, y: sy }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in srgb, #2f7cff 35%, transparent), color-mix(in srgb, #8b5cf6 18%, transparent) 40%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
