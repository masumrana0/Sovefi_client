export type IProfile = {
  name?: string;
  documents: string[];
  contactNo?: string;
  profilePhoto?: string;
};

export type IUser = {
  _id?: string;
  userId?: string;
  name: {
    firstName: string;
    middleName: string;
    lastName?: string;
  };
  contactNO: string; //ignore
  email: string;
  password: string;
  role?: "borrower" | "lender" | "admin" | "super_admin";
  profilePhoto: string;
  passwordChangedAt?: Date;
  isEmailVerified?: boolean;
};

export type IUserFilters = {
  searchTerm?: string;
  role?: string;
  email?: string;
  accountType?: string;
  contactNo?: string;
};
