import ForgotPasswordForm from "@/components/pageComponets/forgot-passwordForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sovefi | Forgot-password",
  description: "Generated by create SOVEFI",
};
const ForgotPasswordPage = () => {
  return <ForgotPasswordForm />;
};

export default ForgotPasswordPage;