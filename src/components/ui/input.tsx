import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--signal)] focus:ring-2 focus:ring-[color:rgb(197_240_107_/_0.18)] placeholder:text-[var(--muted-foreground)]",
        className,
      )}
      {...props}
    />
  );
}
