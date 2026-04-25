"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const spring = { stiffness: 300, damping: 22, mass: 0.3 };

type MagneticButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragStart" | "onDragEnd"
> & {
  variant?: "primary" | "ghost" | "outline";
};

export function MagneticButton({
  className,
  children,
  variant = "primary",
  onMouseMove,
  onMouseLeave,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const [glow, setGlow] = useState(false);

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-7 text-sm font-medium tracking-tight",
        "transition-shadow duration-300 will-change-transform",
        variant === "primary" && [
          "text-void",
          "bg-gradient-to-b from-cyan/90 to-electric",
          "shadow-[0_0_32px_2px] shadow-cyan/20",
        ],
        variant === "ghost" && [
          "text-snow/90",
          "glass",
          "hover:shadow-[0_0_40px_rgba(47,124,255,0.25)]",
        ],
        variant === "outline" && [
          "text-snow/90",
          "border border-cyan/25",
          "bg-void/40",
          "hover:border-cyan/50",
        ],
        className
      )}
      onMouseMove={(e) => {
        onMouseMove?.(e);
        if (!ref.current) return;
        setGlow(true);
        const b = ref.current.getBoundingClientRect();
        const mx = (e.clientX - (b.left + b.width / 2)) * 0.1;
        const my = (e.clientY - (b.top + b.height / 2)) * 0.1;
        x.set(mx);
        y.set(my);
      }}
      onMouseLeave={(e) => {
        onMouseLeave?.(e);
        setGlow(false);
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
      {...rest}
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-0 z-0 transition-opacity",
          variant === "primary" && (glow ? "opacity-100" : "opacity-30"),
          variant === "primary" && "bg-[radial-gradient(100px_circle_at_50%_-20%,#fff,transparent_55%)]"
        )}
        aria-hidden
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
