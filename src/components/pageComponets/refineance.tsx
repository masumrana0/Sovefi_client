import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Refineance = () => {
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold">Refinance Your Car</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Start saving by refinancing your auto loan
            </p>
            <Button size="lg" className="mt-6">
              Apply to Refinance Your Auto Loan
            </Button>
            <Image
              src="/assets/Refinance-Your-Ca.png"
              alt="Refinance illustration"
              width={300}
              height={300}
              className="mt-8"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refineance;
