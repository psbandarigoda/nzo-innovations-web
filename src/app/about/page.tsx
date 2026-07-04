import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, CTASection } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { AnimatedNumber } from "@/components/motion/counter";
import { STATS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about nZO Innovations-a technology consulting and solution advisory company helping businesses drive digital transformation.",
  path: "/about",
});

const expertiseAreas = [
  "Technology Consulting",
  "Digital Transformation",
  "Enterprise Architecture",
  "Solution Design",
  "AI Adoption",
  "Platform Strategy",
  "Cloud Architecture",
  "Business Process Optimization",
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About nZO Innovations"
        title="Business strategy meets technology excellence"
        description="We are a technology consulting and solution advisory company. We help startups, SMEs, and enterprises identify the right IT strategies and transform ideas into scalable digital platforms."
      />

      <section className="section-padding bg-background">
        <div className="container-nzo">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Executive strategy meeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">
                  We understand business before technology
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  nZO Innovations bridges business strategy and software execution. Our
                  advisors work alongside CEOs, founders, and enterprise leaders to make
                  technology decisions that drive measurable growth-not just deliver
                  projects.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  From concept to implementation, we guide businesses toward scalable,
                  secure, and production-ready solutions. Alongside consulting services,
                  we build our own technology products-making us both a trusted advisory
                  partner and a product-driven innovator.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-semibold md:text-4xl">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-nzo">
          <FadeIn>
            <h2 className="text-center text-3xl font-semibold tracking-tight">
              Our expertise
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseAreas.map((item, i) => (
              <FadeIn key={item} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-card p-5 text-center text-sm font-medium">
                  {item}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
