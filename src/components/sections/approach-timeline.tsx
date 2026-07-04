"use client";

import { APPROACH_STEPS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/sections/page-hero";

type ApproachTimelineProps = {
  compact?: boolean;
};

export function ApproachTimeline({ compact = false }: ApproachTimelineProps) {
  return (
    <section className={compact ? "" : "section-padding bg-background"}>
      <div className={compact ? "" : "container-nzo"}>
        {!compact && (
          <FadeIn>
            <SectionHeader
              eyebrow="Our Approach"
              title="From business understanding to optimized solutions"
              description="A proven methodology that ensures every technology decision serves your business objectives."
            />
          </FadeIn>
        )}

        <div className={`${compact ? "mt-0" : "mt-16"} relative`}>
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="space-y-8">
            {APPROACH_STEPS.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.08}>
                <div
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-accent md:left-1/2 md:block" />
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    } pl-16 md:pl-0`}
                  >
                    <span className="text-sm font-medium text-accent">
                      {step.step}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
