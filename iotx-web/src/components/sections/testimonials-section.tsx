"use client";

import { motion } from "framer-motion";
import { testimonials, companyLogos, testimonialsSection } from "@/content/site";
import { GlassCard } from "@/components/ui/glass-card";

export function TestimonialsSection() {
  return (
    <section className="relative z-10 py-24 sm:py-32" aria-label="Testimonials and partners" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan/80">{testimonialsSection.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-snow sm:text-4xl">
            {testimonialsSection.title}
          </h2>
          <p className="mt-3 text-snow/55">{testimonialsSection.lead}</p>
        </div>
        <div className="mb-6 overflow-hidden rounded-2xl">
          <motion.div
            className="flex gap-4 will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 32, repeat: Infinity }}
            aria-hidden
          >
            {testimonials.concat(testimonials).map((t, i) => (
              <GlassCard key={i} className="w-[min(100%,26rem)] shrink-0 p-4 sm:w-[28rem] sm:p-5">
                <p className="text-sm leading-relaxed text-snow/80">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-3 text-xs text-snow/40">
                  {t.name} · {t.org}
                </p>
                <div className="glow-line mt-4 h-px w-full" />
                <p className="mt-2 text-[10px] text-snow/30">
                  Illustrative of themes from similar Oracle CX engagements. Names and accounts withheld where required.
                </p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
        <div className="mb-1 font-mono text-[10px] text-snow/30">FOCUS SECTORS</div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-snow/35 sm:justify-center">
          {companyLogos.map((n) => (
            <div key={n} className="px-1">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
