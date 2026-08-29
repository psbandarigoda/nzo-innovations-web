"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern enterprise office architecture"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
      </div>

      <div className="container-nzo relative flex min-h-screen flex-col justify-center px-6 pb-20 pt-32 md:px-8 md:pt-40 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-white/60">
            {SITE.shortName} - Technology Consulting & Venture Building
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Technology Decisions That Drive{" "}
            <span className="text-white/90">Business Growth</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            We help startups, SMEs, and enterprises choose the right technology
            path-and we incubate digital products that can grow into independent
            companies.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-navy hover:bg-white/90"
            >
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/products">Products & Ventures</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 animate-bounce text-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
