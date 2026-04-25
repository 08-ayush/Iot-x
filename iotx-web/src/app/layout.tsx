import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import { SiteProviders } from "@/components/providers/site-providers";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const base = "https://www.iot-x.io";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: "IOTX — Oracle CX consulting & implementation",
    template: "%s · IOTX",
  },
  description: site.tagline,
  keywords: [
    "IOTX",
    "Oracle CX",
    "Oracle Service Cloud",
    "Oracle Field Service",
    "OIC",
    "Oracle Integration Cloud",
    "ODA",
    "Oracle Digital Assistant",
    "OIA",
    "Oracle Intelligent Advisor",
    "Fusion Sales & Service",
    "GenAI",
    "customer experience",
    "implementation",
  ],
  openGraph: {
    title: "IOTX — Oracle CX consulting & implementation",
    description: site.tagline,
    url: base,
    siteName: "IOTX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IOTX — Oracle CX consulting & implementation",
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#020204",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${geist.variable} ${geistMono.variable} ${syne.variable}`}
    >
      <body className="font-body min-h-full overflow-x-hidden bg-void text-snow">
        <JsonLd />
        <SiteProviders>{children}</SiteProviders>
      </body>
    </html>
  );
}
