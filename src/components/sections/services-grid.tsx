"use client";

import { SERVICES } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesGrid() {
  return (
    <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service) => (
        <StaggerItem key={service.title}>
          <Card className="group h-full transition-all hover:border-accent/30 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="mb-4 h-1 w-12 rounded-full bg-accent transition-all group-hover:w-16" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </CardContent>
          </Card>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
