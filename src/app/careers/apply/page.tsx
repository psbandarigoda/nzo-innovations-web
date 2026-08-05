import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CareerApplicationForm } from "@/components/forms/career-application-form";
import { FadeIn } from "@/components/motion/fade-in";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Apply",
  description:
    "Submit your job application and CV to join nZO Innovations-software engineering, platform engineering, brand, and internship roles.",
  path: "/careers/apply",
});

export default function CareerApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Submit your application"
        description="Apply for an open role at nZO Innovations. Upload your CV and tell us why you're a fit-this is a job application, not a business consultation."
      />

      <section className="section-padding bg-background">
        <div className="container-nzo max-w-3xl">
          <FadeIn>
            <Link
              href="/careers"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to open roles
            </Link>

            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <h2 className="text-xl font-semibold">Job application</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Required fields include your contact details, selected position,
                CV upload, and a short cover note. We&apos;ll review and respond
                if there is a match.
              </p>
              <div className="mt-8">
                <Suspense
                  fallback={
                    <div className="h-96 animate-pulse rounded-xl bg-muted/40" />
                  }
                >
                  <CareerApplicationForm />
                </Suspense>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
