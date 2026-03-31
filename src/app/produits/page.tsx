import type { Metadata } from "next";

export const metadata: Metadata = { title: "Produits", description: "Découvrez la gamme complète de pansements céramiques Cerdak." };

const products = [
  { name: "Cerdak Basic", tag: "Pansement primaire", desc: "Pansement sans adhésif constitué de granules céramiques microporeuses dans une enveloppe en fibres synthétiques non-tissées. Peut être superposé (stacking) pour les plaies très exsudatives.", sizes: ["5×2,5 cm", "7,5×5 cm", "10×10 cm", "10×20 cm", "15×20 cm", "20×20 cm", "20×30 cm"], indications: ["Plaies chirurgicales", "Plaies traumatiques", "Ulcères veineux", "Escarres"] },
  { name: "Cerdak Aerocloth", tag: "Adhésif tissu", desc: "Sachet céramique monté sur support non-tissé adhésif. Maintien optimal sans pansement secondaire sur les plaies modérément exsudatives.", sizes: ["5×5 cm", "7,5×10 cm", "10×15 cm", "10×20 cm"], indications: ["Plaies post-opératoires", "Abrasions", "Zones difficiles à maintenir"] },
  { name: "Cerdak Aerofilm", tag: "Film imperméable", desc: "Sachet céramique sur film transparent imperméable. Permet la surveillance visuelle continue et protège contre les fluides externes.", sizes: ["5×5 cm", "7,5×10 cm", "10×15 cm"], indications: ["Zones humides", "Surveillance rapprochée", "Usage ambulatoire"] },
  { name: "Cerdak Cavity", tag: "Haute capacité", desc: "Volume de granules augmenté pour les plaies excavées, fistules, et plaies massivement exsudatives.", sizes: ["Sur demande"], indications: ["Plaies cavitaires", "Fistules", "Plaies très exsudatives"] },
  { name: "Cerdak Digit", tag: "Anatomique", desc: "Forme anatomique spécifique aux doigts et orteils. Montage sur adhésif tissu avec découpe adaptée.", sizes: ["Taille unique"], indications: ["Plaies digitales", "Post-amputation partielle", "Soins podologiques"] },
  { name: "Cerdak Tube", tag: "Péri-stomie", desc: "Découpe centrale permettant le passage d'un drain, d'une sonde ou d'un cathéter.", sizes: ["Ø 1 cm", "Ø 1,5 cm"], indications: ["Sites de drain", "Péri-stomie", "Cathéters sous-cutanés"] },
];

export default function ProduitsPage() {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-widest text-[var(--primary)] font-body mb-3">Gamme Cerdak</p>
      <h1 className="text-5xl md:text-6xl font-display text-[var(--fg)] mb-6">Nos produits</h1>
      <p className="text-lg text-[var(--muted)] font-body max-w-2xl mb-16">Six références céramiques pour couvrir l'ensemble des typologies de plaies.</p>
      <div className="space-y-6">
        {products.map((p) => (
          <div key={p.name} className="bg-white rounded-2xl border border-[var(--border)] p-8 grid md:grid-cols-3 gap-8 hover:shadow-md transition-all">
            <div className="md:col-span-2">
              <span className="inline-block text-[11px] font-body font-medium uppercase tracking-wider px-2.5 py-1 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] mb-4">{p.tag}</span>
              <h2 className="text-2xl font-display text-[var(--fg)] mb-3">{p.name}</h2>
              <p className="text-sm font-body text-[var(--muted)] leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.indications.map((i) => (<span key={i} className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)] font-body">{i}</span>))}
              </div>
            </div>
            <div>
              <p className="text-xs font-body font-medium uppercase tracking-wider text-[var(--fg)] mb-3">Tailles disponibles</p>
              <ul className="space-y-1.5">{p.sizes.map((s) => (<li key={s} className="text-sm font-body text-[var(--muted)] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[var(--primary)] inline-block" />{s}</li>))}</ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
