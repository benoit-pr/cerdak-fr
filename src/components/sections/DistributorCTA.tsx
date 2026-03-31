import Link from "next/link";
import { ArrowRight, Building2, Package, FileText } from "lucide-react";

export function DistributorCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0b2234] to-[#1f7eaa] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid2" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid2)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#6eb8da] font-body mb-4">Opportunité de distribution</p>
        <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
          Distribuez Cerdak<br />en France
        </h2>
        <p className="text-lg text-white/70 font-body font-light max-w-2xl mx-auto mb-14">
          Nous recherchons des distributeurs et partenaires logistiques pour développer la présence de Cerdak sur le marché français. Catalogue, tarifs et support réglementaire disponibles sur demande.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-14">
          {[
            { icon: Package, title: "Gamme complète", body: "6 références adaptées à toutes les typologies de plaies" },
            { icon: FileText, title: "Support réglementaire", body: "Documentation CE, fiches techniques et protocoles cliniques fournis" },
            { icon: Building2, title: "Partenariat dédié", body: "Accompagnement commercial et formation produit inclus" },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-left">
              <Icon size={22} className="text-[#6eb8da] mb-4" />
              <p className="text-base font-display text-white mb-2">{title}</p>
              <p className="text-sm font-body text-white/60">{body}</p>
            </div>
          ))}
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--primary-dark)] font-body font-medium text-base rounded-xl hover:bg-[#6eb8da] hover:text-white transition-all group">
          Soumettre une demande de partenariat
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
