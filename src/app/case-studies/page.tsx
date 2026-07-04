import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTASection } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Case Studies",
  description:
    "Client success stories and technology consulting case studies from nZO Innovations. Coming soon.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Proven outcomes across industries"
        description="Detailed accounts of how our advisory engagements helped organizations make strategic technology decisions and achieve measurable business results."
      />

      <section className="section-padding bg-background">
        <div className="container-nzo">
          <FadeIn>
            <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-border bg-surface p-12 text-center md:p-16">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Coming Soon
              </p>
              <h2 className="mt-4 text-2xl font-semibold">
                Case studies are being prepared
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We&apos;re documenting client success stories that showcase our consulting
                methodology and business impact. In the meantime, explore our services or
                schedule a consultation to discuss your needs.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
