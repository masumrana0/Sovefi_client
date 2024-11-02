import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2 min-h-[600px] bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col justify-center p-8 lg:p-16 text-white">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          Auto <span className="font-normal">refinancing</span>
        </h1>
        <div className="mb-8">
          <p className="text-3xl font-bold">from 7.19%*</p>
          <p className="text-sm mt-2">*Fixed rate with AutoPay</p>
          <p className="text-sm">Fixed rate 7.19% - 14.49% APR</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/applyLoans">
            {" "}
            <Button
              size="lg"
              className="bg-[#000080] hover:bg-[#000060] text-white"
            >
              APPLY NOW
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            SEE RATES & TERMS
          </Button>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <Image
          src="/assets/hero (2).jpg"
          alt="Happy couple sitting in car trunk"
          className="absolute inset-0 w-full h-full object-cover"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}
