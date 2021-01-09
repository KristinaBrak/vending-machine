import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  name: string;
}

interface VendingMachine {
  products: Product[];
}

const initialState: VendingMachine = {
  products: [{ name: "Apple" }, { name: "Chips" }],
};

const { reducer: vendingMachineReducer, actions } = createSlice({
  name: "vendingMachine",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<Product>) => {
      state.products.push(payload);
    },
  },
});

export const { addProduct } = actions;
export default vendingMachineReducer;
