"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { useAppDispatch } from "@/redux/hook";

import { setToLocalStorageAsStringify } from "@/utils/local-storage";
import { LOAN_INFO } from "@/constant/storage.key";
import { setNext } from "@/redux/features/loneApplication/loneApplication";

const formSchema = z.object({
  applicationType: z.enum(["individual", "joint"], {
    required_error: "Please select an application type",
  }),
  primaryPurposeOfLoan: z.enum(
    ["auto-refinance", "home-improvement", "debt-consolidation"],
    {
      required_error: "Please select a loan purpose",
    },
  ),
  referralSource: z.enum(["search", "social", "friend"], {
    required_error: "Please select how you heard about us",
  }),
  additionalDetails: z.string().optional(),
  postalCode: z.string().regex(/^\d{5}$/, "ZIP code must be 5 digits"),
  requestedLoanAmount: z.number().positive("Loan amount must be positive"),
  loanDuration: z
    .number()
    .int()
    .positive("Loan term must be a positive integer"),
  paymentMethod: z.enum(["autopay", "invoice"], {
    required_error: "Please select a payment method",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function LoanInfoForm() {
  const dispatch = useAppDispatch();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "autopay",
    },
  });

  function onSubmit(values: FormData) {
    setToLocalStorageAsStringify(LOAN_INFO, values);
    dispatch(setNext());
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="applicationType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Application Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
          name="primaryPurposeOfLoan"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Primary Loan Purpose</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan purpose" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="auto-refinance">
                    Auto Loan Refinance
                  </SelectItem>
                  <SelectItem disabled value="home-improvement">
                    Home Improvement
                  </SelectItem>
                  <SelectItem disabled value="debt-consolidation">
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
                <FormLabel className="text-xl">
                  How did you hear about us?
                </FormLabel>
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
            name="additionalDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">
                  More specific, if applicable
                </FormLabel>
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
          name="postalCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">ZIP Code</FormLabel>
              <FormControl>
                <Input {...field} maxLength={5} className="max-w-[200px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="requestedLoanAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Loan Amount</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    min="0"
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="loanDuration"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Loan Term (months)</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    min="0"
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value, 10))
                    }
                  />
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
              <FormLabel className="text-xl">Payment Method</FormLabel>
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
                    <FormLabel className="text-xl">AutoPay</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="invoice" />
                    </FormControl>
                    <FormLabel className="text-xl">Invoice</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full text-xl">
          Continue
        </Button>
      </form>
    </Form>
  );
}
