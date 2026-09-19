import { ArrowRight, BadgeCheck, MapPinned, Magnet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MediaFrame } from "@/components/landing/media-frame";
import { media } from "@/config/media";

const steps = [
  {
    icon: MapPinned,
    n: "01",
    title: "Afacerea alege zona și mașinile",
    body: "Cauți zona în care vrei să fii văzut și alegi mașini ale căror trasee obișnuite se potrivesc cu publicul tău.",
    image: media.home.businessSelects,
    alt: "Proprietară de afacere locală alegând pe laptop o mașină pentru o campanie de publicitate locală",
  },
  {
    icon: Magnet,
    n: "02",
    title: "Reclama se montează detașabil",
    body: "Materialul publicitar se aplică pe vehicul pentru perioada agreată. Folosim un format simplu, detașabil și ușor de verificat.",
    image: media.home.magnetInstalled,
    alt: "Montarea unui magnet publicitar detașabil pe portiera unei mașini",
  },
  {
    icon: BadgeCheck,
    n: "03",
    title: "Mașina își continuă traseul normal",
    body: "Șoferul își face drumurile obișnuite. Verificăm pornirea și desfășurarea campaniei, fără kilometri făcuți doar de dragul reclamei.",
    image: media.home.driverRoute,
    alt: "Șofer conducând normal prin București cu reclamă detașabilă pe mașină",
  },
];

export function HowItWorks() {
  return (
    <section id="cum-functioneaza" className="paper-grid bg-[var(--paper)] py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="border-[var(--ink)]/10 bg-white/65 text-[var(--ink)]/68">În 3 pași</Badge>
          <h2 className="font-display mt-5 text-5xl font-extrabold leading-[.94] tracking-[-.055em] max-sm:text-[2.6rem] max-sm:tracking-[-.045em] md:text-6xl lg:text-7xl">Cum funcționează publicitatea pe mașini</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--ink)]/70">Alegi zona și mașinile potrivite, reclama se montează detașabil, iar șoferii își continuă traseele obișnuite prin București.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map(({ icon: Icon, n, title, body, image, alt }) => (
            <article key={n} className="overflow-hidden rounded-[2rem] border border-[var(--ink)]/10 bg-white/70 shadow-[0_18px_70px_rgba(31,24,48,.06)]">
              <MediaFrame src={image} alt={alt} className="aspect-[4/5] sm:aspect-[4/3] sm:[&_img]:object-bottom" />
              <div className="p-5 sm:p-6 md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div className="grid size-11 place-items-center rounded-2xl bg-[var(--ink)] text-[var(--signal)]"><Icon className="size-5" /></div>
                  <span className="text-xs font-black tracking-[.16em] text-[var(--route)]">{n}</span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold tracking-[-.025em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--ink)]/70">{body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center text-sm font-extrabold text-[var(--route)]">Traseul există înaintea reclamei <ArrowRight className="ml-2 size-4" /></div>
      </div>
    </section>
  );
}
