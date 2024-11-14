import {
  getFromLocalStorageAsParse,
  setToLocalStorageAsStringify,
} from "@/utils/local-storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type LayoutType = "horizontal" | "vertical";

interface ILayoutSlice {
  isOpenLeftSidebar: boolean;
  layoutState: LayoutType;
  isOpenRightSidebar: boolean;
}

const LAYOUT_KEY = "layoutState";

const initialLayoutState =
  (getFromLocalStorageAsParse(LAYOUT_KEY) as LayoutType) || "vertical";

const initialState: ILayoutSlice = {
  isOpenLeftSidebar: true,
  layoutState: initialLayoutState,
  isOpenRightSidebar: false,
};

const saveLayoutState = (layoutState: LayoutType) => {
  setToLocalStorageAsStringify(LAYOUT_KEY, layoutState);
};

const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    toggleLeftSidebar(state) {
      state.isOpenLeftSidebar = !state.isOpenLeftSidebar;
    },

    toggleRightSidebar(state) {
      state.isOpenRightSidebar = !state.isOpenRightSidebar;
    },

    setLayoutState(state, action: PayloadAction<LayoutType>) {
      state.layoutState = action.payload;
      saveLayoutState(action.payload);
    },
  },
});

export const { setLayoutState, toggleLeftSidebar, toggleRightSidebar } =
  layoutSlice.actions;
export default layoutSlice.reducer;
