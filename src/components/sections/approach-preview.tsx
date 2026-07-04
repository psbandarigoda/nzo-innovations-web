"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APPROACH_STEPS } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/sections/page-hero";

export function ApproachPreview() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-nzo">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Approach"
            title="From business understanding to optimized solutions"
            description="A proven six-phase methodology that ensures every technology decision serves your business objectives."
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {APPROACH_STEPS.map((step, index) => (
            <StaggerItem key={step.step}>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md">
                {index < APPROACH_STEPS.length - 1 && (
                  <span className="absolute -right-2 top-1/2 hidden text-muted-foreground/40 xl:block">
                    →
                  </span>
                )}
                <span className="text-xs font-medium text-accent">{step.step}</span>
                <h3 className="mt-2 text-sm font-semibold leading-snug">
                  {step.title}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-8 text-center">
          <Link
            href="/approach"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80"
          >
            Explore our full methodology
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
