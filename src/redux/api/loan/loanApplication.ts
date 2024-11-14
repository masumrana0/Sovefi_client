/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../baseApi";

const loanApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    ApplyLoanWithoutSignUp: build.mutation({
      query: (signupdata: any) => ({
        url: "/loan/apply-loan",
        method: "POST",
        data: signupdata,
        // contentType: "multipart/form-data",
      }),
      // validateTags: [''],
    }),

    getAllPendingLoan: build.query({
      query: () => ({
        url: `/loan?status=pending`,
        method: "GET",
      }),
      providesTags: ["loan"],
    }),
  }),
  overrideExisting: false,
});

export const { useApplyLoanWithoutSignUpMutation, useGetAllPendingLoanQuery } =
  loanApi;
