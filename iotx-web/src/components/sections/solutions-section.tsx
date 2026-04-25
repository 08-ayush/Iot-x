"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { products, solutionsSection } from "@/content/site";
import { GlassCard } from "@/components/ui/glass-card";

function SolutionPanel({ p, i }: { p: (typeof products)[number]; i: number }) {
  const r = useRef<HTMLDivElement>(null);
  const inV = useInView(r, { amount: 0.45, once: false });

  return (
    <motion.div
      ref={r}
      className="min-w-0 snap-center [flex:0_0_86vw] sm:[flex:0_0_28rem] lg:[flex:0_0_32rem] max-w-md"
    >
      <GlassCard
        className="relative h-full p-5 sm:p-6"
        style={{ transform: "translateZ(0)" }}
      >
        <motion.div
          className="h-full w-full"
          initial={false}
          animate={{ scale: inV ? 1 : 0.95, opacity: inV ? 1 : 0.55 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {p.badge ? (
            <p className="mb-1 inline-flex items-center gap-1 rounded-md border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[9px] font-mono font-medium uppercase tracking-wider text-amber-200/90">
              {p.badge}
            </p>
          ) : null}
          <p className="text-[10px] font-mono text-cyan/80">0{i + 1} — OFFER & APPROACH</p>
          <h3 className="mt-1 font-display text-2xl font-bold text-snow sm:text-3xl">{p.name}</h3>
          <p className="mt-2 text-sm text-snow/60">{p.oneLiner}</p>
          {p.bullets ? (
            <ul className="mt-3 space-y-1.5 text-sm text-snow/70">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-cyan/70" aria-hidden>
                    →
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/5 bg-gradient-to-b from-void/80 to-navy/60">
            <div className="h-full w-full p-3">
              <div className="h-1 w-1/2 rounded bg-white/5" />
              <div className="mt-2 h-1 w-1/3 rounded bg-white/5" />
              <div className="mt-2 flex h-[calc(100%-3rem)] items-end gap-0.5">
                {Array.from({ length: 12 }, (_, n) => (
                  <div
                    key={n}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan/10 to-cyan/40"
                    style={{ height: `${20 + (n * 5) % 60}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-2 flex justify-end">
            <div className="glow-line h-px w-1/2 opacity-60" />
          </div>
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative z-10 border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan/80">{solutionsSection.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-snow sm:text-4xl">
            {solutionsSection.title}
          </h2>
          <p className="mt-3 text-snow/55">{solutionsSection.lead}</p>
        </div>
        <p className="mb-2 text-right text-xs text-snow/35 sm:hidden" aria-hidden>
          Swipe →
        </p>
      </div>
      <div
        className="no-scrollbar flex w-full snap-x snap-mandatory gap-5 overflow-x-auto py-1 pl-4 [scrollbar-width:none] sm:pl-6 lg:pl-8 2xl:pl-[max(1rem,calc(50vw-40rem+1rem))] pr-4 2xl:pr-[max(1rem,calc(50vw-40rem+1rem))]"
        style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
        tabIndex={0}
        role="region"
        aria-label="IOTX solutions, horizontal"
      >
        {products.map((p, i) => (
          <SolutionPanel key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
