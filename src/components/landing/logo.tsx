import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type LogoProps = {
  className?: string;
  compact?: boolean;
  variant?: "default" | "light";
  priority?: boolean;
};

export function Logo({
  className,
  compact = false,
  variant = "default",
  priority = false,
}: LogoProps) {
  if (compact) {
    return (
      <span className={cn("inline-flex shrink-0 items-center", className)}>
        <Image
          src="/icon.svg"
          alt={siteConfig.name}
          width={40}
          height={40}
          priority={priority}
          unoptimized
          className="size-9 shrink-0"
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src={variant === "light" ? "/logo-light.svg" : "/logo.svg"}
        alt={siteConfig.name}
        width={215}
        height={36}
        priority={priority}
        unoptimized
        className="h-8 w-auto sm:h-9"
      />
    </span>
  );
}