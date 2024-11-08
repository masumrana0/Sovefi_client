"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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

const securitySchema = z
  .object({
    userId: z
      .string()
      .min(6, "User ID must be at least 6 characters")
      .max(50, "User ID cannot exceed 50 characters")
      .regex(/^[0-9a-zA-Z!@$._-]+$/, "User ID contains invalid characters")
      .refine((val) => !val.includes(" "), "User ID cannot contain spaces"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password cannot exceed 20 characters")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:'",.<>/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};:'",.<>/?]{8,}$/,
        "Password must contain at least 1 letter, 1 number, and 1 special character",
      ),
    confirmPassword: z.string(),
    securityQuestion: z.string({
      required_error: "Please select a security question",
    }),
    securityAnswer: z
      .string()
      .min(1, "Security answer is required")
      .regex(
        /^[0-9a-zA-Z!@$._\s-]+$/,
        "Security answer contains invalid characters",
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const securityQuestions = [
  "What was the name of your first pet?",
  "What is your mother's maiden name?",
  "What city were you born in?",
  "What was the name of your first school?",
  "What was your childhood nickname?",
];

export default function SecurityInfoForm() {
  const form = useForm<z.infer<typeof securitySchema>>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      userId: "",
      password: "",
      confirmPassword: "",
      securityAnswer: "",
    },
  });

  function onSubmit(values: z.infer<typeof securitySchema>) {
    console.log(values);
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User ID (6-50 characters)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Your user ID must be unique and should be difficult to guess.
                  It may contain only numbers, letters, and the following
                  special characters: ! @ $ . _ -
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password (8-20 characters)</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormDescription>
                  Must contain at least 1 letter AND 1 number Must contain a
                  special character ! @ # $ % ^ & * ( ) _ + - = [ ] {"{ }"} ; :
                  &apos; &quot; , . &lt; &gt; / ?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-enter Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="securityQuestion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Security Question</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a security question" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {securityQuestions.map((question) => (
                      <SelectItem key={question} value={question}>
                        {question}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="securityAnswer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Security Answer</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  May contain only the following characters: 0-9, a-z, ! & $ . _
                  -
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full text-xl">
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
