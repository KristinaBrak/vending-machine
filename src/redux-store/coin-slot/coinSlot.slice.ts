import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Money } from "../wallet/wallet.slice";
import { buyProduct } from "../vending-machine/vendingMachine.slice";

const initialState: Money = {
  total: 0,
};

const { reducer: coinSlotReducer, actions } = createSlice({
  name: "coinSlot",
  initialState,
  reducers: {
    insertToSlot: (state, { payload }: PayloadAction<Money>) => {
      state.total += payload.total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyProduct, (state, { payload }) => {
      state.total -= payload.price;
    });
  },
});

export const { insertToSlot } = actions;
export default coinSlotReducer;
