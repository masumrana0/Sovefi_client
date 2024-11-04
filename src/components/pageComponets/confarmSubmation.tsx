"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, PenLine } from "lucide-react";

const confirmSchema = z.object({
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
  acceptDepositTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the deposit terms",
  }),
  acceptCreditCheck: z.boolean().refine((val) => val === true, {
    message: "You must accept the credit check terms",
  }),
});

export default function ConfirmSubmit() {
  const form = useForm<z.infer<typeof confirmSchema>>({
    resolver: zodResolver(confirmSchema),
    defaultValues: {
      acceptTerms: false,
      acceptDepositTerms: false,
      acceptCreditCheck: false,
    },
  });

  function onSubmit(values: z.infer<typeof confirmSchema>) {
    console.log(values);
  }

  const loanInfo = {
    purpose: "Auto Loan Refinance",
    amount: "$0.00",
    term: "0 months",
    payment: "AutoPay",
    rate: "% to %",
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-sm text-muted-foreground mb-6">
        Review your email address and other information below. Please make any
        necessary changes before submitting your application. Thank you.
      </div>

      <div className="grid gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">
              Loan Information
            </CardTitle>
            <Button variant="ghost" size="sm" className="h-8 text-primary">
              <PenLine className="mr-2 h-4 w-4" />
              Edit loan information
            </Button>
          </CardHeader>
          <CardContent className="grid gap-1">
            <div className="flex justify-between py-1">
              <span>Purpose:</span>
              <span>{loanInfo.purpose}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Amount:</span>
              <span>{loanInfo.amount}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Term:</span>
              <span>{loanInfo.term}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Payment:</span>
              <span>{loanInfo.payment}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Rate:</span>
              <span>{loanInfo.rate}</span>
            </div>
          </CardContent>
        </Card>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I/We have read and acknowledge receipt of
                      LightStream&apos;s Statement on the Use of Electronic
                      Records, and hereby agree to receive the loan agreement
                      and other information related to this loan transaction in
                      electronic form.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="acceptDepositTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I acknowledge that loan proceeds cannot be deposited into
                      a business or third-party account. Loan proceeds must be
                      deposited into your personal bank account that is owned by
                      the authorized signatory on this loan.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="acceptCreditCheck"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I authorize LightStream to obtain a consumer report to be
                      used in evaluation of my application and for any
                      legitimate business purpose in connection with my ongoing
                      account.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Accept and Submit
            </Button>
          </form>
        </Form>
      </div>

      <div className="text-sm text-muted-foreground mt-6">
        <Link
          href="/privacy-policy"
          className="text-primary hover:underline inline-flex items-center"
        >
          Privacy Policy
          <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
