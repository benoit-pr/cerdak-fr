# Cerdak France — Site web Next.js 14

Site vitrine B2B pour le marché français, ciblant distributeurs médicaux et acheteurs hospitaliers.

## Stack technique

| Couche | Choix |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Formulaires | React Hook Form + Zod |
| Emails | Resend |
| Animations | Framer Motion (à intégrer) |
| Typo | Cormorant Garamond (display) + DM Sans (body) |
| Hébergement recommandé | Vercel (région EU) |

## Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Layout global (Navbar + Footer)
│   ├── globals.css                 # Variables CSS + Tailwind
│   ├── produits/page.tsx           # Catalogue produits
│   ├── la-science/page.tsx         # Mécanisme d'action
│   ├── clinique/page.tsx           # Protocoles cliniques
│   ├── contact/page.tsx            # Formulaire distributeur
│   └── api/contact/route.ts        # API email (Resend)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ProofBar.tsx
│       ├── HowItWorks.tsx
│       ├── ProductsPreview.tsx
│       ├── ClinicalEvidence.tsx
│       ├── DistributorCTA.tsx
│       └── ContactForm.tsx
└── lib/                            # Utilitaires (à compléter)
```

## Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer les variables d'environnement
cp .env.local.example .env.local
# → Renseigner RESEND_API_KEY (https://resend.com)

# 3. Lancer en développement
npm run dev
# → http://localhost:3000

# 4. Build production
npm run build
npm start
```

## Déploiement Vercel

```bash
npm i -g vercel
vercel --prod
```

Penser à ajouter `RESEND_API_KEY` dans les variables d'environnement Vercel.

## Pages

| Route | Contenu |
|---|---|
| `/` | Homepage : hero, proof bar, mécanisme, produits, étude clinique, CTA distributeur |
| `/produits` | Catalogue complet des 6 références avec tailles et indications |
| `/la-science` | Mécanisme d'action céramique, adsorption, étude Graz |
| `/clinique` | Protocoles d'application, indications, contre-indications |
| `/contact` | Formulaire de demande distributeur avec validation Zod + envoi Resend |

## Personnalisations prioritaires

### 1. Email destinataire (obligatoire)
Dans `src/app/api/contact/route.ts`, ligne `to:` :
```ts
to: ["france@cerdak.com"],  // ← remplacer par la vraie adresse
```

### 2. Logo
Remplacer le texte `Cerdak` dans `Navbar.tsx` par une balise `<Image>` Next.js pointant vers `/public/logo.svg`.

### 3. Images produits
Ajouter des photos dans `/public/images/` et les intégrer dans `ProductsPreview.tsx` et `/produits/page.tsx` via `<Image>` Next.js.

### 4. Domaine
Mettre à jour `metadataBase` dans `layout.tsx` avec le domaine final (`https://cerdak.fr` ou `https://fr.cerdak.com`).

### 5. Mentions légales
Créer `src/app/mentions-legales/page.tsx` et `src/app/politique-confidentialite/page.tsx` (obligatoire RGPD).

### 6. Animations Framer Motion
`framer-motion` est installé. Ajouter des `motion.div` dans HeroSection et HowItWorks pour des entrées progressives (stagger).

## Checklist lancement

- [ ] RESEND_API_KEY configurée
- [ ] Email destinataire mis à jour
- [ ] Logo SVG ajouté
- [ ] Mentions légales créées
- [ ] Politique de confidentialité créée
- [ ] Domaine configuré sur Vercel
- [ ] Google Analytics / Matomo ajouté (optionnel)
- [ ] Test formulaire contact en production
- [ ] Vérification mobile (responsive)
