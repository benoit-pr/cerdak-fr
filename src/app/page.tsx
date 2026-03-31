import { HeroSection } from "@/components/sections/HeroSection";
import { ProofBar } from "@/components/sections/ProofBar";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductsPreview } from "@/components/sections/ProductsPreview";
import { ClinicalEvidence } from "@/components/sections/ClinicalEvidence";
import { DistributorCTA } from "@/components/sections/DistributorCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofBar />
      <HowItWorks />
      <ProductsPreview />
      <ClinicalEvidence />
      <DistributorCTA />
    </>
  );
}
