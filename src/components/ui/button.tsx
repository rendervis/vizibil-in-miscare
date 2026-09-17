import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[transform,background-color,color,border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--signal)] text-[var(--signal-foreground)] shadow-[0_10px_35px_rgba(197,240,107,.18)] hover:bg-[var(--signal-strong)]",
        secondary:
          "bg-[var(--surface-strong)] text-[var(--foreground)] hover:bg-[var(--surface-stronger)]",
        outline:
          "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--surface)]",
        ghost: "text-[var(--foreground)] hover:bg-[var(--surface)]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-6 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
