import { ILoanApplication } from "@/interface/loan";
import React, { useState } from "react";

const LoanApplicationTable: React.FC<{ application: ILoanApplication }> = ({
  application,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full border rounded-lg shadow-md my-4 text-black overflow-hidden">
      <div
        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <p className="font-semibold text-gray-700">
            Application ID: {application._id}
          </p>
          <p className="text-sm text-gray-500">Status: {application.status}</p>
        </div>
        <div className="space-x-2">
          <button className="px-4 py-1 text-white bg-green-500 rounded-md hover:bg-green-600">
            Approve
          </button>
          <button className="px-4 py-1 text-white bg-red-500 rounded-md hover:bg-red-600">
            Reject
          </button>
          {/* <button className="px-4 py-1 text-white bg-yellow-500 rounded-md hover:bg-yellow-600">
            Fix
          </button> */}
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 bg-white">
          <h3 className="font-semibold text-gray-800">
            Loan Application Details
          </h3>
          <table className="w-full mt-2 table-auto border">
            <tbody>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">
                  Application Type
                </td>
                <td className="p-2">{application.applicationType}</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">
                  Primary Purpose of Loan
                </td>
                <td className="p-2">{application.primaryPurposeOfLoan}</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">
                  Referral Source
                </td>
                <td className="p-2">{application.referralSource}</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">
                  Requested Loan Amount
                </td>
                <td className="p-2">${application.requestedLoanAmount}</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">
                  Loan Duration (months)
                </td>
                <td className="p-2">{application.loanDuration}</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">
                  Payment Method
                </td>
                <td className="p-2">{application.paymentMethod}</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">
                  Applicant Name
                </td>
                <td className="p-2">
                  {application.associatedAccount.name.firstName}{" "}
                  {application.associatedAccount.name.middleName}{" "}
                  {application.associatedAccount.name.lastName}
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">Email</td>
                <td className="p-2">{application.associatedAccount.email}</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">Address</td>
                <td className="p-2">
                  {application.applicantProfile.address.fullAddress}
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">City</td>
                <td className="p-2">
                  {application.applicantProfile.address.city}
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">State</td>
                <td className="p-2">
                  {application.applicantProfile.address.state}
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">Postal Code</td>
                <td className="p-2">{application.postalCode}</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">Date of Birth</td>
                <td className="p-2">
                  {new Date(
                    application.applicantProfile.dateOfBirth,
                  ).toLocaleDateString()}
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">
                  Housing Status
                </td>
                <td className="p-2">
                  {application.applicantProfile.housingStatus}
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">
                  Retirement Assets
                </td>
                <td className="p-2">
                  ${application.applicantProfile.retirementAssets}
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">
                  Terms and Conditions
                </td>
                <td className="p-2">
                  {application.hasReadAllTermsAndConditions
                    ? "Agreed"
                    : "Not Agreed"}
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">
                  Agrees to All Terms
                </td>
                <td className="p-2">
                  {application.agreesToAllTerms ? "Yes" : "No"}
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium text-gray-600">Created At</td>
                <td className="p-2">
                  {new Date(application.createdAt).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LoanApplicationTable;
