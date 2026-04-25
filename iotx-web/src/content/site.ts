/**
 * IOTX — content aligned with public positioning at https://www.iot-x.io/
 * (Oracle CX consulting, implementation, advisory, and accelerators)
 */

export const site = {
  name: "IOTX",
  tagline: "Intelligent Oracle CX solutions that create unified journeys, reduce operational friction, and improve customer outcomes end-to-end.",
  shortTagline: "Oracle CX consulting & implementation",
} as const;

export type NavLink = {
  href: string;
  label: string;
  hasDropdown?: boolean;
};

export const navLinks: readonly NavLink[] = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services", hasDropdown: true },
  { href: "#industries", label: "Partners" },
  { href: "#about", label: "Our Approach" },
  { href: "#solutions", label: "Insights" },
  { href: "#contact", label: "Contact" },
] as const;

export const solutionsMenu = [
  {
    title: "Oracle CX Services",
    blurb: "Service Cloud, Field Service, OIC, ODA, OIA, and Fusion—design through run.",
  },
  {
    title: "CX Advisory",
    blurb: "Complimentary 20-hour assessment to diagnose challenges and shape your CX roadmap.",
  },
  {
    title: "Accelerators",
    blurb: "Pre-built templates, integration patterns, and automation toolkits for faster, safer delivery.",
  },
] as const;

export const navActions = {
  cta: "Request Consultation",
  mobileCta: "Request Consultation",
} as const;

export const hero = {
  eyebrow: "ORACLE CX SPECIALISTS",
  titleLine1: "Unified CX Solutions",
  titleGradient: "Powered by Oracle",
  problemTitle: "What problem do we solve?",
  problemLead:
    "Organizations struggle to deliver consistent, efficient, and measurable customer experiences because their service, field, and revenue operations are fragmented across systems, channels, and legacy processes.",
  problemSolution:
    "We solve this by designing and implementing Oracle CX solutions—supported by data, automation, and AI—that create unified journeys, reduce operational friction, and improve customer outcomes end-to-end.",
  audienceTitle: "Who do we serve?",
  audienceBody:
    "We work with mid-market and enterprise organizations that rely on Oracle to run customer service, field operations, sales, and data-driven decision processes.",
  ctaPrimary: "Request Consultation",
  ctaSecondary: "Our Services",
  valueChecks: [
    "30+ Oracle CX & AI Certifications",
    "Offshore-First Delivery Model",
    "Fortune 500 Client Experience",
  ] as const,
} as const;

export type HeroFeatureCard = {
  title: string;
  desc: string;
  icon: "cloud" | "bolt" | "user" | "bars" | "boltWide";
  wide?: boolean;
};

export const heroFeatureCards: readonly HeroFeatureCard[] = [
  {
    title: "Oracle CX Platform",
    desc: "Service Cloud, Field Service, Integration, Digital Assistant, and Fusion implementations",
    icon: "cloud",
  },
  {
    title: "AI & Automation",
    desc: "GenAI-powered email automation, intelligent routing, and decision modeling",
    icon: "bolt",
  },
  {
    title: "CX Advisory",
    desc: "Complimentary 20-hour assessment to diagnose challenges and optimize your CX landscape",
    icon: "user",
  },
  {
    title: "Accelerators",
    desc: "Pre-built templates, migration tools, and integration patterns for faster delivery",
    icon: "bars",
  },
  {
    title: "Free 20-Hour CX Assessment",
    desc: "Diagnose challenges, evaluate platform readiness, and identify improvement opportunities.",
    icon: "boltWide",
    wide: true,
  },
] as const;

export const about = {
  label: "OUR APPROACH",
  title: "How we work",
  body:
    "IOTX was founded by practitioners who have worked together across multiple Oracle CX programs for more than a decade. Their collective background spans Oracle Service Cloud, Field Service, Integration, Intelligent Advisor, and Digital Assistant—delivering complex CX solutions for organizations with demanding operational requirements.",
  missionCard:
    "Through these shared engagements, they saw a clear need for a services partner that combined deep Oracle specialization with disciplined delivery and a modern view of customer experience. We are intentionally compact, with direct ownership, faster decision-making, and transparent communication.",
  footerNote:
    "We measure ourselves by operational improvements, not by the size of implementations or the volume of work performed.",
} as const;

