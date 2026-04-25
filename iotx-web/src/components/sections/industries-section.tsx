"use client";

import { motion } from "framer-motion";
import { industries, industriesSection } from "@/content/site";
import { GlassCard } from "@/components/ui/glass-card";

function MiniChart() {
  const h = [32, 48, 40, 64, 52, 70, 44, 80];
  return (
    <div className="flex h-20 items-end gap-1" aria-hidden>
      {h.map((v, i) => (
        <motion.div
          key={i}
          className="w-1.5 rounded-t-sm bg-gradient-to-t from-electric/20 to-cyan/80"
          initial={{ height: 0 }}
          whileInView={{ height: `${v}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.04 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}

function Sparkline({ uid }: { uid: string }) {
  const gid = `g-${uid}`;
  return (
    <svg viewBox="0 0 120 40" className="h-10 w-full" aria-hidden>
      <path
        d="M0 32 C 20 10, 40 24, 60 16 S 100 4, 120 8"
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#22f0ff" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#2f7cff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Panel({ id, name, stat, hint }: (typeof industries)[number]) {
  return (
    <GlassCard className="group relative flex h-full min-h-[220px] flex-col overflow-hidden p-4 sm:p-5">
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-0 blur-2xl transition group-hover:opacity-100"
        style={{
          background: "radial-gradient(closest-side, rgba(34,240,255,0.15), transparent)",
        }}
      />
      <div className="mb-2 flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan/70">/{id}</p>
        <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px] shadow-cyan/60" />
      </div>
      <h3 className="font-display text-lg font-semibold text-snow">{name}</h3>
      <p className="mt-1 text-xs text-electric/90">{stat}</p>
      <p className="mt-1 text-sm text-snow/55">{hint}</p>
      <div className="mt-4 grow rounded-lg border border-white/5 bg-void/30 p-2">
        {id === "retail" || id === "tel" ? <MiniChart /> : <Sparkline uid={id} />}
        {id === "retail" || id === "tel" ? null : (
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full w-[64%] rounded-full bg-gradient-to-r from-cyan/40 to-electric/60"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        )}
      </div>
    </GlassCard>
  );
}

export function IndustriesSection() {
  return (
    <section id="industries" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan/80">{industriesSection.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-snow sm:text-4xl">
            {industriesSection.title}
          </h2>
          <p className="mt-3 text-snow/55">{industriesSection.lead}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((b) => (
            <Panel key={b.id} {...b} />
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-snow/50">{industriesSection.closing}</p>
      </div>
    </section>
  );
}
