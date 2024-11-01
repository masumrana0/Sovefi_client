import { CircleDollarSign, Clock, Percent, Shield } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl mb-2">Low rates. Great service. That is</h2>
        <p className="text-3xl font-bold text-primary">
          Lending Uncomplicated.®
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <FeatureCard
          icon={<CircleDollarSign className="w-12 h-12 text-primary" />}
          title="Get the low rate you deserve."
          description="Whether your credit is good or excellent, get a low-interest, fixed-rate loan, at amounts from $5,000 to $100,000, for practically anything you want."
        />
        <FeatureCard
          icon={<Clock className="w-12 h-12 text-primary" />}
          title="We can fund your loan as soon as the day you apply!"
          description="You're in control of this loan process with LightStream. You choose your funding date, and you can even have funds deposited into your account on the same day you apply."
        />
        <FeatureCard
          icon={<Shield className="w-12 h-12 text-primary" />}
          title="No appraisal, or restrictions on age or mileage."
          description="At LightStream, we're all about getting rid of hassles and red tape. We make it easy for you to get a great deal on the car you want. We call it Lending Uncomplicated.®"
        />
        <FeatureCard
          icon={<Percent className="w-12 h-12 text-primary" />}
          title="Experience the refreshingly simple LightStream loan."
          description="Check your rate, then apply from your smartphone, tablet or computer and get a low rate on our virtually paperless loan, from $5,000 to $100,000."
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 p-6">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
