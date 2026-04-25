import type { HeroFeatureCard } from "@/content/site";

type IconId = HeroFeatureCard["icon"];

const stroke = "stroke-cyan/90";

export function ServiceIcon({ id, className = "h-8 w-8" }: { id: IconId; className?: string }) {
  if (id === "cloud")
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" strokeWidth="1.2" aria-hidden>
        <path
          className={stroke}
          d="M8 20a5 5 0 0 1 .2-9.2 6 6 0 0 1 11.1 1.1A4.5 4.5 0 0 1 24 20H8Z"
        />
        <path className={stroke} d="M6 20h20" opacity="0.3" />
        <circle className={stroke} cx="20" cy="10" r="1.2" fill="currentColor" />
        <path className={stroke} d="M12 14h4M20 12h2" opacity="0.5" />
      </svg>
    );
  if (id === "bolt")
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" strokeWidth="1.3" aria-hidden>
        <path
          className={stroke}
          d="M18 3 9 16h6l-3 13 10-16h-6l2-10Z"
          fill="none"
        />
        <path className={stroke} d="M9 20h4M20 8h2" opacity="0.4" />
      </svg>
    );
  if (id === "user")
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" strokeWidth="1.2" aria-hidden>
        <circle className={stroke} cx="16" cy="11" r="4" />
        <path
          className={stroke}
          d="M6 28c0-4.4 4-7 10-7s10 2.6 10 7"
        />
      </svg>
    );
  if (id === "bars")
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" strokeWidth="1.2" aria-hidden>
        <rect x="5" y="16" className={stroke} width="5" height="10" rx="1" fill="color-mix(in srgb, currentColor 12%, transparent)" />
        <rect x="13" y="10" className={stroke} width="5" height="16" rx="1" fill="color-mix(in srgb, currentColor 12%, transparent)" />
        <rect x="21" y="6" className={stroke} width="5" height="20" rx="1" fill="color-mix(in srgb, currentColor 12%, transparent)" />
      </svg>
    );
  /* boltWide – accent card */
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" strokeWidth="1.3" aria-hidden>
      <path
        className="stroke-[color:var(--spark,#f59e0b)]"
        d="M19 2 8 18h6l-4 12 12-16h-5l2-12Z"
      />
      <path className={stroke} d="M4 26h4" opacity="0.4" />
    </svg>
  );
}
