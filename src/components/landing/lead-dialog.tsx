"use client";

import { FormEvent, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trackEvent } from "@/lib/analytics";
import type { UserRole } from "@/types";
import { siteConfig } from "@/config/site";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Lead submit failed");
      await trackEvent("lead_submitted", { role, source: "landing_dialog" });
      setStatus("success");
      setMessage(role === "driver" ? "Te-am trecut pe lista pilot. Revenim când avem o campanie potrivită." : "Cererea pilot a fost trimisă. Confirmăm disponibilitatea reală înainte de orice plată.");
    } catch {
      setStatus("error");
      setMessage("Nu am putut trimite formularul. Încearcă din nou sau scrie-ne direct pe email.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/55 p-4 backdrop-blur-sm" role="presentation" onMouseDown={onClose}>
      <div className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-[var(--background)] p-6 shadow-2xl md:p-8" role="dialog" aria-modal="true" aria-labelledby="lead-title" onMouseDown={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)]" aria-label="Închide">
          <X className="size-4" />
        </button>
        <div className="pr-12">
          <div className="text-xs font-black uppercase tracking-[.18em] text-[var(--route)]">{role === "driver" ? "Pilot șofer" : "Pilot afacere"}</div>
          <h2 id="lead-title" className="mt-2 text-3xl font-black tracking-[-.04em]">{role === "driver" ? "Vezi dacă ruta ta se potrivește." : "Rezervă interesul pentru campanie."}</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">Nu te taxăm aici. Validăm cererea, confirmăm inventarul real și abia apoi discutăm o campanie pilot.</p>
        </div>
        {status === "success" ? (
          <div className="mt-8 rounded-3xl border border-[color:rgb(197_240_107_/_0.35)] bg-[color:rgb(197_240_107_/_0.12)] p-5 text-sm leading-6">{message}</div>
        ) : (
          <form className="mt-7 grid gap-4" onSubmit={submit}>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="name" required placeholder="Nume" />
              <Input name="email" required type="email" placeholder="Email" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="phone" placeholder="Telefon" />
              <Input name="city" defaultValue="București" placeholder="Oraș" />
            </div>
            {role === "business" && <Input name="company" placeholder="Afacere / companie" />}
            <textarea name="note" rows={4} placeholder={role === "driver" ? "Mașină + zonele prin care circuli de obicei" : "Ce vrei să promovezi și în ce zonă?"} className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--signal)] focus:ring-2 focus:ring-[color:rgb(197_240_107_/_0.18)]" />
            <Button type="submit" size="lg" disabled={status === "loading"} className="mt-1 w-full">{status === "loading" ? "Se trimite…" : role === "driver" ? "Înscrie ruta în pilot" : "Trimite cererea pilot"}</Button>
            {status === "error" && <p className="text-sm text-red-700">{message}</p>}
            <p className="text-xs leading-5 text-[var(--muted-foreground)]">Prin trimitere accepți să fii contactat strict pentru pilotul {siteConfig.name}. Nu vindem date și nu trimitem newslettere automate.</p>
          </form>
        )}
      </div>
    </div>
  );
}
