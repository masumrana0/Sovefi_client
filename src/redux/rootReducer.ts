import { baseApi } from "./api/baseApi";
import counterReducer from "./features/counter/counterSlice";
import authReducer from "./features/auth/authSlice";
import loanApplicationSteps from "./features/loneApplication/loneApplication";
import layoutReducer from "./features/layout/layoutslice";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  counter: counterReducer,
  auth: authReducer,
  layout: layoutReducer,

  loanApplicationSteps: loanApplicationSteps,
};

export default rootReducer;
