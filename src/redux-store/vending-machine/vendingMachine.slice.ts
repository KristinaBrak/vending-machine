import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import apple from "../../images/apple.jpg";

export interface Product {
  name: string;
  pictureURL: string;
  price: number;
}

interface VendingMachine {
  products: Product[];
}

const initialState: VendingMachine = {
  products: [
    { name: "apple", pictureURL: `${apple}`, price: 100 },
    { name: "chips", pictureURL: `${apple}`, price: 250 },
    { name: "cola", pictureURL: `${apple}`, price: 300 },
  ],
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
