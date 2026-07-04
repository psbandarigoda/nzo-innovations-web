import type { Metadata } from "next";
import { SITE, SEO_KEYWORDS } from "./constants";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `${SITE.shortName} | Technology Consulting & Solution Advisory`
      : `${title} | ${SITE.shortName}`;

  return {
    title: fullTitle,
    description,
    keywords: [...SEO_KEYWORDS, ...keywords],
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [{ url: SITE.logoFull, alt: SITE.brandName }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SITE.logoFull],
    },
    robots: { index: true, follow: true },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}${SITE.logoIcon}`,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "46 Lighthouse St",
      addressLocality: "Galle",
      postalCode: "80000",
      addressCountry: "LK",
    },
    areaServed: ["Sri Lanka", "Global"],
    serviceType: [
      "Technology Consulting",
      "Digital Transformation",
      "Enterprise Architecture",
      "Solution Architecture",
      "AI Consulting",
    ],
    sameAs: [SITE.linkedin, SITE.facebook],
  };
}
