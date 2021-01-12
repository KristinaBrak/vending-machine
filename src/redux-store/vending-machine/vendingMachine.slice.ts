import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import apple from "../../images/apple.jpg";
import chips from "../../images/chips.png";
import cola from "../../images/cola.png";

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
    { name: "apple", pictureURL: `${apple}`, price: 50 },
    { name: "chips", pictureURL: `${chips}`, price: 250 },
    { name: "cola", pictureURL: `${cola}`, price: 100 },
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
