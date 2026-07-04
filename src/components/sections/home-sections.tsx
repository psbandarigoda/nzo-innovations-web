"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, STATS, WHY_NZO } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { AnimatedNumber } from "@/components/motion/counter";
import { SectionHeader } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function StatsSection() {
  return (
    <section className="border-y border-border bg-surface py-16">
      <div className="container-nzo px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  const preview = SERVICES.slice(0, 6);

  return (
    <section className="section-padding bg-background">
      <div className="container-nzo">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Our Services"
              title="Executive-level technology consulting"
              description="From strategy to architecture-we guide decisions that shape scalable, secure, production-ready solutions."
              align="left"
            />
            <Button asChild variant="secondary">
              <Link href="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {preview.map((service) => (
            <StaggerItem key={service.title}>
              <Card className="group h-full hover:border-accent/30 hover:shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
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

export function WhyNzoSection() {
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container-nzo">
        <FadeIn>
          <SectionHeader
            eyebrow="Why nZO"
            title="Your long-term technology partner"
            description="We understand business before technology-delivering vendor-neutral guidance that executives trust."
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WHY_NZO.map((item) => (
            <StaggerItem key={item.title}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
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

const notList = [
  "Website Development Company",
  "Mobile App Company",
  "Freelancer Team",
  "Software Outsourcing Company",
] as const;

const areList = [
  "Technology Partner",
  "Strategic Advisor",
  "Solution Architect",
  "Enterprise Consultant",
  "Digital Transformation Partner",
] as const;

export function PositioningSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-nzo">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Position
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              We are your strategic technology advisor-not a software agency
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                We are not
              </p>
              <ul className="mt-6 space-y-4">
                {notList.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="text-red-400">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">
                We are
              </p>
              <ul className="mt-6 space-y-4">
                {areList.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium">
                    <span className="text-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
