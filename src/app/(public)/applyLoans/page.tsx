"use client";
import * as React from "react";
import { ChevronDown, Download } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import LoneInfoForm from "@/components/pageComponets/loneInfoForm";
import SecurityInfoForm from "@/components/pageComponets/security-info-form";
import PersonalInfoForm from "@/components/pageComponets/personalInfo";
import ConfirmSubmit from "@/components/pageComponets/confarmSubmation";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setSpecificStep } from "@/redux/features/loneApplication/loneApplication";

const ApplyLoans = () => {
  const [isBasicReqOpen, setIsBasicReqOpen] = React.useState(true);

  // redux
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector(
    (state) => state.loanApplicationSteps.step,
  );

  console.log("Current step: ", currentStep);

  const handleDownload = () => {
    const fileUrl = "../../../../public/assets/Loan Application Form.docx";
    const fileName = "sovefi-loan-application.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const handleClickStepper = (step: number) => {
    dispatch(setSpecificStep(step));
  };

  return (
    <div className="min-h-screen mt-24 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="mb-6 text-3xl font-bold text-primary">
            Loan Application{" "}
            <Button onClick={handleDownload} variant="ghost">
              Download Loan Application Form <Download />
            </Button>
          </h1>

          <div className="mb-4 rounded border border-red-200 p-4 text-sm">
            <strong>Note:</strong> You can preview all pages of the application
            by clicking on the sections of the progress bar below. After you
            preview them, they must be completed in the order they appear.
          </div>
        </header>

        {/* Wrap TabsList inside Tabs component */}
        <Tabs defaultValue="loan-info" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => handleClickStepper(1)}
              className={`bg-primary ${currentStep === 1 ? "bg-gray-800" : ""} text-white h-16`}
              value="loan-info"
            >
              Loan Information
            </TabsTrigger>
            <TabsTrigger
              onClick={() => handleClickStepper(2)}
              className={`bg-yellow-300 ${currentStep === 2 ? "bg-gray-800" : ""} text-white h-16`}
              value="personal-info"
            >
              Personal Information
            </TabsTrigger>
            <TabsTrigger
              onClick={() => handleClickStepper(3)}
              className={`bg-orange-400 ${currentStep === 3 ? "bg-gray-800" : ""} text-white h-16`}
              value="security-info"
            >
              Security Information
            </TabsTrigger>
            <TabsTrigger
              onClick={() => handleClickStepper(4)}
              className={`bg-orange-400 ${currentStep === 4 ? "bg-gray-800" : ""} text-white h-16`}
              value="confirm-submit"
            >
              Confirm and Submit
            </TabsTrigger>
          </TabsList>

          {/* Conditional Rendering Based on Current Step */}
          {currentStep === 1 && (
            <div className="rounded-lg p-6 shadow-sm">
              <Collapsible
                open={isBasicReqOpen}
                onOpenChange={setIsBasicReqOpen}
                className="mb-8"
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between mt-5 text-lg font-bold text-primary">
                  Basic Requirements
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      isBasicReqOpen && "rotate-180",
                    )}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4 text-sm bg-secondary p-3">
                  <p>
                    <strong>To Qualify:</strong> You have Good Credit including
                    sufficient income and assets to support your existing debt
                    obligations and requested loan amount.
                  </p>
                  <p>
                    <strong>If Approved:</strong> Prior to receiving loan
                    proceeds, you must have a valid Visa or MasterCard credit
                    card (for verification purposes only, no charges will be
                    applied).
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <LoneInfoForm />
            </div>
          )}

          {currentStep === 2 && (
            <div className="rounded-lg p-6 shadow-sm">
              <PersonalInfoForm />
            </div>
          )}

          {currentStep === 3 && (
            <div className="rounded-lg p-6 shadow-sm">
              <SecurityInfoForm />
            </div>
          )}

          {currentStep === 4 && (
            <div className="rounded-lg p-6 shadow-sm">
              <ConfirmSubmit />
            </div>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default ApplyLoans;
