import type { Metadata } from "next";
import { PageHero, CTASection } from "@/components/sections/page-hero";
import { ApproachTimeline } from "@/components/sections/approach-timeline";
import { FadeIn } from "@/components/motion/fade-in";
import { WHY_NZO } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Our Approach",
  description:
    "Our proven methodology: understand business, analyze challenges, design solutions, build architecture, implement, and optimize.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title="A disciplined path from strategy to success"
        description="Our six-phase methodology ensures every technology decision is grounded in business reality and designed for long-term scalability."
      />

      <ApproachTimeline />

      <section className="section-padding bg-surface">
        <div className="container-nzo">
          <FadeIn>
            <h2 className="text-center text-3xl font-semibold tracking-tight">
              What sets our approach apart
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_NZO.slice(0, 6).map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
