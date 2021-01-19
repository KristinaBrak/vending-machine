import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import apple from "../../images/apple.jpg";
import chips from "../../images/chips.png";
import cola from "../../images/cola.png";

export interface Product {
  id: string;
  name: string;
  pictureURL: string;
  price: number;
}

interface VendingMachine {
  products: Product[];
  quantity: { productId: string; quantity: number }[];
}

const initialState: VendingMachine = {
  products: [
    { id: "1", name: "apple", pictureURL: `${apple}`, price: 50 },
    { id: "2", name: "chips", pictureURL: `${chips}`, price: 250 },
    { id: "3", name: "cola", pictureURL: `${cola}`, price: 100 },
  ],
  quantity: [
    { productId: "1", quantity: 5 },
    { productId: "2", quantity: 5 },
    { productId: "3", quantity: 5 },
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
