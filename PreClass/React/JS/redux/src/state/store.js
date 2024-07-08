import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./state";

export const store = configureStore({
  reducer: { myReducer },
});
