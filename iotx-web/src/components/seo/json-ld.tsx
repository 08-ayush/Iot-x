import { site } from "@/content/site";

const data = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: "https://www.iot-x.io",
  description: site.tagline,
} as const;

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
