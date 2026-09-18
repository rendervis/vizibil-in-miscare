import { DriverSection } from "@/components/landing/driver-section";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
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
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [siteConfig.instagram],
    areaServed: { "@type": "City", name: siteConfig.launchCity },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "ro-RO",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <MarketplaceDemo />
        <DriverSection />
        <WhyDifferent />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
