import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from "./rocketsSlice";

export const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});
