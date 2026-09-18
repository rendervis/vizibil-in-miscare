import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-extrabold transition-[transform,background-color,color,border-color,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-45 hover:-translate-y-0.5 active:translate-y-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--signal)] text-[var(--signal-foreground)] shadow-[0_12px_32px_rgba(197,243,107,.16)] hover:bg-[var(--signal-strong)] hover:shadow-[0_16px_40px_rgba(197,243,107,.24)]",
        secondary:
          "bg-[var(--route)] text-white shadow-[0_10px_28px_rgba(124,114,242,.16)] hover:bg-[#6d63e7] hover:shadow-[0_16px_36px_rgba(124,114,242,.24)]",
        outline:
          "border border-[var(--ink)]/16 bg-white/45 text-[var(--foreground)] hover:border-[var(--route)]/40 hover:bg-white/78 hover:shadow-[0_12px_28px_rgba(31,24,48,.08)]",
        ghost:
          "text-[var(--foreground)] hover:bg-[var(--surface)] hover:shadow-none",
        darkGhost:
          "text-white/80 hover:bg-white/8 hover:text-white hover:shadow-none",
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
