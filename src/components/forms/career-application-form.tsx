"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  careerApplicationFieldsSchema,
  type CareerApplicationFields,
  MAX_CV_BYTES,
} from "@/lib/career-application-schema";
import { CAREER_OPENINGS } from "@/lib/careers";

export function CareerApplicationForm() {
  const searchParams = useSearchParams();
  const defaultPositionId = useMemo(() => {
    const role = searchParams.get("role");
    if (role && CAREER_OPENINGS.some((job) => job.id === role)) return role;
    return CAREER_OPENINGS[0]?.id ?? "";
  }, [searchParams]);

  const [submitted, setSubmitted] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<CareerApplicationFields>({
    resolver: zodResolver(careerApplicationFieldsSchema),
    defaultValues: {
      positionId: defaultPositionId,
      linkedin: "",
      portfolio: "",
    },
  });

  const onSubmit = async (data: CareerApplicationFields) => {
    setCvError(null);

    if (!cvFile) {
      setCvError("Please upload your CV (PDF or Word, max 5 MB).");
      return;
    }

    if (cvFile.size > MAX_CV_BYTES) {
      setCvError("CV must be 5 MB or smaller.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("positionId", data.positionId);
      formData.append("linkedin", data.linkedin ?? "");
      formData.append("portfolio", data.portfolio ?? "");
      formData.append("coverLetter", data.coverLetter);
      formData.append("cv", cvFile);

      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError("root", {
          message:
            result.error ??
            "We couldn't submit your application. Please try again.",
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
        <h3 className="text-xl font-semibold">Application received</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for applying. Our team will review your CV and get back to
          you if there is a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="space-y-2">
        <Label htmlFor="positionId">Position</Label>
        <select
          id="positionId"
          className="flex h-11 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          {...register("positionId")}
        >
          {CAREER_OPENINGS.map((job) => (
            <option key={job.id} value={job.id}>
              {job.title} · {job.type}
            </option>
          ))}
        </select>
        {errors.positionId && (
          <p className="text-xs text-red-500">{errors.positionId.message}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Your full name" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+94 77 000 0000"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn (optional)</Label>
          <Input
            id="linkedin"
            type="url"
            placeholder="https://linkedin.com/in/..."
            {...register("linkedin")}
          />
          {errors.linkedin && (
            <p className="text-xs text-red-500">{errors.linkedin.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="portfolio">Portfolio / GitHub (optional)</Label>
          <Input
            id="portfolio"
            type="url"
            placeholder="https://github.com/..."
            {...register("portfolio")}
          />
          {errors.portfolio && (
            <p className="text-xs text-red-500">{errors.portfolio.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cv">Upload CV</Label>
        <div className="rounded-lg border border-dashed border-border bg-muted/30 px-4 py-5">
          <label
            htmlFor="cv"
            className="flex cursor-pointer flex-col items-center gap-2 text-center"
          >
            <FileUp className="h-6 w-6 text-accent" />
            <span className="text-sm font-medium">
              {cvFile ? cvFile.name : "Choose PDF or Word file"}
            </span>
            <span className="text-xs text-muted-foreground">
              Max 5 MB · .pdf, .doc, .docx
            </span>
          </label>
          <input
            id="cv"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              setCvFile(file);
              setCvError(null);
            }}
          />
        </div>
        {cvError && <p className="text-xs text-red-500">{cvError}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="coverLetter">Why are you a fit?</Label>
        <Textarea
          id="coverLetter"
          placeholder="Briefly introduce yourself, relevant experience, and why this role at nZO interests you..."
          rows={5}
          {...register("coverLetter")}
        />
        {errors.coverLetter && (
          <p className="text-xs text-red-500">{errors.coverLetter.message}</p>
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
        {isSubmitting ? "Submitting application..." : "Submit Application"}
      </Button>
    </form>
  );
}
