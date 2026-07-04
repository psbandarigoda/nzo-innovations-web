import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { INSIGHTS, SITE } from "@/lib/constants";
import { getInsightContent } from "@/lib/insights-content";
import { CTASection } from "@/components/sections/page-hero";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return INSIGHTS.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);
  if (!article) return {};

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${slug}`,
    keywords: [article.category],
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);
  const content = getInsightContent(slug);

  if (!article || !content) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          url: `${SITE.url}/insights/${article.slug}`,
          author: { "@type": "Organization", name: SITE.name },
          publisher: {
            "@type": "Organization",
            name: SITE.name,
            logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logoIcon}` },
          },
        }}
      />

      <article className="pt-32 pb-20 md:pt-40">
        <div className="container-nzo px-6 md:px-8 lg:px-12">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          <div className="mx-auto mt-8 max-w-3xl">
            <Badge variant="accent">{article.category}</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              {article.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>

            <div className="mt-12 space-y-10">
              <p className="text-xl leading-relaxed text-muted-foreground">{content.lede}</p>

              {content.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className="leading-relaxed text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2 border-l-2 border-accent/30 pl-5">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-sm leading-relaxed text-muted-foreground md:text-base"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Executive takeaway
                </p>
                <p className="mt-3 text-lg leading-relaxed text-foreground">
                  {content.conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        title="Apply this thinking to your organization"
        description="Our advisors help executives translate strategy into architecture, AI, and transformation roadmaps-before costly commitments are made."
      />
    </>
  );
}
