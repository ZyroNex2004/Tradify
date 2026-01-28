import PublicLayout from "../layouts/PublicLayout";
import Hero from "../Components/Hero";
import TrustSection from "../Components/TrustSection";
import PricingSection from "../Components/PricingSection";
import EducationSection from "../Components/EducationSection";
import OpenAccount from "../Components/OpenAccount";

export default function Home() {
  return (
    <PublicLayout>
      <div className="bg-white">

        <Hero />

        <TrustSection />

      

        <PricingSection />

        <EducationSection />

        <OpenAccount />

      </div>
    </PublicLayout>
  );
}
