"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { INSIGHTS } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Technology",
  "Architecture",
  "AI",
  "Business Strategy",
  "Digital Transformation",
] as const;

type Category = (typeof categories)[number];

export function InsightsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredArticles = useMemo(
    () =>
      activeCategory === "All"
        ? INSIGHTS
        : INSIGHTS.filter((article) => article.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <FadeIn>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter insights by category"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "border border-border text-muted-foreground hover:border-accent/30 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </FadeIn>

      <StaggerContainer
        key={activeCategory}
        className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredArticles.length === 0 ? (
          <p className="col-span-full text-center text-muted-foreground">
            No articles in this category yet.
          </p>
        ) : (
          filteredArticles.map((article) => (
            <StaggerItem key={article.slug}>
              <Card className="group flex h-full flex-col overflow-hidden transition-all hover:border-accent/30 hover:shadow-lg">
                <CardContent className="flex flex-1 flex-col p-8">
                  <Badge variant="secondary" className="w-fit">
                    {article.category}
                  </Badge>
                  <h3 className="mt-4 text-xl font-semibold leading-snug group-hover:text-accent">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </div>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                    >
                      Read
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))
        )}
      </StaggerContainer>
    </>
  );
}
