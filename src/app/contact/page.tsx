import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = { title: "Devenir distributeur", description: "Contactez Cerdak France pour une demande de partenariat distribution ou d'information produit." };

export default function ContactPage() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-20">
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--primary)] font-body mb-3">Partenariat</p>
          <h1 className="text-5xl font-display text-[var(--fg)] mb-6">Devenir distributeur<br /><em>Cerdak en France</em></h1>
          <p className="text-[var(--muted)] font-body leading-relaxed mb-10 max-w-md">
            Nous recherchons des partenaires distributeurs sur l'ensemble du territoire français — grossistes en matériel médical, centrales d'achats hospitalières, groupements de soins.
          </p>
          <div className="space-y-6">
            {[
              { title: "Ce que nous fournissons", items: ["Documentation réglementaire CE complète", "Fiches techniques et protocoles cliniques", "Formation produit pour vos équipes", "Support commercial dédié", "Échantillons et kits de démonstration"] },
              { title: "Ce que nous recherchons", items: ["Expérience en dispositifs médicaux / wound care", "Réseau existant : hôpitaux, cliniques, EHPAD, HAD", "Capacité logistique de distribution nationale ou régionale"] },
            ].map((s) => (
              <div key={s.title} className="bg-[#eef6fb] rounded-2xl p-6">
                <h3 className="text-base font-display text-[var(--fg)] mb-3">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((i) => (<li key={i} className="flex items-center gap-2.5 text-sm font-body text-[var(--muted)]"><span className="w-1 h-1 rounded-full bg-[var(--primary)] inline-block" />{i}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
