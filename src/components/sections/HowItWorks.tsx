export function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Absorption",
      body: "La structure microporeuse des granules céramiques exerce une force capillaire exceptionnelle. L'exsudat excédentaire est aspiré hors du lit de plaie et retenu définitivement à l'intérieur des billes.",
    },
    {
      n: "02",
      title: "Adsorption bactérienne",
      body: "Les micro-organismes présents dans l'exsudat adhèrent à la surface chargée de la céramique par comportement colloïdal. Cette liaison physique est non sélective — aucune résistance ne peut se développer.",
    },
    {
      n: "03",
      title: "Oxygénation",
      body: "Les granules restent suffisamment perméables pour permettre un apport continu d'oxygène atmosphérique. Indispensable pour les plaies diabétiques et vasculaires où l'apport systémique est compromis.",
    },
    {
      n: "04",
      title: "Cicatrisation optimisée",
      body: "Un microenvironnement humide et propre permet à la plaie de progresser de la phase inflammatoire vers la prolifération cellulaire, sans aucun agent chimique.",
    },
  ];

  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-[var(--primary)] font-body mb-3">Mécanisme d'action</p>
          <h2 className="text-4xl md:text-5xl font-display text-[var(--fg)] mb-4">Comment agit<br /><em>Cerdak</em> ?</h2>
          <p className="text-[var(--muted)] font-body">Un processus entièrement physique, sans principe actif chimique — pour une efficacité durable et sans risque de résistance.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative bg-white rounded-2xl p-7 border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-lg transition-all group">
              <p className="text-5xl font-display text-[var(--primary)]/20 group-hover:text-[var(--primary)]/40 transition-colors mb-4">{s.n}</p>
              <h3 className="text-xl font-display text-[var(--fg)] mb-3">{s.title}</h3>
              <p className="text-sm font-body text-[var(--muted)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