export const timeline = [
  {
    year: "Origin",
    label: "Practitioners, one vision",
    text: "A core team formed around long-running Oracle CX programs—Service Cloud, field, integration, and automation—across global enterprises.",
  },
  {
    year: "Insight",
    label: "A gap in the market",
    text: "Fragmented service, field, and revenue operations needed a partner that could connect Oracle depth with modern CX delivery.",
  },
  {
    year: "Today",
    label: "IOTX",
    text: "A focused services firm helping organizations design and implement Oracle-based experiences that are predictable, measurable, and continuously improving.",
  },
  {
    year: "Model",
    label: "Offshore-first, globally aligned",
    text: "Presence in North America, the United Arab Emirates, and Singapore, with an offshore delivery hub in India (Jaipur) for scale and consistency.",
  },
] as const;

export const servicesSection = {
  eyebrow: "PLATFORM",
  title: "Oracle CX, delivered with precision",
  lead:
    "IOTX specializes in Oracle CX consulting and implementation across Oracle Fusion, OIC, OIA, and ODA. At the center: Field Service, integrated with the broader Oracle stack to improve customer experience and operational efficiency—governed, observable, and built to last after go-live.",
} as const;

export const services = [
  {
    title: "Oracle CX Platform",
    desc: "Service Cloud, Field Service, Integration, Digital Assistant, and Fusion implementations that stay coherent as you scale.",
    icon: "cloud",
  },
  {
    title: "AI & Automation",
    desc: "GenAI email automation, intelligent routing, ODA, and decision modeling to reduce load and improve outcomes.",
    icon: "bolt",
  },
  {
    title: "CX Advisory",
    desc: "Complimentary 20-hour assessment to diagnose challenges, evaluate readiness, and prioritize your roadmap.",
    icon: "user",
  },
  {
    title: "Accelerators",
    desc: "Pre-built templates, migration utilities, and integration patterns that shorten time-to-value.",
    icon: "bars",
  },
  {
    title: "Free 20-Hour CX Assessment",
    desc: "Diagnose challenges, evaluate platform readiness, and identify opportunities—no fluff, concrete next steps.",
    icon: "boltWide",
    fullWidth: true,
  },
] as const;

export const industriesSection = {
  eyebrow: "INDUSTRY EXPERTISE",
  title: "Intelligent experience at enterprise scale",
  lead:
    "IOTX has a track record of successful Oracle CX implementations for demanding organizations across sectors—where pricing, entitlements, and operational reality have to show up in the system.",
  closing:
    "We help clients improve customer experience, accelerate business velocity, and strengthen resilience through disciplined configuration, integration, and analytics—not slide decks that age in a week.",
} as const;

export const industries = [
  {
    id: "bank",
    name: "Banking & Finance",
    stat: "Regulated service models",
    hint: "Consistent service journeys, policy-driven decisions, and auditable processes.",
  },
  {
    id: "ins",
    name: "Insurance",
    stat: "Policy & claims complexity",
    hint: "Eligibility, triage, and advisor workflows with Oracle CX and OIA where it matters.",
  },
  {
    id: "tel",
    name: "Telecom & Media",
    stat: "High volume, many channels",
    hint: "Field execution, self-service, and agent workflows aligned to real SLAs.",
  },
  {
    id: "retail",
    name: "Retail & CPG",
    stat: "Omnichannel operations",
    hint: "Service, field, and order flows that connect customers, inventory, and teams.",
  },
  {
    id: "public",
    name: "Public Sector",
    stat: "Accountability and clarity",
    hint: "CRM and service programs with governance, transparency, and measurable outcomes.",
  },
  {
    id: "b2b",
    name: "B2B Enterprise",
    stat: "Complex relationships",
    hint: "Revenue, service, and field models that reflect how your accounts actually work.",
  },
] as const;

export type SolutionProduct = {
  name: string;
  oneLiner: string;
  badge?: string;
  bullets?: readonly string[];
};

export const products: readonly SolutionProduct[] = [
  {
    badge: "LIMITED TIME OFFER",
    name: "Complimentary 20-Hour CX Advisory Assessment",
    oneLiner:
      "Eligible organizations can access a complimentary 20-hour CX advisory engagement designed to diagnose operational challenges, evaluate platform readiness, and identify opportunities for improvement across the Oracle CX landscape.",
    bullets: [
      "Product/Technology Analysis",
      "Optimization Report",
      "Best Practices Guidance",
      "6-12 Month Roadmap",
    ],
  },
  {
    name: "Intelligent experience",
    oneLiner:
      "The idea of Intelligent Experience guides our approach: simplifying complexity, enabling automation, and improving decision points across the customer journey—whether a routing flow, an integration pattern, a policy model, or an advisory engagement.",
  },
  {
    name: "What defines IOTX",
    oneLiner:
      "A focused Oracle CX team across the full suite, offshore-first delivery with regional presence, a disciplined model built on accelerators and standards, and a philosophy of connected, end-to-end customer experiences.",
  },
] as const;

