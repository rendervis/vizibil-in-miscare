import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-[1.75rem] border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] shadow-[0_18px_70px_rgba(15,12,18,.08)]",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("grid gap-2 p-6", className)} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn("text-lg font-semibold tracking-[-.02em]", className)} {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-sm leading-6 text-[var(--muted-foreground)]", className)} {...props} />;
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
