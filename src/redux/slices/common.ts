import { createSlice } from "@reduxjs/toolkit";

interface SliceState {
  Available: number;
  All: number;
  Used: number;
  From: number | null;
  To: number | null;
}

const initialState: SliceState = {
  Available: 0,
  All: 30,
  Used: 0,
  From: null,
  To: null,
};

/* Store Settings Screen config */
const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    newRequestAction(common, { payload }: any) {
      return { ...common, ...payload };
    },
  },
});

export const { newRequestAction } = commonSlice.actions;

export default commonSlice.reducer;
