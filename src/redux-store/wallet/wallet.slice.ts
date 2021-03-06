import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Money {
  total: number;
}

const initialState: Money = {
  total: 1053,
};

const { reducer: walletReducer, actions } = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Money>) => {
      state.total += payload.total;
    },
    withdraw: (state, { payload }: PayloadAction<Money>) => {
      state.total -= payload.total;
    },
  },
});

export const { add, withdraw } = actions;
export default walletReducer;
