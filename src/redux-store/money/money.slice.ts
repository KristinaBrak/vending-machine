import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CURRENCY } from "../../consts";

interface Money {
  total: number;
  currencySign: string;
}

const initialState: Money = {
  total: 1000,
  currencySign: CURRENCY,
};

const { reducer: moneyReducer, actions } = createSlice({
  name: "money",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Money>) => {
      if (payload.currencySign === state.currencySign) {
        state.total += payload.total;
      }
    },
    withdraw: (state, { payload }: PayloadAction<Money>) => {
      if (payload.currencySign === state.currencySign) {
        state.total -= payload.total;
      }
    },
  },
});

export const { add, withdraw } = actions;
export default moneyReducer;
