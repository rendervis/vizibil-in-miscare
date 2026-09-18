import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/landing/logo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: "Cum colectează și folosește Vizibil în Mișcare datele trimise prin formularele pentru afaceri și șoferi.",
  alternates: { canonical: "/confidentialitate" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <div className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-16">
        <Link href="/"><Logo /></Link>
        <div className="mt-14 text-xs font-black uppercase tracking-[.16em] text-[var(--route)]">Vizibil în Mișcare</div>
        <h1 className="font-display mt-4 text-5xl font-extrabold tracking-[-.05em]">Politica de confidențialitate</h1>
        <div className="mt-8 grid gap-7 text-sm leading-7 text-[var(--ink)]/68">
          <p>Operatorul site-ului este RENDERNEXT S.R.L. Pentru întrebări privind datele trimise prin acest site ne poți contacta la <a className="font-bold underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
          <section><h2 className="text-lg font-black text-[var(--ink)]">Ce date colectăm</h2><p className="mt-2">Prin formularele pentru afaceri și șoferi putem colecta nume, adresă de email, telefon, oraș, numele companiei și informațiile pe care alegi să ni le trimiți despre o campanie, mașină sau traseu general.</p></section>
          <section><h2 className="text-lg font-black text-[var(--ink)]">De ce folosim datele</h2><p className="mt-2">Folosim datele pentru a răspunde solicitării tale, pentru a te contacta în legătură cu o campanie sau înscriere relevantă. Nu vindem datele transmise prin formulare.</p></section>
          <section><h2 className="text-lg font-black text-[var(--ink)]">Analytics</h2><p className="mt-2">Site-ul poate folosi instrumente de analytics pentru a înțelege ce pagini și pași sunt utili vizitatorilor. Configurația de cookies și consimțământ trebuie să reflecte instrumentele efectiv activate pe site.</p></section>
          <section><h2 className="text-lg font-black text-[var(--ink)]">Trasee și localizare</h2><p className="mt-2">Site-ul public nu colectează în prezent un istoric GPS continuu. Dacă produsul va activa în viitor învățarea traseelor, politica va fi actualizată înainte de colectarea unor astfel de date, inclusiv cu informații despre scop, retenție și acces.</p></section>
          <section><h2 className="text-lg font-black text-[var(--ink)]">Drepturile tale</h2><p className="mt-2">Pentru acces, corectare sau ștergere a datelor pe care ni le-ai transmis, scrie-ne la adresa de contact de mai sus.</p></section>
          <p className="rounded-2xl border border-[var(--ink)]/10 bg-white/60 p-4">Această politică acoperă site-ul public și formularele actuale. Înaintea lansării funcțiilor complete de marketplace, plăți și localizare, documentația juridică va trebui extinsă pentru acele funcții.</p>
        </div>
      </div>
    </main>
  );
}
