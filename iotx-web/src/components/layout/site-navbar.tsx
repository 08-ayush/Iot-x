"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { site, navLinks, solutionsMenu, navActions } from "@/content/site";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-void/55 py-2 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent py-4"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="group flex items-center gap-2"
          onClick={() => {
            setOpen(false);
            setMenu(false);
          }}
        >
          <motion.span
            className="font-display text-lg font-bold tracking-tight"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient anim-shimmer bg-clip-text">{site.name}</span>
          </motion.span>
          <span
            className="hidden h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_12px] shadow-amber-500/60 sm:inline"
            aria-hidden
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex max-w-[min(100%,52rem)] 2xl:max-w-none">
          {navLinks.map((l) => (
            <div key={l.href} className="relative">
              {l.hasDropdown ? (
                <button
                  type="button"
                  className="group relative rounded-lg px-2.5 py-2 text-sm text-snow/70 transition hover:text-snow"
                  onMouseEnter={() => setMenu(true)}
                  onMouseLeave={() => setMenu(false)}
                >
                  <span className="relative z-10">{l.label}</span>
                  <span
                    className="absolute inset-x-2 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-cyan/0 via-cyan to-electric/0 transition group-hover:scale-x-100"
                    aria-hidden
                  />
                </button>
              ) : (
                <Link
                  href={l.href}
                  className="group relative rounded-lg px-2.5 py-2 text-sm text-snow/70 transition hover:text-snow"
                >
                  <span className="relative z-10">{l.label}</span>
                  <span
                    className="absolute inset-x-2 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-cyan/0 via-cyan to-electric/0 transition group-hover:scale-x-100"
                    aria-hidden
                  />
                </Link>
              )}

              <AnimatePresence>
                {l.hasDropdown && menu && (
                  <motion.div
                    className="absolute left-0 top-full z-40 w-[22rem] pt-3"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setMenu(true)}
                    onMouseLeave={() => setMenu(false)}
                  >
                    <div className="glass-strong space-y-3 overflow-hidden rounded-2xl p-2">
                      {solutionsMenu.map((s) => (
                        <Link
                          key={s.title}
                          href="#services"
                          onClick={() => setMenu(false)}
                          className="block rounded-xl px-3 py-2.5 text-left transition hover:bg-white/[0.04]"
                        >
                          <p className="text-sm font-medium text-snow">{s.title}</p>
                          <p className="text-xs text-snow/55">{s.blurb}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="#contact"
            className="block"
          >
            <MagneticButton type="button" className="h-11 px-5 text-sm font-semibold">
              {navActions.cta}
            </MagneticButton>
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-snow lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="relative h-5 w-5">
            <span
              className={cn(
                "absolute left-0 top-1.5 block h-0.5 w-5 bg-snow/90 transition-transform duration-200",
                open && "left-0 top-1/2 w-5 -translate-y-1/2 rotate-45"
              )}
              aria-hidden
            />
            <span
              className={cn(
                "absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-snow/90 transition duration-200",
                open && "scale-x-0 opacity-0"
              )}
              aria-hidden
            />
            <span
              className={cn(
                "absolute left-0 bottom-1.5 block h-0.5 w-5 bg-snow/90 transition-transform duration-200",
                open && "left-0 top-1/2 w-5 -translate-y-1/2 -rotate-45"
              )}
              aria-hidden
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mnav"
            className="border-b border-white/5 bg-void/95 px-4 pb-6 pt-2 backdrop-blur-2xl lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mt-2 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-2 py-3 text-sm text-snow/80"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2"
              >
                <MagneticButton className="w-full">{navActions.mobileCta}</MagneticButton>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
