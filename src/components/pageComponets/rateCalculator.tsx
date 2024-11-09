"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface LoanDetails {
  amount: number;
  term: number;
  creditScore: number | "";
  interestRate: number;
}

const INITIAL_LOAN: LoanDetails = {
  amount: 25000,
  term: 36,
  creditScore: "",
  interestRate: 5.99,
};

const TERM_RANGE = { min: 12, max: 72, step: 12 };

export default function AutoLoanCalculator() {
  const [loanType, setLoanType] = useState<"new" | "used">("new");
  const [loan, setLoan] = useState<LoanDetails>(INITIAL_LOAN);

  useEffect(() => {
    const baseRate = loanType === "new" ? 4.99 : 5.99;
    const creditScoreAdjustment = loan.creditScore
      ? (700 - Number(loan.creditScore)) * 0.01
      : 0;
    setLoan((prev) => ({
      ...prev,
      interestRate: Math.max(baseRate + creditScoreAdjustment, 0),
    }));
  }, [loan.creditScore, loanType]);

  const calculateMonthlyPayment = (
    amount: number,
    months: number,
    rate: number
  ): number => {
    const monthlyRate = rate / 100 / 12;
    return amount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -months)));
  };

  const monthlyPayment = calculateMonthlyPayment(
    loan.amount,
    loan.term,
    loan.interestRate
  );
  const totalInterest = (monthlyPayment * loan.term - loan.amount).toFixed(2);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoan((prev) => ({
      ...prev,
      [name]:
        name === "creditScore" ? (value ? Number(value) : "") : Number(value),
    }));
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold">Auto Loan Calculator</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Estimated rates, payments, and loan amounts are based on figures and
          the credit rating you have selected.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Tabs
              value={loanType}
              onValueChange={(value: string) =>
                setLoanType(value as "new" | "used")
              }
            >
              <TabsList>
                <TabsTrigger value="new">New Auto</TabsTrigger>
                <TabsTrigger value="used">Used Auto</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-4">
              {[
                {
                  label: "Loan Amount",
                  name: "amount",
                  placeholder: "$25,000",
                  type: "number",
                },
                {
                  label: "Credit Score",
                  name: "creditScore",
                  placeholder: "Enter your credit score",
                  type: "number",
                },
              ].map(({ label, name, placeholder, type }) => (
                <div key={name}>
                  <Label htmlFor={name}>{label}</Label>
                  <Input
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    value={loan[name as keyof LoanDetails]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}

              <div>
                <Label>Term Length</Label>
                <Slider
                  min={TERM_RANGE.min}
                  max={TERM_RANGE.max}
                  step={TERM_RANGE.step}
                  value={[loan.term]}
                  onValueChange={([term]) =>
                    setLoan((prev) => ({ ...prev, term }))
                  }
                  className="my-4"
                />
                <div className="flex justify-between text-sm">
                  <span>{TERM_RANGE.min} months</span>
                  <span>{TERM_RANGE.max} months</span>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Selected Term Length: {loan.term} months
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">
                Estimated Monthly Payment
              </h3>
              <div className="mt-4 text-4xl font-bold">
                ${monthlyPayment.toFixed(2)}
              </div>
              <p className="text-sm text-muted-foreground">
                Estimated APR: {loan.interestRate.toFixed(2)}%
              </p>
              <div className="mt-6 space-y-2">
                {[
                  {
                    label: "Principal",
                    value: `$${loan.amount.toFixed(2)}`,
                  },
                  {
                    label: "Term Length",
                    value: `${loan.term} months`,
                  },
                  {
                    label: "Total Interest",
                    value: `$${totalInterest}`,
                  },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-6 w-full">Apply Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
