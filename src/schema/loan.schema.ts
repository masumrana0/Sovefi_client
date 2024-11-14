import z from "zod";

export const loanInfoSchema = z.object({
  applicationCategory: z.enum(["individual", "joint"], {
    required_error: "Please select an application type",
  }),
  primaryPurposeOfLoan: z.enum(
    ["auto-refinance", "home-improvement", "debt-consolidation"],
    {
      required_error: "Please select a loan purpose",
    },
  ),
  referralSource: z.enum(["search", "social", "friend"], {
    required_error: "Please select how you heard about us",
  }),
  additionalDetails: z.string().optional(),
  postalCode: z.string().regex(/^\d{5}$/, "Postal code must be 5 digits"),
  requestedLoanAmount: z.number().positive("Loan amount must be positive"),
  loanDuration: z
    .number()
    .int()
    .positive("Loan duration must be a positive integer"),
  repaymentMethod: z.enum(["autoPay", "invoice"], {
    required_error: "Please select a repayment method",
  }),
});
