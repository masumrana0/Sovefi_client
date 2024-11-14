export interface ILoanApplication {
  _id: string;
  status: string;
  applicationType: string;
  primaryPurposeOfLoan: string;
  referralSource: string;
  additionalDetails: string;
  postalCode: string;
  requestedLoanAmount: string;
  loanDuration: string;
  paymentMethod: string;
  associatedAccount: {
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    _id: string;
    profilePhoto?: string;
    email: string;
    role: string;
    isEmailVerified: boolean;
    createdAt: string;
    updatedAt: string;
    userId: string;
  };
  applicantProfile: {
    address: {
      city: string;
      state: string;
      zipCode: string;
      fullAddress: string;
    };
    employmentInfo: {
      annualIncomeDetails: string[];
    };
    housingStatus: string;
    dateOfBirth: string;
    citizenshipStatus: string[];
    retirementAssets: number;
  };
  hasReadAllTermsAndConditions: boolean;
  willUseLoanProceedsAsIntended: boolean;
  agreesToAllTerms: boolean;
  createdAt: string;
  updatedAt: string;
}
