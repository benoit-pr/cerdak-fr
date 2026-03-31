"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { clsx } from "clsx";

const schema = z.object({
  type: z.enum(["distributeur", "achat_hospitalier", "autre"]),
  societe: z.string().min(2, "Nom de société requis"),
  nom: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  region: z.string().min(1, "Région requise"),
  message: z.string().min(20, "Merci de détailler votre demande (min. 20 caractères)"),
  rgpd: z.literal(true, { errorMap: () => ({ message: "Vous devez accepter la politique de confidentialité" }) }),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // POST to /api/contact
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    if (res.ok) setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-20 text-center">
        <CheckCircle size={48} className="text-[var(--primary)] mb-6" />
        <h2 className="text-3xl font-display text-[var(--fg)] mb-3">Demande envoyée</h2>
        <p className="text-[var(--muted)] font-body max-w-sm">Nous vous répondrons dans les 48 heures ouvrées. Pensez à vérifier vos courriers indésirables.</p>
      </div>
    );
  }

  const field = "w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white font-body text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all";
  const label = "block text-xs font-body font-medium text-[var(--fg)] mb-1.5 uppercase tracking-wide";
  const err = "text-xs text-red-500 mt-1 font-body";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl border border-[var(--border)] p-8 space-y-6">
      <h2 className="text-2xl font-display text-[var(--fg)]">Soumettre une demande</h2>

      <div>
        <label className={label}>Type de demande</label>
        <select {...register("type")} className={field}>
          <option value="distributeur">Distributeur / Grossiste</option>
          <option value="achat_hospitalier">Achat hospitalier / centrale d'achats</option>
          <option value="autre">Autre</option>
        </select>
        {errors.type && <p className={err}>{errors.type.message}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Société *</label>
          <input {...register("societe")} placeholder="Nom de votre société" className={field} />
          {errors.societe && <p className={err}>{errors.societe.message}</p>}
        </div>
        <div>
          <label className={label}>Nom & Prénom *</label>
          <input {...register("nom")} placeholder="Votre nom" className={field} />
          {errors.nom && <p className={err}>{errors.nom.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Email *</label>
          <input {...register("email")} type="email" placeholder="contact@societe.fr" className={field} />
          {errors.email && <p className={err}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={label}>Téléphone</label>
          <input {...register("telephone")} type="tel" placeholder="+33 6 00 00 00 00" className={field} />
        </div>
      </div>

      <div>
        <label className={label}>Région / Zone couverte *</label>
        <input {...register("region")} placeholder="Ex : Île-de-France, Grand-Est, national…" className={field} />
        {errors.region && <p className={err}>{errors.region.message}</p>}
      </div>

      <div>
        <label className={label}>Message *</label>
        <textarea {...register("message")} rows={4} placeholder="Décrivez votre activité, votre réseau existant et ce qui vous intéresse dans Cerdak…" className={clsx(field, "resize-none")} />
        {errors.message && <p className={err}>{errors.message.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" {...register("rgpd")} className="mt-0.5 accent-[var(--primary)]" />
          <span className="text-xs font-body text-[var(--muted)] leading-relaxed">
            J'accepte la politique de confidentialité et consens au traitement de mes données dans le cadre de cette demande de partenariat. (RGPD)
          </span>
        </label>
        {errors.rgpd && <p className={err}>{errors.rgpd.message}</p>}
      </div>

      <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--primary)] text-white font-body font-medium rounded-xl hover:bg-[var(--primary-dark)] transition-all disabled:opacity-60">
        {loading ? "Envoi en cours…" : (<><Send size={16} /> Envoyer la demande</>)}
      </button>
    </form>
  );
}
