"use client";

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

export function SectionReveal({ children, amount = 0.12 }: Props) {
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
