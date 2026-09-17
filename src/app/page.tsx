import { DriverSection } from "@/components/landing/driver-section";
import { Faq } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { MarketplaceDemo } from "@/components/landing/marketplace-demo";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { WhyDifferent } from "@/components/landing/why-different";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <SiteHeader />
      <main>
        <Hero />
        <MarketplaceDemo />
        <DriverSection />
        <HowItWorks />
        <WhyDifferent />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
