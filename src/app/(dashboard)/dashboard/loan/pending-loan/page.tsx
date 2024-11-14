"use client";
import React from "react";
import { useGetAllPendingLoanQuery } from "@/redux/api/loan/loanApplication";
import LoanApplicationTable from "@/app/(dashboard)/_components/loan/loancard";
import GlobalLoading from "@/app/loading";
import { ILoanApplication } from "@/interface/loan";

const PendingLoanPage: React.FC = () => {
  const query = { status: "pending" };
  const { data, isLoading } = useGetAllPendingLoanQuery(query);
  const loandata = data?.data.data || [];

  if (isLoading) {
    return <GlobalLoading></GlobalLoading>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center  text-black mb-4">
        Pending Loan Applications
      </h1>
      <div className="space-y-4">
        {loandata.map((loan: ILoanApplication) => (
          <LoanApplicationTable key={loan._id} application={loan} />
        ))}
      </div>
    </div>
  );
};

export default PendingLoanPage;
