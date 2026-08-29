import type { Metadata } from "next";
import {
  PRODUCTS,
  VENTURES,
  VENTURE_LIFECYCLE,
  BRAND_ARCHITECTURE,
} from "@/lib/constants";
import { PageHero, CTASection, SectionHeader } from "@/components/sections/page-hero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Products & Ventures",
  description:
    "nZO Innovations builds and incubates digital products and ventures-including Entertain Passport (Pvt) Ltd-and upcoming products GardianAir, MyDriver, CareHelp, and nZO Academy.",
  path: "/products",
  keywords: [
    "Technology Venture Builder",
    "Product Incubation Sri Lanka",
    "Digital Product Development",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Ventures"
        title="We build products. We grow companies."
        description="nZO incubates digital products under our platform and supports the strongest ones toward independent company structures-retaining strategic ownership and partnership flexibility."
      />

      <section className="section-padding bg-background">
        <div className="container-nzo space-y-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Brand Architecture"
              title="How products relate to nZO"
              description="Not every product stays branded as nZO forever. Early products incubate under nZO; mature ventures may become independent companies."
              align="left"
            />
          </FadeIn>
          <StaggerContainer className="grid gap-4 md:grid-cols-3">
            {BRAND_ARCHITECTURE.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-nzo space-y-10">
          <FadeIn>
            <SectionHeader
              eyebrow="Portfolio Company"
              title="Ventures that operate as dedicated companies"
              description="Products that matured beyond incubation and now operate under their own company identity-with nZO as strategic partner and/or shareholder."
              align="left"
            />
          </FadeIn>

          <StaggerContainer className="grid gap-6">
            {VENTURES.map((venture) => (
              <StaggerItem key={venture.id}>
                <Card className="border-accent/30">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="accent">{venture.statusLabel}</Badge>
                      <Badge variant="outline">{venture.industry}</Badge>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
                      {venture.name}
                    </h3>
                    <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                      {venture.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-nzo space-y-10">
          <FadeIn>
            <SectionHeader
              eyebrow="Upcoming Products"
              title="Currently incubating under nZO"
              description="Early-stage products being validated and built inside nZO Innovations before dedicated company formation."
              align="left"
            />
          </FadeIn>

          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((product) => (
              <StaggerItem key={product.name}>
                <Card className="group h-full transition-all hover:border-accent/30 hover:shadow-lg">
                  <CardContent className="relative p-8 pt-14">
                    <div className="absolute right-6 top-6">
                      <Badge variant="accent">Upcoming</Badge>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">
                      {product.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">{product.name}</h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-nzo space-y-10">
          <FadeIn>
            <SectionHeader
              eyebrow="How We Build"
              title="Venture lifecycle"
              description="A disciplined path from discovery to independent company-designed for sustainability, not founder dependency."
              align="left"
            />
          </FadeIn>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VENTURE_LIFECYCLE.map((item) => (
              <StaggerItem key={item.step}>
                <div className="h-full rounded-2xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold tracking-widest text-accent">
                    {item.step}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection
        title="Building something that should become a company?"
        description="Talk to us about advisory partnerships-or how nZO approaches product incubation and venture building."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="Our Approach"
        secondaryHref="/approach"
      />
    </>
  );
}
