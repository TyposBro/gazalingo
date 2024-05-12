import { configureStore } from "@reduxjs/toolkit";

import testSlice from "./testSlice";
import profileSlice from "./profileSlice";
import routerSlice from "./routerSlice";
export default configureStore({
  reducer: {
    test: testSlice,
    profile: profileSlice,
    router: routerSlice,
  },
});
