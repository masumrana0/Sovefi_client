/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { authSchema } from "@/schema/auth.schema";
import { useResetPasswordMutation } from "@/redux/api/auth/authApi";
import { useRouter } from "next/navigation";

const ResetPasswordForm: React.FC<{ token: string }> = ({ token }) => {
  const [error, setError] = useState<string | null>(null);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const router = useRouter();

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear any existing error

    // Create FormData and convert to an object
    const formData = new FormData(e.currentTarget);
    const formValues = {
      newPassword: formData.get("newPassword") as string,
      confirmNewPassword: formData.get("confirmNewPassword") as string,
    };

    // Validate form using Zod schema
    const result = authSchema.resetPasswordSchema.safeParse(formValues);
    if (!result.success) {
      // Display the first validation error
      setError(result.error.errors[0].message);
      return;
    }
    const data = { newPassword: formValues.newPassword };

    try {
      await resetPassword({ data, token }).unwrap();
      alert("password reset successful");
      router.push("/auth"); // Redirect to homepage after successful reset
    } catch (error: any) {
      if (error?.message === "jwt expired") {
        setError(
          "Your reset link has expired. Please request a new password reset link.",
        );
      }
      // setError(error?.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-24">
      <Card className="w-full max-w-lg p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Reset Password
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <Label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </Label>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                required
                placeholder="Enter new password"
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="confirmNewPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </Label>
              <Input
                id="confirmNewPassword"
                name="confirmNewPassword"
                type="password"
                required
                placeholder="Confirm new password"
                className="mt-1"
              />
            </div>
            {error && <p className="text-red-500 text-md">{error}</p>}
            <Button type="submit" className="w-full mt-4" disabled={isLoading}>
              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="text-center text-sm text-gray-500">
          Enter and confirm your new password to reset it.
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResetPasswordForm;
