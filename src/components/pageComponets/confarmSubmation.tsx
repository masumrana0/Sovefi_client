// "use client";

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ExternalLink, PenLine, CheckCircle, XCircle, X } from "lucide-react";
// import { useAppDispatch } from "@/redux/hook";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogClose,
// } from "@/components/ui/dialog";

// import { getFromLocalStorageAsParse } from "@/utils/local-storage";
// import {
//   LOAN_INFO,
//   PERSONAL_INFO,
//   SECURITY_INFO,
// } from "@/constant/storage.key";
// import { useApplyLoanWithoutSignUpMutation } from "@/redux/api/loan/loanApplication";
// import DynamicButton from "../shared/Button";

// const confirmSchema = z.object({
//   acceptTerms: z.boolean().refine((val) => val === true, {
//     message: "You must accept the terms and conditions",
//   }),
//   acceptDepositTerms: z.boolean().refine((val) => val === true, {
//     message: "You must accept the deposit terms",
//   }),
//   acceptCreditCheck: z.boolean().refine((val) => val === true, {
//     message: "You must accept the credit check terms",
//   }),
// });

// const ConfirmSubmit = () => {
//   const [loanInfo, setLoanInfo] = React.useState<any>(null);
//   const [personalInfo, setPersonalInfo] = React.useState<any>(null);
//   const [securityInfo, setSecurityInfo] = React.useState<any>(null);
//   const [showSuccessModal, setShowSuccessModal] = React.useState(false);
//   const [showErrorModal, setShowErrorModal] = React.useState(false);
//   const [errorMessage, setErrorMessage] = React.useState("");

//   const dispatch = useAppDispatch();
//   const [setUseApply, { isLoading }] = useApplyLoanWithoutSignUpMutation();

//   React.useEffect(() => {
//     setLoanInfo(getFromLocalStorageAsParse(LOAN_INFO));
//     setPersonalInfo(getFromLocalStorageAsParse(PERSONAL_INFO));
//     setSecurityInfo(getFromLocalStorageAsParse(SECURITY_INFO));
//   }, []);

//   const form = useForm<z.infer<typeof confirmSchema>>({
//     resolver: zodResolver(confirmSchema),
//     defaultValues: {
//       acceptTerms: false,
//       acceptDepositTerms: false,
//       acceptCreditCheck: false,
//     },
//   });

//   function onSubmit(values: z.infer<typeof confirmSchema>) {
//     const allData = {
//       ...(loanInfo as any),
//       associatedAccount: {
//         name: personalInfo.name,
//         email: personalInfo.email,
//         password: securityInfo.password,
//       },
//       applicantProfile: {
//         ...personalInfo,
//       },
//     };

//     setUseApply(allData)
//       .unwrap()
//       .then((res) => {
//         if (res.statusCode === 201) {
//           localStorage.removeItem("step");
//           localStorage.removeItem(LOAN_INFO);
//           localStorage.removeItem(PERSONAL_INFO);
//           localStorage.removeItem(SECURITY_INFO);
//           setShowSuccessModal(true);
//         } else {
//           setErrorMessage("An unexpected error occurred. Please try again.");
//           setShowErrorModal(true);
//         }
//       })
//       .catch((error) => {
//         setErrorMessage(
//           error.message ||
//             "An error occurred while submitting your application."
//         );
//         setShowErrorModal(true);
//       });
//   }

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="text-sm text-muted-foreground mb-6">
//         Review your email address and other information below. Please make any
//         necessary changes before submitting your application. Thank you.
//       </div>

