import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="text-2xl font-display text-white mb-3">Cerdak France</p>
          <p className="text-sm leading-relaxed max-w-xs">
            Pansement céramique microporeux de nouvelle génération pour le traitement des plaies aiguës et chroniques.
          </p>
          <p className="text-xs text-white/40 mt-4">Dispositif médical — Marquage CE</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Navigation</p>
          <ul className="space-y-2 text-sm">
            {[["Produits", "/produits"],["La Science", "/la-science"],["Clinique", "/clinique"],["Contact", "/contact"]].map(([l,h]) => (
              <li key={h}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:france@cerdak.com" className="hover:text-white transition-colors">france@cerdak.com</a></li>
            <li className="text-white/50 text-xs mt-4">Fabricant :<br/>Cerdak (Pty) Ltd<br/>Mtunzini, Afrique du Sud</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-xs text-white/30">
        <span>© {new Date().getFullYear()} Cerdak. Tous droits réservés.</span>
        <span>Mentions légales · Politique de confidentialité · RGPD</span>
      </div>
    </footer>
  );
}