export const solutionsSection = {
  eyebrow: "INSIGHTS & SOLUTIONS",
  title: "From assessment to run-state",
  lead:
    "Engagements ship with a backbone you can see—roadmaps, patterns, and governance—not a backlog of undifferentiated tasks.",
} as const;

export const whySection = {
  eyebrow: "ADVANTAGE",
  title: "How we are measured",
  lead:
    "We focus on delivery outcomes: certifications, model, and the kind of program experience you expect in executive reviews—clear, defensible, and tied to the work.",
  mapCaption: "North America, UAE, Singapore, and India (Jaipur)—aligned delivery without diffuse teams.",
} as const;

export const metrics: readonly {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}[] = [
  {
    value: 30,
    suffix: "+",
    label: "Oracle CX & AI certifications across the practice",
  },
  {
    value: 20,
    suffix: " hr",
    label: "Complimentary CX advisory assessment for eligible organizations",
  },
  {
    value: 15,
    suffix: "+",
    label: "Years’ combined experience across founding leadership in Oracle CX",
  },
];

export const testimonialsSection = {
  eyebrow: "CLIENT FEEDBACK",
  title: "Testimonials & references",
  lead:
    "Hear the themes we hear in delivery: discipline, clarity, and systems that still make sense a year after go-live.",
} as const;

export const testimonials = [
  {
    quote:
      "They aligned our service and field model to how we actually run operations—not a generic template. The integration patterns were maintainable, not a science project.",
    name: "VP, Service Operations",
    org: "Global enterprise (Fortune 500)",
  },
  {
    quote:
      "IOTX brought Oracle depth without the hand-waving. Our queues, knowledge, and automation finally match our SLAs and channels.",
    name: "Director, IT",
    org: "North America, regulated industry",
  },
  {
    quote:
      "The offshore team was integrated with our stakeholders; we had architectural clarity, steady releases, and fewer surprises in production.",
    name: "Program lead",
    org: "Large-scale Oracle CX program",
  },
] as const;

export const companyLogos = [
  "Sectors: Banking, Insurance, Telecom, Public, B2B",
] as const;

export const contact = {
  title: "Accelerate your Oracle CX transformation",
  subtitle:
    "Partner with our Oracle-certified CX experts to design and implement enterprise-grade customer experience solutions. From field service to intelligent automation, we deliver with Fortune 500 rigor and offshore execution discipline.",
  eyebrow: "GET IN TOUCH",
  formNote: "Required fields",
  addressHead:
    "IOTX Technologies LLP, Office 712, Mall of Jaipur, Vaishali Nagar, Jaipur, Rajasthan, India, Pin 302021",
  addressBranch: "lamonIT FZE, Block B 28-044, Sharjah, United Arab Emirates",
  phone: "+91 8800133159",
  /** Primary inquiries (matches public site map CTA) */
  email: "hello@iot-x.io",
  /** Also accepted */
  emailAlternate: "contact@iot-x.io",
  map: {
    deliveryHubLabel: "Delivery & engineering hub: Jaipur, India",
    hubDescription:
      "Global program alignment with a specialized hub in Jaipur, India. IOTX works with customers across North America, the Middle East, and Europe, with solution engineering centered in India.",
    /** OpenStreetMap embed (Jaipur); bbox + marker */
    osmEmbedSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=75.64%2C26.80%2C75.95%2C27.02&layer=mapnik&marker=26.8854%2C75.7896",
    osmViewLink: "https://www.openstreetmap.org/?mlat=26.8854&mlon=75.7896#map=12/26.8854/75.7896",
  } as const,
  serviceOptions: [
    "Oracle Service Cloud (OSvC)",
    "Oracle Field Service (OFSC)",
    "Oracle Integration Cloud (OIC)",
    "Oracle Digital Assistant (ODA)",
    "Oracle Intelligent Advisor (OIA)",
    "Fusion Sales & Service",
    "CX Advisory / 20-hr assessment",
    "Other / not sure",
  ] as const,
} as const;

export const social = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/iotx" },
  { name: "X", href: "https://x.com" },
  { name: "Instagram", href: "https://www.instagram.com" },
] as const;

export const footer = {
  longDescription:
    "Intelligent Oracle CX solutions that create unified journeys, reduce operational friction, and improve customer outcomes end-to-end.",
  servicesLinks: [
    { label: "Oracle CX Services", href: "#services" },
    { label: "CX Advisory", href: "#solutions" },
    { label: "Accelerators", href: "#services" },
  ],
  companyLinks: [
    { label: "About Us", href: "#about" },
    { label: "Team", href: "#about" },
    { label: "Careers", href: "#contact" },
  ],
} as const;
