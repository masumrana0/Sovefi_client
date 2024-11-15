import dynamic from "next/dynamic";

const BuyACar = dynamic(() => import("@/components/pageComponets/buyACar"));
const FeaturesSection = dynamic(
  () => import("@/components/pageComponets/features"),
);
const HeroSection = dynamic(() => import("@/components/pageComponets/hero"));
const QuestionsSection = dynamic(
  () => import("@/components/pageComponets/questionSection"),
);
const RateCalculator = dynamic(
  () => import("@/components/pageComponets/rateCalculator"),
);
const Refineance = dynamic(
  () => import("@/components/pageComponets/refineance"),
);
const TestimonialsSection = dynamic(
  () => import("@/components/pageComponets/testimonialsSection"),
);
const Footer = dynamic(() => import("@/components/share/footer"));
const Navbar = dynamic(() => import("@/components/share/navbar"));

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-24">
        <HeroSection />
        <RateCalculator />
        <BuyACar />
        <Refineance />
        <QuestionsSection />
        <FeaturesSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
