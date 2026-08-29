"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  VENTURE_LIFECYCLE,
  VENTURES,
  PRODUCTS,
  INDUSTRIES,
  BRAND_ARCHITECTURE,
} from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function DualEngineSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-nzo">
        <FadeIn>
          <SectionHeader
            eyebrow="How nZO Creates Value"
            title="Two engines. One strategy."
            description="We advise organizations on the right technology decisions-and we build digital products and ventures designed to become sustainable businesses."
          />
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <FadeIn delay={0.05}>
            <Card className="h-full border-accent/20 bg-accent/5">
              <CardContent className="p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Engine 01
                </p>
                <h3 className="mt-3 text-2xl font-semibold">Advisory & Architecture</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Technology consulting, solution design, digital transformation,
                  AI adoption, and enterprise architecture-helping leaders decide
                  before they build.
                </p>
                <Button asChild variant="secondary" className="mt-6">
                  <Link href="/services">
                    Explore services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card className="h-full">
              <CardContent className="p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Engine 02
                </p>
                <h3 className="mt-3 text-2xl font-semibold">Products & Venture Building</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  We identify valuable problems, incubate products under nZO, form
                  dedicated teams, and support ventures toward independent company
                  structures when they are ready-retaining strategic flexibility on ownership.
                </p>
                <Button asChild variant="secondary" className="mt-6">
                  <Link href="/products">
                    View products & ventures
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-12 grid gap-4 md:grid-cols-3">
          {BRAND_ARCHITECTURE.map((item) => (
            <StaggerItem key={item.title}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function VentureLifecycleSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-nzo">
        <FadeIn>
          <SectionHeader
            eyebrow="Venture Building Model"
            title="From idea to independent company"
            description="Our venture model supports products from incubation through independent scale-with flexibility for long-term ownership, partnership, or future strategic options. We build sustainable businesses-not companies solely to sell."
            align="left"
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VENTURE_LIFECYCLE.map((item) => (
            <StaggerItem key={item.step}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
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

        <FadeIn delay={0.15} className="mt-10">
          <Button asChild>
            <Link href="/approach">
              See our full methodology
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

export function VenturesPreviewSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-nzo">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Products & Ventures"
              title="Building companies, not just features"
              description="Portfolio companies and incubating products across entertainment, travel, mobility, healthcare, and education."
              align="left"
            />
            <Button asChild variant="secondary">
              <Link href="/products">
                View all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-2">
          {VENTURES.map((venture) => (
            <StaggerItem key={venture.id}>
              <Card className="h-full border-accent/25">
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="accent">{venture.statusLabel}</Badge>
                    <Badge variant="outline">{venture.industry}</Badge>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{venture.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {venture.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}

          {PRODUCTS.slice(0, 2).map((product) => (
            <StaggerItem key={product.name}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">Upcoming Product</Badge>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{product.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function IndustriesStripSection() {
  return (
    <section className="section-padding border-y border-border bg-surface">
      <div className="container-nzo">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Industries"
              title="Sector experience that informs every engagement"
              description="Advisory work and venture building across industries where technology creates durable advantage."
              align="left"
            />
            <Button asChild variant="secondary">
              <Link href="/industries">
                View industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-10 flex flex-wrap gap-3">
          {INDUSTRIES.map((industry) => (
            <StaggerItem key={industry.name}>
              <span className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                {industry.name}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
