"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/components/pageComponets/loginForm";
import { SignupForm } from "@/components/pageComponets/signup-form";

export default function AuthForms() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex items-center justify-center min-h-screen mt-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome
          </CardTitle>
          <p className="text-center text-gray-500">
            {activeTab === "login"
              ? "Sign in to your account"
              : "Create a new account"}
          </p>
        </CardHeader>

        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <LoginForm />
            </TabsContent>

            <TabsContent value="signup">
              <SignupForm />
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            {activeTab === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <Button
              variant="link"
              className="p-0 h-auto text-primary"
              onClick={() =>
                setActiveTab(activeTab === "login" ? "signup" : "login")
              }
            >
              {activeTab === "login" ? "Sign up" : "Log in"}
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
