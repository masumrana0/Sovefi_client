import React from "react";
import { Card, CardContent } from "../ui/card";
import { Building2, Car, ClipboardList } from "lucide-react";
import Link from "next/link";

const BuyACar = () => {
  return (
    <div>
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold">Buy A Car</h2>
          <p className="mt-2 text-muted-foreground">
            Shop new or used cars with the right lending solution for you. Apply
            today for an auto loan online, by phone, or at a branch.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">
                  Buy from a Dealer
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  With deals in hand, you can shop for your next vehicle from an
                  eligible dealer.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-block text-sm text-primary hover:underline"
                >
                  Learn More About Finding a Dealer →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <ClipboardList className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Buy Out a Lease</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  With a vehicle lease figured into your budget, explore your
                  options.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-block text-sm text-primary hover:underline"
                >
                  Learn More About Lease Options →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Car className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">
                  Buy from a Private Party
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  When it comes time to purchase from a private party, we can
                  help.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-block text-sm text-primary hover:underline"
                >
                  Learn More About Private Party Purchase →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyACar;
