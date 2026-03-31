import type { Metadata } from "next";

export const metadata: Metadata = { title: "La Science", description: "Comprendre le mécanisme d'action des pansements céramiques Cerdak — absorption, adsorption bactérienne, oxygénation." };

export default function LaSciencePage() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-widest text-[var(--primary)] font-body mb-3">Mécanisme d'action</p>
        <h1 className="text-5xl md:text-6xl font-display text-[var(--fg)] mb-6">La Science Cerdak</h1>
        <p className="text-lg text-[var(--muted)] font-body max-w-2xl mb-16">
          Un processus entièrement physique, sans principe actif chimique. Comprendre pourquoi Cerdak fonctionne — et pourquoi il ne génère aucune résistance antimicrobienne.
        </p>

        {/* Core science */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-display text-[var(--fg)] mb-5">La céramique microporeuse</h2>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              Cerdak est composé de granules céramiques sphériques d'un diamètre moyen de 1 mm, présentant une porosité de 65 % en volume. Ces granules sont conditionnées dans une enveloppe de fibres synthétiques non-tissées perméables, conçue pour usage médical.
            </p>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              La structure microporeuse génère une force capillaire exceptionnelle qui aspire l'exsudat excédentaire hors du lit de plaie, tout en maintenant l'humidité nécessaire à la régénération cellulaire.
            </p>
            <p className="text-[var(--muted)] font-body leading-relaxed">
              Contrairement aux pansements absorbants classiques, l'action de Cerdak n'est déclenchée que lorsque la quantité d'exsudat est suffisante pour entrer en contact avec les billes céramiques. Les plaies peu exsudatives ne s'assèchent pas.
            </p>
          </div>
          <div className="bg-[var(--primary-dark)] rounded-3xl p-10 text-white">
            <h3 className="text-2xl font-display text-white mb-6">Propriétés physiques clés</h3>
            <dl className="space-y-5">
              {[
                ["Diamètre des granules", "~1 mm en moyenne"],
                ["Porosité volumique", "65 %"],
                ["Action", "Physique — sans agent chimique"],
                ["Résistance antimicrobienne", "Nulle (liaison physique)"],
                ["Stérilité", "Sachet stérile"],
                ["Compatibilité", "Agents de débridement, soins locaux (sans onguent)"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-white/10 pb-3">
                  <dt className="text-sm font-body text-white/60">{k}</dt>
                  <dd className="text-sm font-body font-medium text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Adsorption */}
        <div className="bg-[#eef6fb] rounded-3xl p-10 mb-12">
          <h2 className="text-3xl font-display text-[var(--fg)] mb-5">Adsorption bactérienne — sans antibiotique</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-[var(--muted)] font-body leading-relaxed">
              Les micro-organismes présents dans l'exsudat adhèrent à la surface de la céramique par comportement colloïdal, combinant plusieurs caractéristiques physiques de la surface des billes. Cette action est <strong className="text-[var(--fg)]">non sélective</strong> : elle s'applique à bactéries, champignons et autres micro-organismes indifféremment — ce qui exclut tout développement de résistance.
            </p>
            <p className="text-[var(--muted)] font-body leading-relaxed">
              Contrairement aux agents antimicrobiens topiques, Cerdak n'induit aucun dommage aux structures fonctionnelles, n'émet pas d'endotoxines et ne sélectionne pas de souches résistantes. La réduction de la charge bactérienne permet à la plaie de sortir de la phase inflammatoire chronique pour progresser vers la prolifération cellulaire.
            </p>
          </div>
        </div>

        {/* Étude Graz */}
        <div className="bg-white border border-[var(--border)] rounded-3xl p-10">
          <p className="text-xs uppercase tracking-widest text-[var(--primary)] font-body mb-4">Référence scientifique</p>
          <h2 className="text-3xl font-display text-[var(--fg)] mb-4">Étude — Université de Graz</h2>
          <p className="text-[var(--muted)] font-body leading-relaxed max-w-3xl mb-6">
            Une étude indépendante menée à l'Université de Graz (Autriche) a évalué Cerdak comme dispositif de prélèvement bactérien. Les résultats ont montré une précision d'identification des souches bactériennes de <strong className="text-[var(--fg)]">91 %</strong>, contre 74 % pour les prélèvements par écouvillonnage conventionnel — validant la supériorité de la liaison bactérienne de la céramique.
          </p>
          <div className="flex flex-wrap gap-6">
            {[["91 %", "Précision Cerdak"], ["74 %", "Prélèvement classique"], ["+17 pts", "Delta de précision"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <p className="text-3xl font-display text-[var(--primary)]">{v}</p>
                <p className="text-xs font-body text-[var(--muted)] mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
