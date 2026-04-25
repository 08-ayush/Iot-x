"use client";

import { motion } from "framer-motion";
import { about, timeline } from "@/content/site";
import { GlassCard } from "@/components/ui/glass-card";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.5 } }),
};

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan/80">{about.label}</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-snow sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-4 text-base text-snow/60">{about.body}</p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-snow/65">{about.missionCard}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan/30 via-cyan/10 to-transparent" />
              <p className="mt-4 text-xs text-snow/40">{about.footerNote}</p>
            </GlassCard>
          </motion.div>

          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 lg:col-span-7 lg:mx-0 lg:px-0">
            {timeline.map((m, i) => (
              <motion.div
                key={m.year + m.label}
                custom={i}
                initial="hidden"
                whileInView="show"
                variants={item}
                viewport={{ once: true, amount: 0.3 }}
                className="w-[78vw] shrink-0 snap-center sm:w-64 md:w-72"
              >
                <GlassCard className="h-full p-4">
                  <p className="font-mono text-xs text-cyan/80">{m.year}</p>
                  <p className="mt-1 text-sm font-semibold text-snow">{m.label}</p>
                  <p className="mt-1 text-xs text-snow/55">{m.text}</p>
                  <div
                    className="mt-4 h-0.5 w-full rounded bg-gradient-to-r from-electric/30 to-cyan/10"
                    style={{ opacity: 0.2 + (i + 1) * 0.1 }}
                  />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
