"use client";

import * as React from "react";
import { ChevronDown, Download } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import LoneInfoForm from "@/components/pageComponets/loneInfoForm";
import SecurityInfoForm from "@/components/pageComponets/security-info-form";
import PersonalInfoForm from "@/components/pageComponets/personalInfo";
import ConfirmSubmit from "@/components/pageComponets/confarmSubmation";
import { Button } from "@/components/ui/button";

export default function ApplyLoans() {
  const [isBasicReqOpen, setIsBasicReqOpen] = React.useState(true);

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

        <Tabs defaultValue="loan-info" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              className="bg-primary text-white h-16"
              value="loan-info"
            >
              Loan Information
            </TabsTrigger>
            <TabsTrigger
              className="bg-yellow-300 text-black h-16"
              value="personal-info"
            >
              Personal Information
            </TabsTrigger>
            <TabsTrigger
              className="bg-orange-400 text-black h-16"
              value="security-info"
            >
              Security Information
            </TabsTrigger>
            <TabsTrigger
              className="bg-purple-400 text-black h-16"
              value="confirm-submit"
            >
              Confirm and Submit
            </TabsTrigger>
          </TabsList>
          <TabsContent value="loan-info">
            <div className="rounded-lg p-6 shadow-sm">
              <Collapsible
                open={isBasicReqOpen}
                onOpenChange={setIsBasicReqOpen}
                className="mb-8"
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-bold text-primary">
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
          </TabsContent>
          <TabsContent value="personal-info">
            <div className="rounded-lg p-6 shadow-sm">
              <PersonalInfoForm />
            </div>
          </TabsContent>
          <TabsContent value="security-info">
            <div className="rounded-lg p-6 shadow-sm">
              <SecurityInfoForm />
            </div>
          </TabsContent>
          <TabsContent value="confirm-submit">
            <div className="rounded-lg p-6 shadow-sm">
              <ConfirmSubmit />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
