"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import type { UserRole } from "@/types";
import { siteConfig } from "@/config/site";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function LeadDialog({
  open,
  onClose,
  role,
  context,
}: {
  open: boolean;
  onClose: () => void;
  role: UserRole;
  context?: Record<string, unknown>;
}) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");

  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  const leadSource =
    typeof context?.source === "string" ? context.source : "unknown";

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    setStatus("idle");
    setMessage("");

    void trackEvent(
      role === "driver"
        ? analyticsEvents.driverLeadStarted
        : analyticsEvents.businessLeadStarted,
      {
        source: leadSource,
      },
    );

    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      dialogRef.current
        ?.querySelector<HTMLElement>("input[name='name']")
        ?.focus();
    }, 0);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;

      if (!dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => element.offsetParent !== null);

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;

      previouslyFocused?.focus();
    };
  }, [leadSource, open, role]);

  if (!open) return null;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const form = new FormData(event.currentTarget);

    const payload = {
      role,
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      company: String(form.get("company") ?? ""),
      city: String(form.get("city") ?? ""),
      note: String(form.get("note") ?? ""),
      website: String(form.get("website") ?? ""),
      context,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Lead submit failed");
      }

      await trackEvent(
        role === "driver"
          ? analyticsEvents.driverLeadSubmitted
          : analyticsEvents.businessLeadSubmitted,
        {
          source: leadSource,
        },
      );

      setStatus("success");

      setMessage(
        role === "driver"
          ? "Înscriere primită. Te contactăm când avem o campanie potrivită traseului tău."
          : "Cererea a fost trimisă. Confirmăm opțiunile disponibile și detaliile înainte de orice plată.",
      );
    } catch {
      setStatus("error");

      setMessage(
        "Nu am putut trimite formularul. Încearcă din nou sau scrie-ne direct pe email.",
      );
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-md sm:p-4"
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        className="relative my-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-xl overflow-y-auto overscroll-contain rounded-[1.75rem] border border-[var(--ink)]/10 bg-[var(--paper)] p-5 text-[var(--foreground)] shadow-[0_32px_120px_rgba(0,0,0,.32)] sm:max-h-[calc(100dvh-2rem)] sm:rounded-[2rem] sm:p-6 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-title"
        aria-describedby="lead-description"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 grid size-10 cursor-pointer place-items-center rounded-full border border-[var(--border)] bg-white/75 text-[var(--ink)] transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 sm:right-5 sm:top-5"
          aria-label="Închide formularul"
        >
          <X className="size-4" />
        </button>

        <div className="pr-11 sm:pr-12">
          <div className="text-xs font-black uppercase tracking-[.18em] text-[var(--route)]">
            {role === "driver" ? "Pentru șoferi" : "Pentru afaceri"}
          </div>

          <h2
            id="lead-title"
            className="mt-2 text-2xl font-black tracking-[-.04em] text-[var(--ink)] sm:text-3xl"
          >
            {role === "driver"
              ? "Înscrie mașina și traseul tău."
              : "Spune-ne unde vrei să fii văzut."}
          </h2>

          <p
            id="lead-description"
            className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]"
          >
            Trimite cererea. Confirmăm disponibilitatea și detaliile înainte de
            plată sau lansarea campaniei.
          </p>
        </div>

        {status === "success" ? (
          <div className="mt-8">
            <div className="rounded-3xl border border-[color:rgb(197_243_107_/_0.45)] bg-[color:rgb(197_243_107_/_0.18)] p-5 text-sm font-semibold leading-6 text-[var(--ink)]">
              {message}
            </div>

            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={onClose}
            >
              Închide
            </Button>
          </div>
        ) : (
          <form className="mt-7 grid gap-4" onSubmit={submit}>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-bold text-[var(--ink)]/72">
                Nume

                <Input
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Numele tău"
                />
              </label>

              <label className="grid gap-2 text-xs font-bold text-[var(--ink)]/72">
                Email

                <Input
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="email@exemplu.ro"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-bold text-[var(--ink)]/72">
                Telefon
                <span className="sr-only">opțional</span>

                <Input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Telefon (opțional)"
                />
              </label>

              <label className="grid gap-2 text-xs font-bold text-[var(--ink)]/72">
                Oraș

                <Input
                  name="city"
                  defaultValue="București"
                  autoComplete="address-level2"
                  placeholder="Oraș"
                />
              </label>
            </div>

            {role === "business" ? (
              <label className="grid gap-2 text-xs font-bold text-[var(--ink)]/72">
                Afacere / companie

                <Input
                  name="company"
                  autoComplete="organization"
                  placeholder="Numele afacerii"
                />
              </label>
            ) : null}

            <label className="grid gap-2 text-xs font-bold text-[var(--ink)]/72">
              {role === "driver"
                ? "Mașină și traseu obișnuit"
                : "Detalii campanie"}

              <textarea
                name="note"
                rows={4}
                placeholder={
                  role === "driver"
                    ? "Ex: VW Golf 2019 · Pipera, Centru, Titan"
                    : "Ce vrei să promovezi și în ce zonă?"
                }
                className="w-full resize-none rounded-2xl border border-[var(--border)] bg-white/65 px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted-foreground)] focus:border-[var(--route)] focus:ring-2 focus:ring-[color:rgb(124_114_242_/_0.14)]"
              />
            </label>

            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="mt-1 w-full"
            >
              {status === "loading"
                ? "Se trimite…"
                : role === "driver"
                  ? "Înscrie mașina"
                  : "Trimite cererea"}

              {status !== "loading" ? (
                <ArrowRight className="cta-arrow size-4" />
              ) : null}
            </Button>

            {status === "error" ? (
              <p
                role="alert"
                className="text-sm font-semibold leading-6 text-red-700"
              >
                {message}{" "}
                <a
                  className="underline underline-offset-2"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </p>
            ) : null}

            <p className="text-xs leading-5 text-[var(--muted-foreground)]">
              Prin trimitere accepți să fii contactat strict în legătură cu{" "}
              {siteConfig.name}. Nu vindem date și nu te înscriem automat la
              newsletter.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}