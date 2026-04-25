"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { services, servicesSection } from "@/content/site";
import { GlassCard } from "@/components/ui/glass-card";
import { ServiceIcon } from "@/components/ui/service-icon";

function TiltCard({
  s,
  index,
}: {
  s: (typeof services)[number];
  index: number;
}) {
  const r = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [9, -9]), { mass: 0.4, stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-11, 11]), { mass: 0.4, stiffness: 180, damping: 18 });

  return (
    <div
      ref={r}
      className={`group h-full [perspective:1000px] ${"fullWidth" in s && s.fullWidth ? "sm:col-span-2 xl:col-span-4" : ""}`}
      onMouseMove={(e) => {
        if (!r.current) return;
        const b = r.current.getBoundingClientRect();
        mx.set((e.clientX - b.left) / b.width);
        my.set((e.clientY - b.top) / b.height);
      }}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      <motion.div
        className="h-full [transform-style:preserve-3d]"
        style={{ rotateX: rx, rotateY: ry }}
      >
        <GlassCard
          className="relative h-full p-5 sm:p-6"
          style={{ boxShadow: "0 24px 50px -12px rgba(47, 124, 255, 0.12)" }}
        >
          <div
            className="pointer-events-none absolute inset-px -z-10 rounded-[0.9rem] opacity-0 blur-xl transition group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(200px at 20% 0%, rgba(34,240,255,0.2), transparent 50%)",
            }}
          />
          <motion.div
            className="mb-4 inline-flex rounded-xl border border-white/5 bg-void/40 p-2"
            animate={{ rotate: [0, 3, -2, 0] }}
            transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
          >
            <ServiceIcon id={s.icon} />
          </motion.div>
          <h3 className="font-display text-lg font-semibold text-snow">{s.title}</h3>
          <p className="mt-2 text-sm text-snow/55">{s.desc}</p>
          <div className="mt-4 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-cyan/0 via-cyan/40 to-cyan/0 transition group-hover:scale-x-100" />
        </GlassCard>
      </motion.div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative z-10 border-y border-white/5 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute right-0 top-1/4 h-72 w-72 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(closest-side, #8b5cf6, transparent)" }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan/80">{servicesSection.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-snow sm:text-4xl">
            {servicesSection.title}
          </h2>
          <p className="mt-3 text-snow/55">{servicesSection.lead}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {services.map((s, i) => (
            <TiltCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
