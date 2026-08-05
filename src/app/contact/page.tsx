import type { Metadata } from "next";
import { Mail, MapPin, Phone, Share2, Globe } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Book a technology consulting consultation with nZO Innovations. Visit us at 46 Lighthouse St, Galle.",
  path: "/contact",
  keywords: ["Technology Consulting Sri Lanka", "Business Technology Consultant"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your technology strategy"
        description="Schedule a consultation with our advisors. We'll help you align technology investments with business growth objectives."
      />

      <section className="section-padding bg-background">
        <div className="container-nzo">
          <div className="grid gap-12 lg:grid-cols-5">
            <FadeIn className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold">Get in touch</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Whether you&apos;re a startup founder, enterprise leader, or government
                    stakeholder-we&apos;re here to help you make the right technology decisions.
                  </p>
                </div>

                <div className="space-y-6">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-start gap-4 transition-colors hover:text-accent"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{SITE.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-4 transition-colors hover:text-accent"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{SITE.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Office</p>
                      <p className="text-sm text-muted-foreground">{SITE.address}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-accent hover:text-accent"
                    aria-label="LinkedIn"
                  >
                    <Share2 className="h-5 w-5" />
                  </a>
                  <a
                    href={SITE.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-accent hover:text-accent"
                    aria-label="Facebook"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                <h2 className="text-xl font-semibold">Book a Consultation</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us about your business and technology goals. We&apos;ll respond within one business day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="mt-16">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="nZO Innovations Office Location"
                src="https://maps.google.com/maps?q=46+Lighthouse+St,+Galle+80000,+Sri+Lanka&output=embed"
                className="h-[400px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
