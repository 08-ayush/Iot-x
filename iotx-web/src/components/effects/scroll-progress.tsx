"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.22,
  });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-cyan via-electric to-aurora shadow-[0_0_18px_rgba(34,240,255,0.55)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
