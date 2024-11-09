/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { authSchema } from "@/schema/auth.schema";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignupMutation } from "@/redux/api/auth/authApi";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { setIsLoggedIn, setProfileInfo } from "@/redux/features/auth/authSlice";

const SignupForm = () => {
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  // const { toast } = useToast();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [signup] = useSignupMutation();

  // Form setup
  const signupForm = useForm<z.infer<typeof authSchema.signupSchema>>({
    resolver: zodResolver(authSchema.signupSchema),
    defaultValues: {
      name: {
        firstName: "",
        middleName: "",
        lastName: "",
      },
      email: "",
      password: "",
      confirmPassword: "",
      gender: "male",
    },
  });

  // Profile image change handler
  const handleProfileImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Form submission handler
  const onSignupSubmit = async (
    values: z.infer<typeof authSchema.signupSchema>
  ) => {
    const { profilePhoto, ...otherValues } = values;
    const formData = new FormData();
    formData.append("data", JSON.stringify(otherValues));

    if (profilePhoto instanceof FileList && profilePhoto[0]) {
      formData.append("profilePhoto", profilePhoto[0]);
    }

    try {
      const res = await signup(formData).unwrap();
      dispatch(setIsLoggedIn(res?.data?.accessToken));
      dispatch(setProfileInfo(res.data?.data.profile));
      router.push("/"); // Redirect to homepage
    } catch (error: any) {
      // console.log(error);
      setError(error?.message || "An unexpected error occurred.");
    }
  };

  return (
    <div>
      <Form {...signupForm}>
        <form
          onSubmit={signupForm.handleSubmit(onSignupSubmit)}
          className="space-y-4"
        >
          <div className="flex space-x-4">
            <FormField
              control={signupForm.control}
              name="name.firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signupForm.control}
              name="name.middleName"
              render={({ field }) => (
                <FormItem className="w-20">
                  <FormLabel>MI</FormLabel>
                  <FormControl>
                    <Input placeholder="MI" {...field} maxLength={1} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signupForm.control}
              name="name.lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={signupForm.control}
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
            control={signupForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Create a password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="profilePhoto"
            render={({ field: { onChange } }) => (
              <FormItem>
                <FormLabel>Profile Image</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src={profileImagePreview || ""}
                        alt="Profile preview"
                      />
                      <AvatarFallback>
                        {signupForm
                          .watch("name.firstName")?.[0]
                          ?.toUpperCase() || "?"}
                      </AvatarFallback>
                    </Avatar>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files) {
                          onChange(e.target.files);
                          handleProfileImageChange(e);
                        }
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-red-500 text-sm md:text-md ">{error}</p>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
