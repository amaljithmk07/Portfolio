import { createSlice } from "@reduxjs/toolkit";
export const DarkmodeSlice = createSlice({
  name: "Darkmodestate",
  initialState: {
    value: false,
  },
  reducers: {
    DarkmodeHandler: (state, action) => {
      state.value = !state.value;
    },
  },
});
export const { DarkmodeHandler } = DarkmodeSlice.actions;
export default DarkmodeSlice.reducer;
