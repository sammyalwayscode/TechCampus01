import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10,
};

const state = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increanment: (state) => {
      state.count += 2;
    },
    decreanment: (state) => {
      state.count -= 2;
    },
    increaseByAmount: (state, { payload }) => {
      state.count += payload;
    },
  },
});

export const { increanment, decreanment, increaseByAmount } = state.actions;

export default state.reducer;
