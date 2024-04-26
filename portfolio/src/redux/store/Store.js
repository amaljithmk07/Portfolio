import { configureStore } from "@reduxjs/toolkit";

import DarkmodeSlice from "../reducer/Reducer";

export default configureStore({
  reducer: {
    DarkmodeStore: DarkmodeSlice,
  },
});
