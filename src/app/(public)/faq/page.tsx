import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl mt-24">
      <div className="grid gap-8 md:grid-cols-[1fr,300px]">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Auto Loan FAQs</h1>
            <p className="text-muted-foreground">
              Find answers to commonly asked questions about auto loans
            </p>
          </div>

          <Accordion type="multiple" className="space-y-4">
            <AccordionItem
              value="getting-started"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-lg font-semibold">
                Getting started
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">
                      How do I apply for a Wells Fargo Auto loan?
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Visit our auto loan application page to begin your
                      application process.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      How do I enroll in online banking?
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      You can enroll in online banking through our secure
                      website.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Where do I find my account number?
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Your account number can be found on your monthly
                      statement.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="understanding"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-lg font-semibold">
                Understanding your auto loan
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">
                      What is a simple interest loan?
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      A simple interest loan calculates interest based on your
                      daily principal balance.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      How much of my monthly payment is interest?
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      The amount of interest in each payment varies based on
                      your principal balance.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payments" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                Payments
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">How do I make a payment?</h3>
                    <p className="text-muted-foreground mt-1">
                      You can make payments online, by phone, or by mail.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      How do I set up automatic loan payments?
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      You can set up automatic payments through online banking.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                Still have questions?
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Auto Loan Customer Service
                  </h3>
                  <p className="text-xl font-semibold">113-232-2322</p>
                  <div className="text-sm text-muted-foreground mt-2">
                    <p>Mon - Thurs: 7 am - 10 pm</p>
                    <p>Fri: 7 am - 8 pm</p>
                    <p>Sat: 7 am - 5:30 pm</p>
                    <p className="mt-2">Central Time</p>
                  </div>
                </div>
                <Button className="w-full">Contact Us</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
