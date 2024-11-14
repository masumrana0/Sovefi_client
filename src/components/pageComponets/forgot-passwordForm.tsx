"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useForgotPasswordMutation } from "@/redux/api/auth/authApi";

const ForgotPasswordForm = () => {
  const [error, setError] = useState(null);
  // router
  const router = useRouter();
  const [setForgotPassword] = useForgotPasswordMutation();

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Access email value using FormData

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const data = { email: email };

    try {
      await setForgotPassword(data).unwrap();
      alert("Please check your email inbox");
      router.push("/"); // Redirect to homepage
    } catch (error: any) {
      // console.log(error);
      setError(error?.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-24">
      <Card className="w-full max-w-md p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Forgot Password
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>
            <p className="text-red-500 text-sm md:text-md ">{error}</p>
            <Button type="submit" className="w-full mt-4">
              Reset Password
            </Button>
          </form>
        </CardContent>

        <CardFooter className="text-center text-sm text-gray-500">
          Enter your email to receive a password reset link.
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPasswordForm;
