"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    cls: "left-[-14rem] top-[8vh] h-[24rem] w-[24rem]",
    color: "rgba(47,124,255,0.2)",
    duration: 18,
  },
  {
    cls: "right-[-12rem] top-[28vh] h-[22rem] w-[22rem]",
    color: "rgba(139,92,246,0.18)",
    duration: 22,
  },
  {
    cls: "left-[20%] bottom-[-11rem] h-[20rem] w-[20rem]",
    color: "rgba(34,240,255,0.13)",
    duration: 20,
  },
] as const;

export function AuroraOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      {orbs.map((o, i) => (
        <motion.div
          key={o.cls}
          className={`absolute rounded-full blur-3xl ${o.cls}`}
          style={{ background: o.color }}
          animate={{
            x: [0, i % 2 === 0 ? 24 : -24, 0],
            y: [0, i === 1 ? -20 : 18, 0],
            scale: [1, 1.08, 1],
            opacity: [0.55, 0.85, 0.55],
          }}
          transition={{
            duration: o.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
