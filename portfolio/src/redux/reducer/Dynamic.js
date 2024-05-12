import { createSlice } from "@reduxjs/toolkit";

export const DynamiIslandSlice = createSlice({
  name: "islandState",
  initialState: {
    value: false,
  },
  reducers: {
    DynamicIslandHandler: (state, action) => {
      state.value = !state.value;
    },
    DynamicOffHandler: (state, action) => {
      state.value = false;

      ///Seperate Nav off for home page
    },
  },
});
export const { DynamicIslandHandler, DynamicOffHandler } =
  DynamiIslandSlice.actions;
export default DynamiIslandSlice.reducer;
