"use client";

import {
  Brain,
  Cloud,
  Layers,
  LayoutGrid,
  RefreshCw,
  Target,
  type LucideIcon,
} from "lucide-react";
import { TRUST_PILLARS } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/sections/page-hero";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<(typeof TRUST_PILLARS)[number]["icon"], LucideIcon> = {
  Target,
  Layers,
  Brain,
  Cloud,
  RefreshCw,
  LayoutGrid,
};

export function TrustSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-nzo">
        <FadeIn>
          <SectionHeader
            eyebrow="Trusted Technology Partner"
            title="Strategic advisory for every stage of growth"
            description="We partner with executives and founders to make technology decisions that compound-long before implementation begins."
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.icon];
            return (
              <StaggerItem key={pillar.title}>
                <Card className="group h-full border-border/50 bg-card hover:border-accent/30 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