//       <div className="grid gap-6 mb-8">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-lg font-medium">
//               Loan Information
//             </CardTitle>
//             <Button variant="ghost" size="sm" className="h-8 text-primary">
//               <PenLine className="mr-2 h-4 w-4" />
//               Edit loan information
//             </Button>
//           </CardHeader>
//           <CardContent className="grid gap-1">
//             <div className="flex justify-between py-1">
//               <span>Purpose:</span>
//               <span>{loanInfo?.primaryPurposeOfLoan}</span>
//             </div>
//             <div className="flex justify-between py-1">
//               <span>Amount:</span>
//               <span>{loanInfo?.requestedLoanAmount}</span>
//             </div>
//             <div className="flex justify-between py-1">
//               <span>Term:</span>
//               <span>{loanInfo?.loanDuration} month</span>
//             </div>
//             <div className="flex justify-between py-1">
//               <span>Payment:</span>
//               <span>{loanInfo?.paymentMethod}</span>
//             </div>
//             <div className="flex justify-between py-1">
//               <span>Rate:</span>
//               <span>3.2%</span>
//             </div>
//           </CardContent>
//         </Card>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <FormField
//               control={form.control}
//               name="acceptTerms"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//                   <FormControl>
//                     <Checkbox
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                   <div className="space-y-1 leading-none">
//                     <FormLabel className="text-xl">
//                       I/We have read and acknowledge receipt of
//                       LightStream&apos;s Statement on the Use of Electronic
//                       Records, and hereby agree to receive the loan agreement
//                       and other information related to this loan transaction in
//                       electronic form.
//                     </FormLabel>
//                     <FormMessage />
//                   </div>
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="acceptDepositTerms"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//                   <FormControl>
//                     <Checkbox
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                   <div className="space-y-1 leading-none">
//                     <FormLabel className="text-xl">
//                       I acknowledge that loan proceeds cannot be deposited into
//                       a business or third-party account. Loan proceeds must be
//                       deposited into your personal bank account that is owned by
//                       the authorized signatory on this loan.
//                     </FormLabel>
//                     <FormMessage />
//                   </div>
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="acceptCreditCheck"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//                   <FormControl>
//                     <Checkbox
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                   <div className="space-y-1 leading-none">
//                     <FormLabel className="text-xl">
//                       I authorize LightStream to obtain a consumer report to be
//                       used in evaluation of my application and for any
//                       legitimate business purpose in connection with my ongoing
//                       account.
//                     </FormLabel>
//                     <FormMessage />
//                   </div>
//                 </FormItem>
//               )}
//             />

//             <DynamicButton
//               isLoading={isLoading}
//               className="w-full"
//               type="submit"
//             >
//               Accept and Submit
//             </DynamicButton>
//           </form>
//         </Form>
//       </div>

//       <div className="text-sm text-muted-foreground mt-6">
//         <Link
//           href="/privacy-policy"
//           className="text-primary hover:underline inline-flex items-center"
//         >
//           Privacy Policy
//           <ExternalLink className="ml-1 h-3 w-3" />
//         </Link>
//       </div>

//       {/* Success Modal */}
//       <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
//         <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-sm shadow-lg">
//           <DialogHeader>
//             <DialogTitle className="flex items-center text-lg font-semibold text-foreground">
//               <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
//               Application Submitted Successfully
//             </DialogTitle>
//           </DialogHeader>
//           <DialogDescription className="text-muted-foreground">
//             Your loan application has been successfully submitted. We will
//             review your application and get back to you soon.
//           </DialogDescription>
//           <DialogClose asChild>
//             <Button
//               type="button"
//               variant="outline"
//               className="absolute right-4 top-4 rounded-full p-2"
//             >
//               <X className="h-4 w-4" />
//               <span className="sr-only">Close</span>
//             </Button>
//           </DialogClose>
//           <div className="flex justify-end">
//             <Button onClick={() => setShowSuccessModal(false)}>Close</Button>
//           </div>
//         </DialogContent>
//       </Dialog>

