import type { Metadata } from "next";

export const metadata: Metadata = { title: "Clinique", description: "Protocoles d'utilisation clinique des pansements Cerdak pour plaies aiguës et chroniques." };

export default function CliniquerPage() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-widest text-[var(--primary)] font-body mb-3">Utilisation clinique</p>
        <h1 className="text-5xl md:text-6xl font-display text-[var(--fg)] mb-6">Protocoles cliniques</h1>
        <p className="text-lg text-[var(--muted)] font-body max-w-2xl mb-16">
          Cerdak s'intègre dans les protocoles standard de soins des plaies. Voici les recommandations d'utilisation pour les équipes soignantes.
        </p>

        {/* Indications */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { type: "Plaies aiguës", items: ["Plaies chirurgicales post-opératoires", "Plaies traumatiques", "Brûlures superficielles", "Abrasions étendues", "Greffes cutanées"] },
            { type: "Plaies chroniques", items: ["Ulcères veineux de jambe", "Ulcères artériels", "Pieds diabétiques", "Escarres (stades II-IV)", "Plaies tumorales"] },
          ].map((cat) => (
            <div key={cat.type} className="bg-white rounded-2xl border border-[var(--border)] p-8">
              <h2 className="text-2xl font-display text-[var(--fg)] mb-5">{cat.type}</h2>
              <ul className="space-y-2">
                {cat.items.map((i) => (<li key={i} className="flex items-center gap-3 text-sm font-body text-[var(--muted)]"><span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />{i}</li>))}
              </ul>
            </div>
          ))}
        </div>

        {/* Protocol steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-display text-[var(--fg)] mb-8">Protocole d'application</h2>
          <div className="space-y-4">
            {[
              { n: "1", title: "Préparation de la plaie", body: "Appliquer le protocole standard de préparation du lit de la plaie. Un débridement conventionnel peut être réalisé si nécessaire. Cerdak est compatible avec les agents de débridement." },
              { n: "2", title: "Application du pansement", body: "Placer le pansement Cerdak côté brillant sur la plaie (face non-adhérente). Couvrir l'intégralité de la surface. Plusieurs pansements peuvent être superposés (stacking) pour les plaies étendues ou très exsudatives." },
              { n: "3", title: "Maintien et surveillance", body: "Ne pas utiliser d'onguent ou d'agent topique — ils altèrent les propriétés d'absorption et d'adsorption de la céramique. Éviter les manipulations inutiles du lit de plaie pour préserver la régénération cellulaire." },
              { n: "4", title: "Remplacement du pansement", body: "Remplacer lorsque le pansement est saturé à 50–70 % (décoloration visible). Sans inspection : toutes les 24h pour les plaies très exsudatives, toutes les 24–72h pour les plaies modérées à peu exsudatives." },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-2xl border border-[var(--border)] p-7 flex gap-6">
                <span className="text-4xl font-display text-[var(--primary)]/25 flex-shrink-0 w-12">{s.n}</span>
                <div>
                  <h3 className="text-xl font-display text-[var(--fg)] mb-2">{s.title}</h3>
                  <p className="text-sm font-body text-[var(--muted)] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contre-indications */}
        <div className="bg-[#fff8f0] border border-[#e5d8c4] rounded-2xl p-8">
          <h2 className="text-2xl font-display text-[var(--fg)] mb-5">Précautions & contre-indications</h2>
          <ul className="space-y-3">
            {[
              "Ne pas découper les pansements Cerdak — utiliser la taille adaptée parmi la gamme disponible.",
              "Ne pas appliquer simultanément un onguent, crème ou agent topique.",
              "En cas de volume de fluide très élevé, privilégier Cerdak Cavity.",
              "Respecter les principes chirurgicaux standard de préparation de la plaie avant application.",
            ].map((i) => (<li key={i} className="flex items-start gap-3 text-sm font-body text-[var(--muted)]"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />{i}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}
