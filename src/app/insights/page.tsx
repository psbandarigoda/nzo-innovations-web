import type { Metadata } from "next";
import { PageHero, CTASection } from "@/components/sections/page-hero";
import { InsightsGrid } from "@/components/sections/insights-grid";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Insights",
  description:
    "Thought leadership on technology consulting, architecture, AI, business strategy, and digital transformation.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Strategic thinking for technology leaders"
        description="Executive perspectives on architecture, AI adoption, digital transformation, and the decisions that define successful technology investments."
      />

      <section className="section-padding bg-background">
        <div className="container-nzo">
          <InsightsGrid />
        </div>
      </section>

      <CTASection
        title="Want strategic guidance tailored to your business?"
        description="Our advisors turn insights into action. Schedule a consultation to discuss your technology strategy."
      />
    </>
  );
}
