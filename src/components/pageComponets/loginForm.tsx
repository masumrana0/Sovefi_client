"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "@/schema/auth.schema";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import z from "zod";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { useSigninMutation } from "@/redux/api/auth/authApi";
import { setIsLoggedIn, setProfileInfo } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import DynamicButton from "../shared/Button";

const LoginForm: React.FC = () => {
  const [error, setError] = useState(null);
  const loginForm = useForm<z.infer<typeof authSchema.loginSchema>>({
    resolver: zodResolver(authSchema.loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [setSignin, { isLoading }] = useSigninMutation();

  const onLoginSubmit = async (
    values: z.infer<typeof authSchema.loginSchema>
  ) => {
    try {
      const res = await setSignin(values).unwrap();
      dispatch(setIsLoggedIn(res?.data?.accessToken));
      dispatch(setProfileInfo(res.data?.data.profile));
      router.push("/"); // Redirect to homepage
    } catch (error: any) {
      // console.log(error);
      setError(error?.message || "An unexpected error occurred.");
    }
  };

  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit(onLoginSubmit)}
        className="space-y-4"
      >
        <FormField
          control={loginForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={loginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-2">
          <Link
            className="text-blue-500 underline text-left "
            href={"/auth/forget-password"}
          >
            Forgot Password
          </Link>
        </div>
        <p className="text-red-500 text-sm md:text-md ">{error}</p>
        <DynamicButton isLoading={isLoading} className="w-full" type="submit">
          Login
        </DynamicButton>
      </form>
    </Form>
  );
};

export default LoginForm;
