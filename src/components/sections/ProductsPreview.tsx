import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "Cerdak Basic", desc: "Pansement primaire sans adhésif. Disponible en 7 tailles (5×2,5 cm à 20×30 cm). Pour toute morphologie de plaie.", tag: "Standard" },
  { name: "Cerdak Aerocloth", desc: "Sachet céramique monté sur support non-tissé adhésif. Maintien optimal sur plaies peu exsudatives.", tag: "Adhésif tissu" },
  { name: "Cerdak Aerofilm", desc: "Monté sur film adhésif transparent imperméable. Permet la surveillance visuelle de la plaie.", tag: "Film imperméable" },
  { name: "Cerdak Cavity", desc: "Volume de granules augmenté pour les plaies très exsudatives. Capacité d'absorption maximale.", tag: "Haute capacité" },
  { name: "Cerdak Digit", desc: "Conçu spécifiquement pour les doigts et orteils. Forme anatomique sur adhésif tissu.", tag: "Anatomique" },
  { name: "Cerdak Tube", desc: "Découpe centrale pour passage de drain ou sonde. Maintien du pansement autour d'un tube.", tag: "Péri-stomie" },
];

export function ProductsPreview() {
  return (
    <section className="py-24 bg-[#eef6fb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--primary)] font-body mb-3">Gamme complète</p>
            <h2 className="text-4xl md:text-5xl font-display text-[var(--fg)]">Nos produits</h2>
          </div>
          <Link href="/produits" className="inline-flex items-center gap-2 text-sm font-body font-medium text-[var(--primary)] hover:gap-3 transition-all">
            Voir tous les produits <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:shadow-md transition-all">
              <span className="inline-block text-[11px] font-body font-medium uppercase tracking-wider px-2.5 py-1 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] mb-4">
                {p.tag}
              </span>
              <h3 className="text-xl font-display text-[var(--fg)] mb-2">{p.name}</h3>
              <p className="text-sm font-body text-[var(--muted)] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
