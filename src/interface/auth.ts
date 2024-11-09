/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ISigninData {
  email: string;
  password: string;
}

export interface ISignUpData {
  name: {
    firstName: string;
    middleName: string;
    lastName?: string;
  };
  contactNO: string;
  email: string;
  profilePhoto: string | any;
  password: string;
  confirmPassword: string;
}

export interface IUser {
  _id?: string;
  userId?: string;
  name: {
    firstName: string;
    middleName: string;
    lastName?: string;
  };
  contactNO: string;
  email: string;
  password: string;
  role?: "borrower" | "lender" | "admin" | "super_admin";
  profilePhoto: string;
  passwordChangedAt?: Date;
  isEmailVerified?: boolean;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  newPassword: string;
  newConfirmPassword?: string;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword?: string;
}

export type IChangeEmail = {
  password: string;
  email: string;
};
