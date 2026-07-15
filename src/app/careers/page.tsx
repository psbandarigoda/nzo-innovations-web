import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, MapPin, Rocket, Users } from "lucide-react";
import { PageHero, CTASection } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CAREER_OPENINGS } from "@/lib/careers";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Careers",
  description:
    "Join nZO Innovations-open roles in software engineering, platform engineering, brand growth, and internships. Build products and advisory impact in Sri Lanka.",
  path: "/careers",
});

const cultureCards = [
  {
    icon: Users,
    title: "Build With Purpose",
    description:
      "Work across consulting engagements and internal products-where engineering meets business strategy.",
  },
  {
    icon: Rocket,
    title: "Modern Stack & Practices",
    description:
      "Cloud-native tooling, async collaboration, and engineering standards shaped by real enterprise delivery.",
  },
  {
    icon: Briefcase,
    title: "Growth & Ownership",
    description:
      "Clear scope, mentorship, and room to lead-whether you ship code, infrastructure, or brand.",
  },
] as const;

function JobList({ items, title }: { items: string[]; title: string }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build platforms. Shape brands. Grow with nZO."
        description="We're hiring software engineers, platform engineers, strategists, and interns who want to work at the intersection of consulting excellence and product innovation."
      />

      <section className="section-padding bg-background">
        <div className="container-nzo">
          <div className="grid gap-8 lg:grid-cols-3">
            {cultureCards.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <item.icon className="h-8 w-8 text-accent" />
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-nzo">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight">Open roles</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Current opportunities at nZO Innovations. Don&apos;t see a perfect match?
              Reach out-we&apos;re always interested in exceptional people.
            </p>
          </FadeIn>

          <div className="mt-10 space-y-6">
            {CAREER_OPENINGS.map((job, i) => (
              <FadeIn key={job.id} delay={i * 0.06}>
                <Card className="overflow-hidden transition-all hover:border-accent/30 hover:shadow-md">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-semibold tracking-tight">{job.title}</h3>
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                          <span>{job.department}</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {job.location}
                          </span>
                          <span>{job.type}</span>
                        </div>
                        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                          {job.summary}
                        </p>
                      </div>
                      <Button asChild variant="secondary" className="shrink-0">
                        <Link href={`/contact?role=${job.id}`}>Apply now</Link>
                      </Button>
                    </div>

                    <details className="group mt-6 border-t border-border pt-6">
                      <summary className="cursor-pointer list-none text-sm font-medium text-accent marker:content-none [&::-webkit-details-marker]:hidden">
                        <span className="group-open:hidden">View full job description →</span>
                        <span className="hidden group-open:inline">Hide job description ↑</span>
                      </summary>
                      <div className="mt-6 grid gap-8 md:grid-cols-2">
                        <JobList items={job.responsibilities} title="What you'll do" />
                        <JobList items={job.requirements} title="What we're looking for" />
                        {job.niceToHave && job.niceToHave.length > 0 && (
                          <div className="md:col-span-2">
                            <JobList items={job.niceToHave} title="Nice to have" />
                          </div>
                        )}
                      </div>
                    </details>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to join nZO?"
        description="Send your CV, portfolio, or LinkedIn-and tell us which role excites you and why."
        primaryLabel="Apply via Contact"
      />
    </>
  );
}
