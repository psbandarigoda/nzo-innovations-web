import type { Metadata } from "next";
import Image from "next/image";
import { INDUSTRIES } from "@/lib/constants";
import { PageHero, CTASection } from "@/components/sections/page-hero";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { createMetadata } from "@/lib/seo";

const industryImages: Record<string, string> = {
  Healthcare:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  Finance:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
  Manufacturing:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  Education:
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
  Government:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
  Travel:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
  Retail:
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
  Logistics:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  Entertainment:
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
};

export const metadata: Metadata = createMetadata({
  title: "Industries",
  description:
    "Technology consulting for healthcare, finance, manufacturing, education, government, travel, retail, logistics, and entertainment.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector expertise that understands your world"
        description="We bring deep industry knowledge to every engagement-ensuring technology strategies align with regulatory, operational, and market realities."
      />

      <section className="section-padding bg-background">
        <div className="container-nzo">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <StaggerItem key={industry.name}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={industryImages[industry.name]}
                      alt={industry.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                      {industry.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection
        title="Need industry-specific technology guidance?"
        description="Our advisors understand the unique challenges of your sector. Let's discuss your strategic technology needs."
      />
    </>
  );
}
