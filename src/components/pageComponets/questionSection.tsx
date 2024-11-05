import React from "react";
import { Card, CardContent } from "../ui/card";
import { Car, HelpCircle, MapPin } from "lucide-react";
import { Button } from "../ui/button";

const QuestionsSection = () => {
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold">
            Have Questions?
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            We&apos;re here to help.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <HelpCircle className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 font-semibold">Customer Service Center</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Find information or manage your PNC auto loan account
                </p>
                <Button variant="outline" className="mt-4">
                  Customer Service Center →
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 font-semibold">Visit Us</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Find a PNC location near you and stop by to see us
                </p>
                <Button variant="outline" className="mt-4">
                  Find a Branch →
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Car className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 font-semibold">Let&apos;s Meet</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Set up a discussion with a PNC Auto Loan specialist
                </p>
                <Button variant="outline" className="mt-4">
                  Schedule Appointment →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestionsSection;
