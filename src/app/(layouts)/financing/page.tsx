import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, DollarSign, PackagePlusIcon, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col mt-24">
      {/* Hero Section */}
      <section className="relative px-4 py-12 md:py-24">
        <div className="container mx-auto grid gap-8 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/assets/car popup.png"
              alt="White Car"
              width={600}
              height={400}
              className="object-contain"
            />
            <div className="absolute left-4 top-4 rounded-lg p-4 shadow-lg">
              <p className="text-sm text-muted-foreground">Monthly Payment*</p>
              <p className="text-3xl font-bold">
                $395<span className="text-sm">/mo</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">
              FINANCING MADE EASY
            </h1>
            <p className="text-xl text-muted-foreground">
              Get pre-qualified for a Carvana auto loan before you shop. No hit
              to your credit score.
            </p>
            <Button className="w-fit" size="lg">
              Get Your Terms
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why choose Carvana?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Car className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-semibold">25,000+ Quality vehicles</h3>
                <p className="text-sm text-muted-foreground">
                  All vehicles are inspected, reconditioned, and you can see the
                  CARFAX® for free. Plus, we have a 7-day return policy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <PackagePlusIcon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-semibold">
                  Convenient pickup or delivery
                </h3>
                <p className="text-sm text-muted-foreground">
                  Experience a unique pick up at one of our Car Vending Machines
                  or have it delivered right to your driveway.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <DollarSign className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-semibold">Trade in your car</h3>
                <p className="text-sm text-muted-foreground">
                  Apply your trade-in value to help reduce your down payment.
                  Save time with our quick appraisal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unlock Payments Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold">
            Unlock real payments on over 25,000 vehicles
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/assets/car sale-1.jpg"
                alt="Car 1"
                width={200}
                height={150}
                className="rounded-lg"
              />
              <Image
                src="/assets/car sale-2.jpg"
                alt="Car 2"
                width={200}
                height={150}
                className="rounded-lg"
              />
              <Image
                src="/assets/car slae-3.jpg"
                alt="Car 3"
                width={200}
                height={150}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Fast and easy</h3>
                <p className="text-muted-foreground">
                  Answer a few quick questions and in less than 2 minutes
                  you&apos;re pre-qualified! At 100% online.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">No hit to your credit</h3>
                <p className="text-muted-foreground">
                  All credit types welcome and you&apos;ll see your approval
                  status right away!
                </p>
              </div>
              <Button size="lg">See Your Terms</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Real customers. Real Reviews. Real Happy.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">
                    &quot;The process was so simple and I got it financed
                    through Carvana for $0 down. Any concerns I had were taken
                    care of and I would love to tell like a valued
                    customer!&quot;
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold">Thomas M.</p>
                    <p className="text-muted-foreground">from AZ</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-qualification Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Why 80% of customers finance with Carvana
              </h2>
              <p className="text-lg text-muted-foreground">
                Shop our entire inventory with real, transparent pricing. Know
                your cash down and monthly payment for all vehicles before you
                purchase.
              </p>
              <p className="font-semibold">
                That&apos;s shopping with confidence.
              </p>
              <Button size="lg">Get Pre-qualified Today</Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/assets/mobile card.jpg"
                alt="Happy Customer"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-2xl font-bold">We&apos;re here to help</h2>
          <p className="text-muted-foreground">
            Have questions about financing? Chat with us and we&apos;ll help get
            you covered.
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
