import Image from "next/image";
import Link from "next/link";
import { LOGO_MARK, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  nameClassName?: string;
  showName?: boolean;
  priority?: boolean;
};

export function Logo({
  className,
  nameClassName,
  showName = false,
  priority = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center gap-2.5", className)}
      aria-label={`${SITE.brandName} - Home`}
    >
      <Image
        src={SITE.logoIcon}
        alt=""
        aria-hidden
        width={LOGO_MARK.width}
        height={LOGO_MARK.height}
        priority={priority}
        className="h-9 w-9 object-contain object-center"
        style={{ width: LOGO_MARK.width, height: LOGO_MARK.height }}
      />
      {showName && (
        <span
          className={cn(
            "text-sm font-semibold leading-none tracking-tight text-foreground",
            nameClassName
          )}
        >
          {SITE.shortName}
        </span>
      )}
    </Link>
  );
}
