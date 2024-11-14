import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Component() {
  return (
    <div className="w-full my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[60vh]">
        <div className="bg-primary p-8 md:p-16 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            About <span className="font-normal">Us</span>
          </h1>
          <p className="text-white text-lg">
            What sets <span className="font-medium">Sovefi</span> apart
          </p>
        </div>
        <div className="relative h-[300px] md:h-full">
          <Image
            src="/assets/about.jpg"
            alt="Office environment"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Accordion Section */}
      <div className="max-w-6xl mx-auto p-8 my-3">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="meet-lightstream">
                <AccordionTrigger className="hover:no-underline">
                  Meet LightStream
                </AccordionTrigger>
                <AccordionContent>
                  Content for Meet LightStream section
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="press-inquiries">
                <AccordionTrigger className="hover:no-underline">
                  Press Inquiries
                </AccordionTrigger>
                <AccordionContent>
                  Content for Press Inquiries section
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="plant-tree">
                <AccordionTrigger className="hover:no-underline">
                  We Plant a Tree With Every Loan
                </AccordionTrigger>
                <AccordionContent>
                  Content for Tree Planting section
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="lightstream-loans">
                <AccordionTrigger className="hover:no-underline">
                  LightStream Loans
                </AccordionTrigger>
                <AccordionContent>
                  Content for LightStream Loans section
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="customers-say">
                <AccordionTrigger className="hover:no-underline">
                  What Our Customers Say
                </AccordionTrigger>
                <AccordionContent>
                  Content for Customer Testimonials section
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="rate-beat">
                <AccordionTrigger className="hover:no-underline">
                  Rate Beat Program
                </AccordionTrigger>
                <AccordionContent>
                  Content for Rate Beat Program section
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="loan-experience">
                <AccordionTrigger className="hover:no-underline">
                  Loan Experience Guarantee
                </AccordionTrigger>
                <AccordionContent>
                  Content for Loan Experience Guarantee section
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
