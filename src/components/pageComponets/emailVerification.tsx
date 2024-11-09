"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { setProfileInfo } from "@/redux/features/auth/authSlice";
import { useVerifyEmailMutation } from "@/redux/api/auth/authApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IProfile } from "@/interface/profile";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";

const EmailVerification: React.FC<{ token: string }> = ({ token }) => {
  const [emailVerificationLink] = useVerifyEmailMutation();
  const [verificationStatus, setVerificationStatus] = useState<
    "loading" | "success" | "error"
  >("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(5);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const previousProfileData = useAppSelector(
    (state) => state.auth.profile
  ) as IProfile;
  const updatedProfileData = { ...previousProfileData, isEmailVerified: true };

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res: any = await emailVerificationLink(token as string).unwrap();
        if (res?.statusCode === 200) {
          dispatch(setProfileInfo(updatedProfileData));
          setVerificationStatus("success");
          //   message.success("Email verified successfully!");
          alert("Email verified successfully!");
        } else {
          setVerificationStatus("error");
          setErrorMessage(
            res?.error?.message === "jwt expired"
              ? "Invalid or expired link. Please try again."
              : res?.error?.message || "An unexpected error occurred"
          );
          //   message.error(errorMessage);
          alert(errorMessage);
        }
      } catch {
        setVerificationStatus("error");
        setErrorMessage("An unexpected error occurred");
        // message.error("An unexpected error occurred");
        alert("An unexpected error occurred");
      }
    };

    verifyEmail();
  }, [
    emailVerificationLink,
    dispatch,
    token,
    errorMessage,
    updatedProfileData,
  ]);

  useEffect(() => {
    if (verificationStatus !== "loading" && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      router.push("/");
    }
  }, [countdown, router, verificationStatus]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-md transition-all duration-300 ease-in-out transform opacity-100 translate-y-0">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* {/ Header /} */}

          <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 flex justify-center">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* {/ Content /} */}

          <div className="p-8">
            <div className="flex flex-col items-center text-center">
              {verificationStatus === "loading" && (
                <div className="flex flex-col items-center transition-all duration-300 ease-in-out">
                  <svg
                    className="animate-spin h-16 w-16 text-blue-500 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <h2 className="text-2xl font-semibold text-slate-800">
                    Verifying Email
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Please wait while we verify your email address...
                  </p>
                </div>
              )}

              {verificationStatus === "success" && (
                <div className="flex flex-col items-center transition-all duration-300 ease-in-out">
                  <CheckCircleIcon className="h-16 w-16 text-emerald-500 mb-4" />
                  <h2 className="text-2xl font-semibold text-slate-800">
                    Email Verified!
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Your email has been successfully verified.
                  </p>
                </div>
              )}

              {verificationStatus === "error" && (
                <div className="flex flex-col items-center transition-all duration-300 ease-in-out">
                  <XCircleIcon className="h-16 w-16 text-red-500 mb-4" />
                  <h2 className="text-2xl font-semibold text-slate-800">
                    Verification Failed
                  </h2>
                  <p className="mt-2 text-slate-600">{errorMessage}</p>
                </div>
              )}

              {verificationStatus !== "loading" && (
                <div className="mt-8 w-full transition-all duration-300 ease-in-out opacity-100">
                  <p className="text-sm text-slate-500 mb-4">
                    Redirecting in{" "}
                    <span className="font-semibold">{countdown}</span>{" "}
                    seconds...
                  </p>
                  <button
                    onClick={() => router.push("/")}
                    className="w-full py-3 px-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg font-medium hover:from-slate-900 hover:to-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Go to Home Page
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* {/ Footer /} */}

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a
              href="/privacy"
              className="hover:text-slate-800 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-slate-800 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
