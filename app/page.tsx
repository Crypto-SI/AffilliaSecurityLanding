import {
  AboutSection,
  CtaSection,
  HeroSection,
  ServicesSection,
  WhyChooseUsSection,
} from '@/components/sections';
import { SiteFooter, SiteNavbar } from '@/components/site';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavbar />
      <div className="h-16 md:h-20" />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
