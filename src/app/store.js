import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../services/post";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer
  }
});
