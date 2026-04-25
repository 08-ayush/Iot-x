import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { WhySection } from "@/components/sections/why-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SectionReveal } from "@/components/effects/section-reveal";

export default function Home() {
  return (
    <main className="relative z-10 min-h-dvh">
      <SiteNavbar />
      <HeroSection />
      <SectionReveal amount={0.15}>
        <AboutSection />
      </SectionReveal>
      <SectionReveal amount={0.12}>
        <ServicesSection />
      </SectionReveal>
      <SectionReveal amount={0.12}>
        <IndustriesSection />
      </SectionReveal>
      <SectionReveal amount={0.12}>
        <SolutionsSection />
      </SectionReveal>
      <SectionReveal amount={0.12}>
        <WhySection />
      </SectionReveal>
      <SectionReveal amount={0.12}>
        <TestimonialsSection />
      </SectionReveal>
      <SectionReveal amount={0.12}>
        <ContactSection />
      </SectionReveal>
      <SiteFooter />
    </main>
  );
}