//       {/* Error Modal */}
//       <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
//         <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-sm shadow-lg">
//           <DialogHeader>
//             <DialogTitle className="flex items-center text-lg font-semibold text-foreground">
//               <XCircle className="w-6 h-6 text-red-500 mr-2" />
//               Error Submitting Application
//             </DialogTitle>
//           </DialogHeader>
//           <DialogDescription className="text-muted-foreground">
//             {errorMessage}
//           </DialogDescription>
//           <DialogClose asChild>
//             <Button
//               type="button"
//               variant="outline"
//               className="absolute right-4 top-4 rounded-full p-2"
//             >
//               <X className="h-4 w-4" />
//               <span className="sr-only">Close</span>
//             </Button>
//           </DialogClose>
//           <div className="flex justify-end">
//             <Button onClick={() => setShowErrorModal(false)}>Close</Button>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default ConfirmSubmit;

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
import {
  ExternalLink,
  PenLine,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import { getFromLocalStorageAsParse } from "@/utils/local-storage";
import {
  LOAN_INFO,
  PERSONAL_INFO,
  SECURITY_INFO,
} from "@/constant/storage.key";
import { useApplyLoanWithoutSignUpMutation } from "@/redux/api/loan/loanApplication";
import DynamicButton from "../shared/Button";

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

const ModalOverlay = ({ children, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const StatusModal = ({ isOpen, onClose, type, title, message }) => {
  const isSuccess = type === "success";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className={cn(
            "w-full rounded-lg bg-background p-6 shadow-lg",
            isSuccess ? "border-green-200" : "border-red-200",
          )}
        >
          <DialogHeader className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto rounded-full p-3"
            >
              {isSuccess ? (
                <CheckCircle className="h-12 w-12 text-green-500" />
              ) : (
                <AlertCircle className="h-12 w-12 text-red-500" />
              )}
            </motion.div>
            <DialogTitle className="text-center text-xl font-semibold">
              {title}
            </DialogTitle>
            <DialogDescription className="text-center text-base text-muted-foreground">
              {message}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mt-6">
            <Button
              onClick={onClose}
              className={cn(
                "w-full transition-all duration-200",
                isSuccess
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600",
              )}
            >
              {isSuccess ? "Continue" : "Try Again"}
            </Button>
          </DialogFooter>

          <DialogClose asChild>
            <Button
              variant="ghost"
              className="absolute right-4 top-4 rounded-full p-2 opacity-70 transition-opacity hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

const ConfirmSubmit = () => {
  const [loanInfo, setLoanInfo] = React.useState<any>(null);
  const [personalInfo, setPersonalInfo] = React.useState<any>(null);
  const [securityInfo, setSecurityInfo] = React.useState<any>(null);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const dispatch = useAppDispatch();
  const [setUseApply, { isLoading }] = useApplyLoanWithoutSignUpMutation();

  React.useEffect(() => {
    setLoanInfo(getFromLocalStorageAsParse(LOAN_INFO));
    setPersonalInfo(getFromLocalStorageAsParse(PERSONAL_INFO));
    setSecurityInfo(getFromLocalStorageAsParse(SECURITY_INFO));
  }, []);

  const form = useForm<z.infer<typeof confirmSchema>>({
    resolver: zodResolver(confirmSchema),
    defaultValues: {
      acceptTerms: false,
      acceptDepositTerms: false,
      acceptCreditCheck: false,
    },
  });

  function onSubmit(values: z.infer<typeof confirmSchema>) {
    const allData = {
      ...(loanInfo as any),
      associatedAccount: {
        name: personalInfo.name,
        email: personalInfo.email,
        password: securityInfo.password,
      },
      applicantProfile: {
        ...personalInfo,
      },
    };

    setUseApply(allData)
      .unwrap()
      .then((res) => {
        if (res.statusCode === 201) {
          localStorage.removeItem("step");
          localStorage.removeItem(LOAN_INFO);
          localStorage.removeItem(PERSONAL_INFO);
          localStorage.removeItem(SECURITY_INFO);
          setShowSuccessModal(true);
        } else {
          setErrorMessage("An unexpected error occurred. Please try again.");
          setShowErrorModal(true);
        }
      })
      .catch((error) => {
        setErrorMessage(
          error.message ||
            "An error occurred while submitting your application.",
        );
        setShowErrorModal(true);
      });
  }

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
              <span>{loanInfo?.primaryPurposeOfLoan}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Amount:</span>
              <span>{loanInfo?.requestedLoanAmount}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Term:</span>
              <span>{loanInfo?.loanDuration} month</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Payment:</span>
              <span>{loanInfo?.paymentMethod}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Rate:</span>
              <span>3.2%</span>
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
                    <FormLabel className="text-xl">
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
                    <FormLabel className="text-xl">
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
                    <FormLabel className="text-xl">
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

            <DynamicButton
              isLoading={isLoading}
              className="w-full"
              type="submit"
            >
              Accept and Submit
            </DynamicButton>
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

      {/* Success Modal */}
      <StatusModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        type="success"
        title="Application Submitted Successfully"
        message="Your loan application has been successfully submitted. We will review your application and contact you within 24-48 business hours."
      />

      {/* Error Modal */}
      <StatusModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        type="error"
        title="Error Submitting Application"
        message={errorMessage}
      />
    </div>
  );
};

export default ConfirmSubmit;
