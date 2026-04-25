"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  amount?: number;
};

const reveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function getIsLowMotion() {
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(hover: none)").matches
  );
}

function subscribeLowMotion(cb: () => void) {
  const m1 = window.matchMedia("(prefers-reduced-motion: reduce)");
  const m2 = window.matchMedia("(pointer: coarse)");
  const m3 = window.matchMedia("(hover: none)");
  m1.addEventListener("change", cb);
  m2.addEventListener("change", cb);
  m3.addEventListener("change", cb);
  return () => {
    m1.removeEventListener("change", cb);
    m2.removeEventListener("change", cb);
    m3.removeEventListener("change", cb);
  };
}

export function SectionReveal({ children, amount = 0.12 }: Props) {
  const disableReveal = useSyncExternalStore(subscribeLowMotion, getIsLowMotion, () => true);

  if (disableReveal) {
    return <div className="section-spotlight">{children}</div>;
  }

  return (
    <motion.div
      className="section-spotlight"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
