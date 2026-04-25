"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { hero, heroFeatureCards, site } from "@/content/site";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GlassCard } from "@/components/ui/glass-card";
import { ServiceIcon } from "@/components/ui/service-icon";
import Link from "next/link";

const HeroCanvas = dynamic(
  () => import("@/components/3d/hero-scene").then((m) => m.HeroCanvas),
  { ssr: false, loading: () => <div className="h-full w-full bg-gradient-to-b from-electric/5 to-transparent" /> }
);

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.2 + i * 0.06, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const line1 = hero.titleLine1.split(" ");

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isPhoneLike, setIsPhoneLike] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const o = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsPhoneLike(mq.matches || window.matchMedia("(hover: none)").matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative z-10 flex min-h-[100dvh] flex-col justify-end overflow-hidden pb-16 pt-32 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -left-1/4 top-0 h-[60%] w-[60%] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in srgb, #2f7cff 40%, transparent), transparent 70%)",
          }}
        />
        <div
          className="absolute -right-1/4 top-1/3 h-1/2 w-1/2 opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in srgb, #8b5cf6 35%, transparent), transparent 70%)",
          }}
        />
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-void to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="order-2 flex flex-col gap-6 lg:order-1 lg:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-snow/50"
          >
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            className="font-display text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-snow sm:text-5xl xl:text-6xl 2xl:text-7xl"
            style={{ y: y1, opacity: o }}
          >
            <span className="block">
              {line1.map((w, i) => (
                <motion.span
                  key={w + i}
                  className="mr-[0.25em] inline-block will-change-transform"
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={wordVariants}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <motion.span
              className="mt-1 block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-orange-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              {hero.titleGradient}
            </motion.span>
          </motion.h1>

          <div className="space-y-4 text-base text-snow/60 sm:text-[1.02rem]">
            <div>
              <p className="text-sm font-semibold text-snow/90">{hero.problemTitle}</p>
              <p className="mt-2 leading-relaxed">{hero.problemLead}</p>
              <p className="mt-2 leading-relaxed">{hero.problemSolution}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-snow/90">{hero.audienceTitle}</p>
              <p className="mt-2 leading-relaxed">{hero.audienceBody}</p>
            </div>
          </div>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <Link href="#contact">
              <MagneticButton>{hero.ctaPrimary}</MagneticButton>
            </Link>
            <Link href="#services">
              <MagneticButton variant="outline" className="h-12">
                {hero.ctaSecondary}
              </MagneticButton>
            </Link>
          </motion.div>

          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {hero.valueChecks.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-snow/60">
                <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-emerald-500/40 text-[10px] text-emerald-400">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
          <p className="text-xs text-snow/40">{site.shortTagline}</p>
        </div>

        <div className="order-1 relative min-h-[320px] lg:order-2 lg:col-span-6 lg:min-h-[480px]">
          {!isPhoneLike ? (
            <div className="absolute inset-0 -z-10 opacity-[0.35] sm:opacity-50">
              <HeroCanvas className="h-full w-full" />
            </div>
          ) : null}
          <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {heroFeatureCards.map((c, index) => (
              <motion.div
                key={c.title}
                className={c.wide ? "sm:col-span-2" : ""}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard className="h-full p-4 sm:p-5">
                  <div className="mb-3 inline-flex rounded-xl border border-white/5 bg-void/40 p-2">
                    <ServiceIcon id={c.icon} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-snow sm:text-base">{c.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-snow/55 sm:text-sm">{c.desc}</p>
                  {c.wide ? (
                    <Link
                      href="#solutions"
                      className="mt-3 inline-block text-xs font-medium text-orange-300/90 transition hover:text-orange-200"
                    >
                      Learn more →
                    </Link>
                  ) : null}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center sm:mt-0">
        <button
          type="button"
          onClick={() =>
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="group flex flex-col items-center gap-2"
          aria-label="Scroll to our approach"
        >
          <span className="h-7 w-px translate-y-0.5 overflow-hidden bg-gradient-to-b from-cyan/0 via-cyan/80 to-electric/0">
            <motion.span
              className="block h-3 w-px translate-y-0 bg-cyan"
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </button>
      </div>
    </section>
  );
}
