import FeaturesSection from "@/components/pageComponets/features";
import HeroSection from "@/components/pageComponets/hero";
import RateCalculator from "@/components/pageComponets/rateCalculator";
import TestimonialsSection from "@/components/pageComponets/testimonialsSection";

export default function Home() {
  return (
    <div>
      <div className="mt-24">
        <HeroSection />
        <FeaturesSection />
        <RateCalculator />
        <TestimonialsSection />
      </div>
    </div>
  );
}
