import { baseApi } from "./api/baseApi";
import counterReducer from "./features/counter/counterSlice";
import authReducer from "./features/auth/authSlice";
const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  counter: counterReducer,
  auth: authReducer,
};

export default rootReducer;
