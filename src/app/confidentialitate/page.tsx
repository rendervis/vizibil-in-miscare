import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/landing/logo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Confidențialitate — pilot",
  description: "Notă de confidențialitate pentru formularul pilot.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <div className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-16">
        <Link href="/"><Logo /></Link>
        <div className="mt-14 text-xs font-black uppercase tracking-[.16em] text-[var(--route)]">Pilot · draft operațional</div>
        <h1 className="font-display mt-4 text-5xl font-black tracking-[-.05em]">Confidențialitate</h1>
        <div className="mt-8 grid gap-7 text-sm leading-7 text-[var(--ink)]/65">
          <p>Această pagină este o notă minimală pentru etapa de validare, nu versiunea juridică finală a viitorului marketplace. Operatorul pilotului este RENDERNEXT S.R.L.; datele de contact sunt disponibile la <a className="font-bold underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
          <section><h2 className="text-lg font-black text-[var(--ink)]">Ce colectăm</h2><p className="mt-2">Prin formularele pilot: nume, email, telefon opțional, oraș, companie și informațiile pe care alegi să le trimiți despre traseu sau campanie.</p></section>
          <section><h2 className="text-lg font-black text-[var(--ink)]">De ce</h2><p className="mt-2">Exclusiv pentru a evalua interesul față de pilot, a răspunde solicitării și a contacta utilizatorii potriviți pentru o eventuală testare. Nu vindem aceste date.</p></section>
          <section><h2 className="text-lg font-black text-[var(--ink)]">Analytics</h2><p className="mt-2">Analytics-ul este opțional în proiect și se activează doar dacă operatorul configurează serviciul. Înainte de lansarea publică trebuie revizuită configurația de cookies/consimțământ conform instrumentelor efectiv activate.</p></section>
          <section><h2 className="text-lg font-black text-[var(--ink)]">Drepturi și ștergere</h2><p className="mt-2">Pentru acces, corectare sau ștergere a datelor transmise în pilot, contactează operatorul la adresa de mai sus.</p></section>
          <p className="rounded-2xl border border-[var(--ink)]/10 bg-white/60 p-4"><strong>Înainte de producție:</strong> această notă trebuie înlocuită/revizuită de consilierul juridic împreună cu termenii marketplace-ului, politica de localizare și retenția datelor GPS.</p>
        </div>
      </div>
    </main>
  );
}
