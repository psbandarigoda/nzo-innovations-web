"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError("root", {
          message:
            result.error ??
            "We couldn't send your message. Please try again or email us directly.",
        });
        return;
      }

      setSubmitted(true);
    } catch {
      setError("root", {
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center">
        <h3 className="text-xl font-semibold">Thank you for reaching out</h3>
        <p className="mt-2 text-muted-foreground">
          Our advisory team will review your inquiry and respond within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Smith" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Business Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Your organization"
            {...register("company")}
          />
          {errors.company && (
            <p className="text-xs text-red-500">{errors.company.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role (Optional)</Label>
          <Input
            id="role"
            placeholder="CEO, Founder, CTO..."
            {...register("role")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your technology challenges, goals, and timeline..."
          rows={5}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {errors.root && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {errors.root.message}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Request Consultation"}
      </Button>
    </form>
  );
}
