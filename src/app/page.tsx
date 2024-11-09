import BuyACar from "@/components/pageComponets/buyACar";
import FeaturesSection from "@/components/pageComponets/features";
import HeroSection from "@/components/pageComponets/hero";
import QuestionsSection from "@/components/pageComponets/questionSection";
import RateCalculator from "@/components/pageComponets/rateCalculator";
import Refineance from "@/components/pageComponets/refineance";
import TestimonialsSection from "@/components/pageComponets/testimonialsSection";

export default function Home() {
  return (
    <div>
      <div className="mt-24">
        <HeroSection />
        <RateCalculator />
        <BuyACar />
        <Refineance />
        <QuestionsSection />
        <FeaturesSection />
        <TestimonialsSection />
      </div>
    </div>
  );
}
