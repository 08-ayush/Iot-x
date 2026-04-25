"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact, site, social } from "@/content/site";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const input =
  "w-full rounded-xl border border-white/10 bg-void/40 px-3 py-2.5 text-sm text-snow placeholder:text-snow/25 outline-none transition " +
  "focus:border-cyan/40 focus:shadow-[0_0_20px_2px_rgba(34,240,255,0.12)]";

export function ContactSection() {
  const [s, setS] = useState<"idle" | "ok">("idle");
  return (
    <section id="contact" className="relative z-10 border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-300/80">{contact.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-snow sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-3 text-snow/55 text-base sm:text-lg">{contact.subtitle}</p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <GlassCard className="p-5 sm:p-6">
              <h3 className="font-display text-lg font-semibold text-snow">Contact information</h3>
              <div className="mt-4 space-y-3 text-sm text-snow/70">
                <p>
                  <span className="text-snow/40">Phone · </span>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-cyan/90 hover:text-cyan">
                    {contact.phone}
                  </a>
                </p>
                <p>
                  <span className="text-snow/40">Email · </span>
                  <a href={`mailto:${contact.email}`} className="text-cyan/90 hover:text-cyan">
                    {contact.email}
                  </a>
                </p>
                <p>
                  <span className="text-snow/40">Also · </span>
                  <a
                    href={`mailto:${contact.emailAlternate}`}
                    className="text-snow/60 hover:text-cyan/90"
                  >
                    {contact.emailAlternate}
                  </a>
                </p>
                <div className="pt-2">
                  <p className="text-snow/40 text-xs font-mono uppercase tracking-wider">Head office</p>
                  <p className="mt-1 leading-relaxed">{contact.addressHead}</p>
                </div>
                <div>
                  <p className="text-snow/40 text-xs font-mono uppercase tracking-wider">Branch</p>
                  <p className="mt-1 leading-relaxed">{contact.addressBranch}</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-snow/40">Connect</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {social.map((c) => (
                  <a
                    key={c.name}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-snow/60 transition hover:border-cyan/30 hover:text-snow"
                  >
                    {c.name}
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-7">
            {s === "ok" ? (
              <motion.p
                className="mb-4 text-sm text-cyan/90"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you. We will reply with a clear next step—typically within two business days.
              </motion.p>
            ) : null}

            <GlassCard className="p-5 sm:p-6">
              <h3 className="font-display text-lg font-semibold text-snow">Send us a message</h3>
              <form
                className="mt-4 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setS("ok");
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs text-snow/40" htmlFor="name">
                      Full name *
                    </label>
                    <input
                      className={input}
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-snow/40" htmlFor="email">
                      Email *
                    </label>
                    <input
                      className={input}
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-xs text-snow/40" htmlFor="company">
                    Organization
                  </label>
                  <input
                    className={input}
                    id="company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-snow/40" htmlFor="service">
                    What CX services are you interested in?
                  </label>
                  <select
                    className={cn(input, "text-snow/90")}
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {contact.serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs text-snow/40" htmlFor="msg">
                    Message *
                  </label>
                  <textarea
                    className={cn(input, "min-h-28 resize-y")}
                    id="msg"
                    name="message"
                    required
                    placeholder="How can we help transform your customer experience?"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <MagneticButton type="submit">Send message</MagneticButton>
                  <p className="text-xs text-snow/35">* {contact.formNote}</p>
                </div>
                <p className="text-xs text-snow/30">
                  Demo form—wire your endpoint or form provider in production. Official site:{" "}
                  <Link href="https://www.iot-x.io" className="text-cyan/70 hover:text-cyan" target="_blank" rel="noreferrer">
                    iot-x.io
                  </Link>
                </p>
              </form>
            </GlassCard>
            <div className="mt-8 space-y-4">
              <p className="text-xs text-snow/40">
                <Link
                  href={contact.map.osmViewLink}
                  className="text-cyan/80 transition hover:text-cyan"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open map on OpenStreetMap
                </Link>
                <span className="text-snow/30"> · </span>
                <Link
                  href="https://www.google.com/maps/search/Mall+of+Jaipur+Vaishali+Nagar+Jaipur"
                  className="text-cyan/80 transition hover:text-cyan"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Maps
                </Link>
              </p>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-void/40 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.55)]">
                <div className="relative h-[min(22rem,55vh)] min-h-[240px] w-full sm:h-[20rem]">
                  <iframe
                    title="Jaipur, India – delivery hub (OpenStreetMap)"
                    className="absolute inset-0 h-full w-full border-0"
                    src={contact.map.osmEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void/95 via-void/50 to-transparent"
                    aria-hidden
                  />
                  <p className="absolute bottom-3 left-3 right-3 max-w-lg text-left text-sm font-medium leading-snug text-snow drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:bottom-4 sm:left-4">
                    {contact.map.deliveryHubLabel}
                  </p>
                </div>
              </div>

              <p className="text-[11px] leading-relaxed text-snow/35">
                ©{" "}
                <a
                  href="https://www.openstreetmap.org/copyright"
                  className="text-snow/45 underline-offset-2 hover:text-cyan/80"
                  target="_blank"
                  rel="noreferrer"
                >
                  OpenStreetMap
                </a>{" "}
                contributors – map data is available under the{" "}
                <a
                  href="https://opendatacommons.org/licenses/odbl/"
                  className="text-snow/45 hover:text-cyan/80"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Database License
                </a>
                .
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-void/50"
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan/90" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 21s7-4.5 7-10a7 7 0 0 0-14 0c0 5.5 7 10 7 10Z" />
                      <circle cx="12" cy="11" r="2" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-snow/70">{contact.map.hubDescription}</p>
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan/25 hover:bg-white/[0.05] sm:p-5"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-void/50"
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-snow/80" fill="none" stroke="currentColor" strokeWidth="1.3">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-mono text-snow/40">Email</p>
                    <p className="text-sm font-medium text-cyan/90">{contact.email}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <GlassCard className="mt-10 flex flex-col items-start justify-between gap-4 p-4 sm:flex-row sm:items-center sm:gap-0 sm:px-6 sm:py-4">
          <p className="text-sm text-snow/60">
            Prefer email? <span className="text-snow/90">Reach the team at {contact.email}</span> with your Oracle CX context.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="shrink-0 text-sm text-cyan/80 hover:text-cyan"
          >
            {contact.email}
          </a>
        </GlassCard>
        <p className="mt-4 text-center text-xs text-snow/30">
          {site.name} — {site.shortTagline}
        </p>
      </div>
    </section>
  );
}
