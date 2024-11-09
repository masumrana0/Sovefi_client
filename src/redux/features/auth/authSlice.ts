/* eslint-disable @typescript-eslint/no-explicit-any */
import { PROFILE_INFO_KEY } from "@/constant/storage.key";
import { IProfile } from "@/interface/profile";
import { handleLoggedIn, isLoggedIn, Logout } from "@/service/auth.service";
import {
  getFromLocalStorageAsParse,
  setToLocalStorageAsStringify,
} from "@/utils/local-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Define the initial state interface
export interface InitialState {
  isLoggedIn: boolean;
  profile: IProfile | null;
}

// Initialize the state using a function
const initializeState = (): InitialState => ({
  isLoggedIn: isLoggedIn() || false,
  profile: getFromLocalStorageAsParse(PROFILE_INFO_KEY),
});

const initialState = initializeState();

// Create the auth slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      handleLoggedIn(action.payload);
    },
    setLogOut: (state) => {
      state.isLoggedIn = false;
      Logout();
    },
    setProfileInfo: (state, action: PayloadAction<IProfile | any>) => {
      if (action.payload) {
        setToLocalStorageAsStringify(PROFILE_INFO_KEY, action.payload);
        state.profile = action.payload;
      }
    },
  },
});

// Export actions and reducer
export const { setIsLoggedIn, setLogOut, setProfileInfo } = authSlice.actions;
export default authSlice.reducer;
