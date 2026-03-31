import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0b2234] via-[#154f72] to-[#1f7eaa]">
      {/* Geometric background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/10 blur-2xl" />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-body tracking-wider uppercase mb-8">
            <ShieldCheck size={12} />
            Dispositif médical · Marquage CE
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white leading-[1.05] mb-6">
            La régénération<br />
            <em className="text-[#6eb8da] not-italic">naturelle</em><br />
            des plaies.
          </h1>

          <p className="text-lg text-white/70 font-body font-light max-w-lg mb-10 leading-relaxed">
            Cerdak est un pansement céramique microporeux qui élimine bactéries et exsudats par adsorption physique — sans antibiotique, sans risque de résistance, sans altérer les tissus sains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/produits" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[var(--primary-dark)] font-body font-medium rounded-xl hover:bg-[#6eb8da] hover:text-white transition-all group">
              Découvrir la gamme
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white font-body font-medium rounded-xl hover:bg-white/10 transition-all">
              Devenir distributeur
            </Link>
          </div>
        </div>

        {/* Right: stat cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { stat: "91%", label: "Précision d'identification bactérienne (étude Graz)", sub: "vs 74% pour les prélèvements conventionnels" },
            { stat: "65%", label: "Porosité volumique", sub: "Force capillaire exceptionnelle" },
            { stat: "0", label: "Antibiotique topique", sub: "Zéro risque de résistance antimicrobienne" },
            { stat: "1 mm", label: "Diamètre moyen des granules", sub: "Surface d'adsorption maximale" },
          ].map((card) => (
            <div key={card.stat} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
              <p className="text-3xl font-display text-white mb-1">{card.stat}</p>
              <p className="text-xs font-body text-white/80 font-medium leading-snug mb-1">{card.label}</p>
              <p className="text-[11px] font-body text-white/45">{card.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#f9f7f3] to-transparent" />
    </section>
  );
}
