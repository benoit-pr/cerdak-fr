export function ProofBar() {
  return (
    <section className="bg-white border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {[
          "Marquage CE",
          "Fabriqué en Afrique du Sud",
          "Étude clinique publiée — Université de Graz",
          "Compatible soins ambulatoires & hospitaliers",
          "Aucun résidu toxique",
        ].map((item) => (
          <span key={item} className="text-xs font-body font-medium text-[var(--muted)] uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] inline-block" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
