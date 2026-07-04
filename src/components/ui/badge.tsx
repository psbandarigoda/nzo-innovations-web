import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "secondary" | "outline" | "accent";
  }
>(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-muted text-muted-foreground": variant === "default",
          "bg-navy/5 text-navy dark:bg-white/10 dark:text-white":
            variant === "secondary",
          "border border-border text-muted-foreground": variant === "outline",
          "bg-accent/10 text-accent": variant === "accent",
        },
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
