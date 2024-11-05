import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

const LoanCalculaor = () => {
  return (
    <div>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold">
            Compare auto lending options and determine your next steps
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Estimated rates, payments and loan amounts are based on figures and
            the credit rating you have selected
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <Tabs defaultValue="new">
                <TabsList>
                  <TabsTrigger value="new">New Auto</TabsTrigger>
                  <TabsTrigger value="used">Used Auto</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="loan-amount">Loan Amount</Label>
                  <Input id="loan-amount" placeholder="$25,000" type="text" />
                </div>
                <div>
                  <Label>Term Length</Label>
                  <Slider
                    defaultValue={[36]}
                    max={72}
                    step={12}
                    className="my-4"
                  />
                  <div className="flex justify-between text-sm">
                    <span>12 months</span>
                    <span>72 months</span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="credit-score">Credit Score</Label>
                  <Input
                    id="credit-score"
                    placeholder="Enter your credit score"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">
                  Estimated monthly payment
                </h3>
                <div className="mt-4 text-4xl font-bold">$431</div>
                <p className="text-sm text-muted-foreground">
                  Estimated APR: 5.99%
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Principal</span>
                    <span>$25,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Term length</span>
                    <span>60 months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total interest</span>
                    <span>$3,860</span>
                  </div>
                </div>
                <Button className="mt-6 w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculaor;
