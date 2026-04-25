"use client";

import Link from "next/link";
import { site, social, footer, contact } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-void/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <p className="font-display text-2xl font-bold tracking-tight text-snow">
              {site.name}
            </p>
            <p className="mt-2 text-sm text-snow/50 leading-relaxed max-w-sm">{footer.longDescription}</p>
            <p className="mt-4 text-xs text-snow/30">
              © {new Date().getFullYear()} IOTX. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-snow/40 uppercase tracking-wider">Services</p>
            <ul className="mt-3 space-y-1.5">
              {footer.servicesLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-snow/55 transition hover:text-cyan/90">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono text-snow/40 uppercase tracking-wider">Company</p>
            <ul className="mt-3 space-y-1.5">
              {footer.companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-snow/55 transition hover:text-cyan/90">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-mono text-snow/40 uppercase tracking-wider">Contact</p>
            <p className="mt-2 text-sm text-snow/60">
              <a href="tel:+918800133159" className="hover:text-cyan/90">
                +91 8800133159
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href={`mailto:${contact.email}`} className="text-cyan/80 hover:text-cyan">
                {contact.email}
              </a>
            </p>
            <p className="mt-1 text-xs text-snow/35">
              <a href={`mailto:${contact.emailAlternate}`} className="hover:text-snow/55">
                {contact.emailAlternate}
              </a>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {social.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-white/10 bg-white/5 p-1.5 text-snow/50 text-xs transition hover:border-cyan/25 hover:text-snow"
                >
                  {c.name === "LinkedIn" ? "in" : c.name === "X" ? "𝕏" : "○"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
