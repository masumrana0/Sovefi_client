import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/** Interface representing detailed loan information */
interface ILoanApplication {
  loanInformation?: {
    applicationType: string;
    primaryLoanPurpose: string;
    howAboutUs: string;
    moreSpecific?: string;
    zipCode: string;
    loanAmount: string;
    loanTerm: string;
    paymentMethod: string;
  };
  personalInformation?: {
    name: {
      first: string;
      mi?: string;
      last?: string;
    };
    email: string;
    homeStreetAddress: string;
    apt?: string;
    city: string;
    state: string;
    zipCode: string;
    homeAddress: string;
    timeAtCurrentAddress: string;
    socialSecurity: number;
    dob: string;
    drivingLicense: number;
    citizen: string[];
    yourEmploymentInformation: {
      annualIncome: boolean;
      annual: {
        amount: number;
        source: string;
        details?: string;
      }[];
    };
    totalMonthlyHousingCosts: number;
    estimatedEquityInHome?: number;
    bonds?: number;
    retirementAssets: number;
  };
  securityInformation?: {
    userId?: number;
    password: string;
    securityQuestion: string;
    securityAnswer: string;
  };
  confirmAndSubmit?: {
    isReadAllConditions: boolean;
    isLoanProceeds: boolean;
    agreeAll: boolean;
  };
}

interface LoanApplicationState {
  applications: ILoanApplication[];
  currentApplication: ILoanApplication;
}

const initialState: LoanApplicationState = {
  applications: [],
  currentApplication: {},
};

const loanApplicationSlice = createSlice({
  name: "loanApplication",
  initialState,
  reducers: {
    /** Updates loan information step */
    updateLoanInformation: (
      state,
      action: PayloadAction<ILoanApplication["loanInformation"]>,
    ) => {
      state.currentApplication.loanInformation = action.payload;
    },

    /** Updates personal information step */
    updatePersonalInformation: (
      state,
      action: PayloadAction<ILoanApplication["personalInformation"]>,
    ) => {
      state.currentApplication.personalInformation = action.payload;
    },

    /** Updates security information step */
    updateSecurityInformation: (
      state,
      action: PayloadAction<ILoanApplication["securityInformation"]>,
    ) => {
      state.currentApplication.securityInformation = action.payload;
    },

    /** Updates confirmation and submission step */
    updateConfirmAndSubmit: (
      state,
      action: PayloadAction<ILoanApplication["confirmAndSubmit"]>,
    ) => {
      state.currentApplication.confirmAndSubmit = action.payload;
    },

    /** Finalizes and adds the current application to the applications list */
    submitApplication: (state) => {
      state.applications.push(state.currentApplication);
      state.currentApplication = {}; // Reset for the next application
    },
  },
});

export const {
  updateLoanInformation,
  updatePersonalInformation,
  updateSecurityInformation,
  updateConfirmAndSubmit,
  submitApplication,
} = loanApplicationSlice.actions;

export default loanApplicationSlice.reducer;
