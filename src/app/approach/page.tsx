import type { Metadata } from "next";
import { PageHero, CTASection } from "@/components/sections/page-hero";
import { ApproachTimeline } from "@/components/sections/approach-timeline";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { WHY_NZO, VENTURE_LIFECYCLE } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Our Approach",
  description:
    "How nZO advises clients and builds ventures: from business discovery and architecture through product incubation and independent company formation.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title="A disciplined path from strategy to lasting companies"
        description="Our methodology covers client advisory engagements and our own venture-building work-grounded in business reality, designed for long-term scalability, and structured so products can eventually operate independently."
      />

      <ApproachTimeline />

      <section className="section-padding bg-surface">
        <div className="container-nzo">
          <FadeIn>
            <h2 className="text-center text-3xl font-semibold tracking-tight">
              Venture building lifecycle
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              For products we incubate, we follow a clear maturity path-from discovery
              to spin-out-with flexibility on long-term ownership. We build sustainable
              businesses, not companies solely to sell.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VENTURE_LIFECYCLE.map((item) => (
              <StaggerItem key={item.step}>
                <div className="h-full rounded-2xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold tracking-widest text-accent">
                    {item.step}
                  </p>
                  <h3 className="mt-2 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-background">
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
