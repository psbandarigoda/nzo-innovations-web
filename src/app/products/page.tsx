import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { PageHero, CTASection, SectionHeader } from "@/components/sections/page-hero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Products & Innovations",
  description:
    "nZO Innovations builds technology products alongside consulting—enterprise platforms, AI analytics, and integration solutions.",
  path: "/products",
  keywords: ["Platform Strategy"],
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovations"
        title="Technology products built on consulting excellence"
        description="Beyond advisory, we develop our own innovations—platforms shaped by real enterprise challenges and strategic thinking."
      />

      <section className="section-padding bg-background">
        <div className="container-nzo space-y-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Consulting First"
              title="Advisory expertise powers our products"
              description="Our products emerge from the patterns we see across engagements—designed for the problems executives actually face."
              align="left"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-8 md:p-10 lg:p-12">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                nZO Innovations is both a consulting partner and a product-driven company.
                Our advisory work informs every product we build—ensuring they solve real
                business problems with enterprise-grade architecture and security.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-nzo space-y-12">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Innovations"
              title="Products in development"
              description="Premium platforms designed for scalability, security, and strategic impact."
              align="left"
            />
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {PRODUCTS.map((product) => (
              <StaggerItem key={product.name}>
                <Card className="group relative h-full overflow-hidden transition-all hover:border-accent/30 hover:shadow-xl">
                  <div className="absolute right-6 top-6">
                    <Badge variant="accent">Coming Soon</Badge>
                  </div>
                  <CardContent className="p-8 pt-14">
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

      <CTASection
        title="Interested in our upcoming innovations?"
        description="Join our early access list or discuss how our consulting expertise can accelerate your platform strategy."
        primaryLabel="Get in Touch"
        secondaryLabel="Our Services"
      />
    </>
  );
}
