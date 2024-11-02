"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  applicationType: z.string().min(1, "Please select an application type"),
  loanPurpose: z.string().min(1, "Please select a loan purpose"),
  referralSource: z.string().min(1, "Please select how you heard about us"),
  referralDetails: z.string().optional(),
  zipCode: z.string().min(5, "ZIP code must be 5 digits").max(5),
  loanAmount: z.string().min(1, "Please enter a loan amount"),
  loanTerm: z.string().min(1, "Please enter a loan term"),
  paymentMethod: z.enum(["autopay", "invoice"], {
    required_error: "Please select a payment method",
  }),
});

export default function ApplyLoans() {
  const [step, setStep] = React.useState(1);
  const [isBasicReqOpen, setIsBasicReqOpen] = React.useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "autopay",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (step < 4) {
      setStep(step + 1);
    } else {
      console.log(values);
    }
  }

  return (
    <div className="min-h-screen mt-24 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="mb-6 text-3xl font-bold text-primary">
            Loan Application
          </h1>
          <div className="mb-4 rounded border border-red-200 p-4 text-sm">
            <strong>Note:</strong> You can preview all pages of the application
            by clicking on the sections of the progress bar below. After you
            preview them, they must be completed in the order they appear.
          </div>
        </header>

        <div className="mb-8 flex">
          {[
            "Loan Information",
            "Personal Information",
            "Security Information",
            "Confirm and Submit",
          ].map((label, index) => (
            <div
              key={label}
              className={cn(
                "relative flex-1 p-4 text-center text-sm font-medium border-2",
                index + 1 === step
                  ? "bg-primary text-white"
                  : index + 1 < step
                    ? "bg-primary text-white"
                    : "bg-secondary",
                "clip-path-triangle",
              )}
            >
              {label}
            </div>
          ))}
        </div>

        <div className="rounded-lg p-6 shadow-sm">
          <Collapsible
            open={isBasicReqOpen}
            onOpenChange={setIsBasicReqOpen}
            className="mb-8"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-bold text-primary">
              Basic Requirements
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-transform",
                  isBasicReqOpen && "rotate-180",
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-4 text-sm bg-secondary p-3">
              <p>
                <strong>To Qualify:</strong> You have Good Credit including
                sufficient income and assets to support your existing debt
                obligations and requested loan amount.
              </p>
              <p>
                <strong>If Approved:</strong> Prior to receiving loan proceeds,
                you must have a valid Visa or MasterCard credit card (for
                verification purposes only, no charges will be applied).
              </p>
            </CollapsibleContent>
          </Collapsible>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="applicationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Application Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select application type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="joint">Joint</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="loanPurpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Loan Purpose</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select loan purpose" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="auto-refinance">
                          Auto Loan Refinance
                        </SelectItem>
                        <SelectItem value="home-improvement">
                          Home Improvement
                        </SelectItem>
                        <SelectItem value="debt-consolidation">
                          Debt Consolidation
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="referralSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about us?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select source" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="search">Search Engine</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="friend">Friend/Family</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referralDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>More specific, if applicable</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        maxLength={5}
                        className="max-w-[200px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="loanAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Loan Amount</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min="0" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="loanTerm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Loan Term (months)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min="0" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-4"
                      >
                        <FormItem className="flex items-center space-x-3">
                          <FormControl>
                            <RadioGroupItem value="autopay" />
                          </FormControl>
                          <FormLabel>AutoPay</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3">
                          <FormControl>
                            <RadioGroupItem value="invoice" />
                          </FormControl>
                          <FormLabel>Invoice</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-fit">
                {step < 4 ? "Continue" : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
