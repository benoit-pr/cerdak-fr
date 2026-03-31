import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "Cerdak France — Pansements céramiques innovants", template: "%s | Cerdak France" },
  description: "Cerdak est un pansement céramique microporeux de pointe, conçu pour le traitement des plaies aiguës et chroniques. Découvrez notre gamme et devenez distributeur en France.",
  keywords: ["pansement céramique", "soin des plaies", "plaies chroniques", "dispositif médical", "distributeur médical France"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cerdak.fr",
    siteName: "Cerdak France",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
