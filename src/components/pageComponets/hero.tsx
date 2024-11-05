import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      <div className="relative h-[554px]">
        <Image
          src="/assets/car lone.jpeg"
          alt="Car financing"
          width={1920}
          height={500}
          className="absolute h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="max-w-7xl mx-auto flex h-full items-center px-4">
            <div className="max-w-xl rounded-lg bg-white/90 dark:bg-secondary p-6 backdrop-blur-sm text-black">
              <h1 className="text-3xl font-bold text-black dark:text-white">
                Auto Loans
              </h1>
              <p className="mt-2 text-muted-foreground text-black dark:text-white">
                Explore borrowing options for new or used cars. Try our helpful
                tools and calculators.
              </p>
              <Link href="/applyLoans">
                <Button className="mt-4" size="lg">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b text-white shadow-xl">
        <div className="max-w-7xl mx-auto flex gap-4 overflow-x-auto px-4 py-2">
          <Button className="bg-white text-black" variant="ghost">
            Buy A Car
          </Button>
          <Button className="bg-white text-black" variant="ghost">
            Refinance Your Car
          </Button>
          <Button className="bg-white text-black" variant="ghost">
            PNC Total Auto
          </Button>
          <Button className="bg-white text-black" variant="ghost">
            Have Questions?
          </Button>
          <Button variant="default" className="ml-auto">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
}
