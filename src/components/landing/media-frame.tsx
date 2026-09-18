"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function MediaFrame({
  src,
  alt,
  className,
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative overflow-hidden bg-[var(--ink)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(124,114,242,.28),transparent_34%),radial-gradient(circle_at_82%_74%,rgba(199,243,107,.14),transparent_30%),linear-gradient(135deg,#1f1830_0%,#2c2440_55%,#17121f_100%)]" />
      <svg className="absolute inset-0 h-full w-full opacity-45" viewBox="0 0 800 600" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-80 470C120 430 95 180 300 210C470 236 418 430 620 388C760 358 760 176 900 140" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="22" strokeLinecap="round" />
        <path d="M-80 470C120 430 95 180 300 210C470 236 418 430 620 388C760 358 760 176 900 140" fill="none" stroke="rgba(199,243,107,.72)" strokeWidth="4" strokeLinecap="round" strokeDasharray="16 18" />
        <circle cx="300" cy="210" r="9" fill="#c7f36b" />
        <circle cx="620" cy="388" r="9" fill="#7c72f2" />
      </svg>

      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn(
          "object-cover transition-opacity duration-500 ease-out",
          loaded ? "opacity-100" : "opacity-0",
        )}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,29,.02),rgba(20,15,29,.28))]" />
      {label ? (
        <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/38 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em] text-white shadow-sm backdrop-blur-md">
          {label}
        </span>
      ) : null}
    </div>
  );
}
