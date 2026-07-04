import type { Metadata } from "next";
import { PageHero, CTASection } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { ServicesGrid } from "@/components/sections/services-grid";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Technology consulting, solution architecture, digital transformation, enterprise architecture, AI adoption, and cloud strategy advisory.",
  path: "/services",
  keywords: ["Solution Architecture", "Enterprise Architecture", "AI Consulting"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology consulting for decisive leaders"
        description="Executive-level advisory across strategy, architecture, AI, cloud, and digital transformation. We help you invest in the right technology-before building."
      />
      <FadeIn>
        <div className="border-b border-border bg-surface py-8">
          <div className="container-nzo px-6 text-center md:px-8 lg:px-12">
            <p className="text-muted-foreground">
              Every engagement begins with understanding your business-not selling a technology stack.
            </p>
          </div>
        </div>
      </FadeIn>
      <section className="section-padding bg-background">
        <div className="container-nzo">
          <ServicesGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
