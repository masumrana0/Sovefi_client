import {
  LOAN_INFO,
  PERSONAL_INFO,
  SECURITY_INFO,
} from "@/constant/storage.key";
import {
  getFromLocalStorageAsParse,
  setToLocalStorage,
  setToLocalStorageAsStringify,
} from "@/utils/local-storage";
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
  loanInfo: any | null;
  personalInfo: any | null;
  securityInfo: any | null;

  step: number;
}

const initialState: LoanApplicationState = {
  loanInfo: getFromLocalStorageAsParse(LOAN_INFO),
  personalInfo: getFromLocalStorageAsParse(PERSONAL_INFO),
  securityInfo: getFromLocalStorageAsParse(SECURITY_INFO),
  step: getFromLocalStorageAsParse("step") || 1,
};

const loanApplicationSlice = createSlice({
  name: "loanApplication",
  initialState,
  reducers: {
    setNext: (state) => {
      const nextStep = state.step + 1;
      state.step = nextStep;
      setToLocalStorage("step", nextStep);
    },
    setPrevious: (state) => {
      const nextStep = state.step - 1;
      if (nextStep > 0) {
        setToLocalStorage("step", nextStep);
        state.step = nextStep;
      }
    },
    setSpecificStep: (state, action: PayloadAction<number>) => {
      const currentStep = state.step;
      if (currentStep > action.payload) {
        setToLocalStorage("step", action.payload);
        state.step = action.payload;
      } else if (state.loanInfo && action.payload == 1) {
        setToLocalStorage("step", action.payload);
        state.step = action.payload;
      } else if (state.personalInfo && action.payload == 2) {
        setToLocalStorage("step", action.payload);
        state.step = action.payload;
      } else if (state.securityInfo && action.payload == 3) {
        setToLocalStorage("step", action.payload);
        state.step = action.payload;
      } else if (currentStep == 3 && action.payload == 4) {
        setToLocalStorage("step", action.payload);
        state.step = action.payload;
      }
    },
    updateLoanInformation: (state, action: any) => {
      state.loanInfo = action.payload;
      setToLocalStorageAsStringify(LOAN_INFO, action.payload);
    },

    /** Updates personal information step */
    updatePersonalInformation: (
      state,
      action: PayloadAction<ILoanApplication["personalInformation"]>
    ) => {
      state.personalInfo = action.payload;
      setToLocalStorageAsStringify(PERSONAL_INFO, action.payload);
    },

    /** Updates security information step */
    updateSecurityInformation: (
      state,
      action: PayloadAction<ILoanApplication["securityInformation"]>
    ) => {
      state.securityInfo = action.payload;
      setToLocalStorageAsStringify(SECURITY_INFO, action.payload);
    },
  },
});

export const {
  updateLoanInformation,
  updatePersonalInformation,
  updateSecurityInformation,
  setNext,
  setPrevious,
  setSpecificStep,
} = loanApplicationSlice.actions;

export default loanApplicationSlice.reducer;
