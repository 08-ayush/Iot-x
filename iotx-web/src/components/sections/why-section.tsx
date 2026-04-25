"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { metrics, whySection } from "@/content/site";
import { GlassCard } from "@/components/ui/glass-card";

function Stat({
  m,
  index,
}: {
  m: (typeof metrics)[number];
  index: number;
}) {
  const [v, setV] = useState(0);
  const r = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (!r.current) return;
    const obs = new IntersectionObserver(
      (e) => {
        e.forEach((en) => {
          if (en.isIntersecting && !done.current) {
            done.current = true;
            const obj = { n: 0 };
            gsap.to(obj, {
              n: m.value,
              duration: 1.5,
              ease: "power2.out",
              onUpdate: () => setV(Math.round(obj.n)),
            });
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(r.current);
    return () => obs.disconnect();
  }, [m.value]);

  return (
    <GlassCard ref={r} className="p-5 sm:p-6">
      <p className="text-[10px] font-mono text-cyan/80">0{index + 1}</p>
      <p className="mt-1 font-display text-4xl font-bold tracking-[-0.04em] text-snow sm:text-5xl">
        <span className="text-cyan/90">{m.prefix ?? ""}</span>
        {v}
        <span className="text-electric/90">{m.suffix}</span>
      </p>
      <p className="mt-2 text-sm text-snow/55">{m.label}</p>
    </GlassCard>
  );
}

function MapBlock() {
  const regions = [
    { k: "NA", label: "North America" },
    { k: "UAE", label: "UAE" },
    { k: "SG", label: "Singapore" },
    { k: "IN", label: "India" },
  ];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-void/40 p-2">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label="delivery regions" role="img">
        {regions.map((r, i) => (
          <div key={r.k} className="relative h-20 rounded-lg border border-white/5 p-1.5 sm:h-24">
            <p className="text-[9px] font-mono text-snow/45">{r.label}</p>
            <div className="mt-1 flex h-[calc(100%-1.25rem)] items-end">
              {Array.from({ length: 4 }, (_, j) => (
                <motion.div
                  key={j}
                  className="mx-px flex-1 rounded-t-sm bg-gradient-to-t from-cyan/5 to-cyan/40"
                  style={{ height: `${30 + (i * j) % 60}%` }}
                  initial={{ scaleY: 0, originY: 1 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * j, duration: 0.4 }}
                />
              ))}
            </div>
            <motion.div
              className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px] shadow-cyan/50"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function WhySection() {
  return (
    <section id="why" className="relative z-10 border-y border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan/80">{whySection.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-snow sm:text-4xl">
            {whySection.title}
          </h2>
          <p className="mt-3 text-snow/55">{whySection.lead}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {metrics.map((m, i) => (
              <Stat key={m.label} m={m} index={i} />
            ))}
          </div>
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-2 font-mono text-[10px] uppercase text-snow/40">Delivery footprint</p>
            <MapBlock />
            <p className="mt-2 text-center text-xs text-snow/40 sm:text-left">{whySection.mapCaption}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
