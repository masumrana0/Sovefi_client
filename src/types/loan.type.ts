import { IProfile, IUser } from "./user.type";

export type ILoanApplication = {
  loanDetails?: {
    applicationCategory: string;
    primaryPurposeOfLoan: string;
    referralSource: string;
    additionalDetails?: string;
    postalCode: string;
    requestedLoanAmount: string;
    loanDuration: string;
    repaymentMethod: "autoPay" | "invoice";
  };

  associatedAccount: IUser;
  applicantProfile: IProfile;

  submissionConfirmation?: {
    hasReadAllTermsAndConditions: boolean;
    willUseLoanProceedsAsIntended: boolean;
    agreesToAllTerms: boolean;
  };
};
