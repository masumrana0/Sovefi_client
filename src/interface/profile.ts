import { IUser } from "./auth";

export type IProfile = {
  user: IUser | string;
  address: {
    street: string;
    apartment?: string;
    city: string;
    state: string;
    zipCode: string;
    fullAddress: string;
    timeAtCurrentAddress: string;
  };
  socialSecurityNumber: number;
  dateOfBirth: Date;
  drivingLicenseNumber: number;
  citizenshipStatus: string[];
  employmentInfo: {
    hasAnnualIncome: boolean;
    annualIncomeDetails: {
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
