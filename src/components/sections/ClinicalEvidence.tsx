export function ClinicalEvidence() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--primary)] font-body mb-3">Preuves cliniques</p>
          <h2 className="text-4xl md:text-5xl font-display text-[var(--fg)] mb-6">Un produit validé<br /><em>par la recherche</em></h2>
          <p className="text-[var(--muted)] font-body leading-relaxed mb-8">
            Cerdak n'est pas simplement innovant — il est documenté. Une étude indépendante menée à l'Université de Graz a démontré ses propriétés supérieures de liaison bactérienne, ouvrant la voie à une utilisation diagnostique en plus du soin.
          </p>
          <ul className="space-y-4">
            {[
              { label: "Plaies aiguës", detail: "Post-opératoires, traumatiques, brûlures superficielles" },
              { label: "Plaies chroniques", detail: "Ulcères veineux, artériels, escarres, plaies diabétiques" },
              { label: "Prévention de l'infection", detail: "Réduction de la charge bactérienne sans antibiotique" },
              { label: "Péri-stomie", detail: "Gestion des fuites autour des drains et sondes" },
            ].map((item) => (
              <li key={item.label} className="flex gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-body font-medium text-[var(--fg)]">{item.label}</p>
                  <p className="text-xs font-body text-[var(--muted)]">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Quote card */}
        <div className="bg-[var(--primary-dark)] rounded-3xl p-10 text-white">
          <p className="text-4xl font-display text-[#6eb8da] mb-6">"</p>
          <blockquote className="text-xl font-display font-light leading-relaxed mb-8 text-white/90">
            La liaison bactérienne de Cerdak présente une précision d'identification de 91 %, contre 74 % pour les prélèvements conventionnels par écouvillonnage.
          </blockquote>
          <p className="text-xs font-body text-white/50 uppercase tracking-wider">Étude indépendante — Université de Graz, Autriche</p>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {[["91%", "Précision bact."], ["0", "Résistance induite"], ["≥24h", "Durée de port"]].map(([v, l]) => (
              <div key={l}>
                <p className="text-2xl font-display text-white">{v}</p>
                <p className="text-[11px] font-body text-white/50 mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
