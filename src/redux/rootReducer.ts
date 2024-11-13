import { baseApi } from "./api/baseApi";
import counterReducer from "./features/counter/counterSlice";
import authReducer from "./features/auth/authSlice";
import loanApplicationSteps from "./features/applayLoanSteps/applayLoanSteps";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  counter: counterReducer,
  auth: authReducer,
  loanApplicationSteps: loanApplicationSteps,
};

export default rootReducer;
