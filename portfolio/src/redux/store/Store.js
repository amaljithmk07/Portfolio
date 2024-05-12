import { configureStore } from "@reduxjs/toolkit";

import DarkmodeSlice from "../reducer/Reducer";
import DynamiIslandSlice from "../reducer/Dynamic";

export default configureStore({
  reducer: {
    DarkmodeStore: DarkmodeSlice,
    DynamicIslandStore: DynamiIslandSlice,
  },
});
