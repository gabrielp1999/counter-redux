import { createSlice } from "@reduxjs/toolkit";

const stock = createSlice({
  name: "stock",
  initialState: {
    counter: 1,
  },
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },

    decrement(state, action) {
      state.counter -= action.payload;
    },
  },
});

export const { increment, decrement } = stock.actions; // actions
export default stock.reducer;

const sleep = (ms) => {
  // simulando uma busca na api
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export function asyncIncrement(payload) {
  return async function (dispatch) {
    await sleep(2000);
    dispatch(increment(payload));
  };
}

export function asyncDecrement(payload) {
  return async function (dispatch) {
    await sleep(2000);
    dispatch(decrement(payload));
  };
}
