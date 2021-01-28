import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { buyProduct } from "../vending-machine/vendingMachine.slice";

interface Money {
  total: number;
}

const initialState: Money = {
  total: 1053,
};

const { reducer: moneyReducer, actions } = createSlice({
  name: "money",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Money>) => {
      state.total += payload.total;
    },
    withdraw: (state, { payload }: PayloadAction<Money>) => {
      state.total -= payload.total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyProduct, (state, { payload }) => {
      state.total -= payload.price;
    });
  },
});

export const { add, withdraw } = actions;
export default moneyReducer;
