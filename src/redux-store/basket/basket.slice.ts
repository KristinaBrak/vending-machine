import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../vending-machine/vendingMachine.slice";
import apple from "../../images/apple.jpg";
import cola from "../../images/cola.png";

export interface Basket {
  boughtProducts: { product: Product; quantity: number }[];
}

const initialState: Basket = {
  boughtProducts: [],
};

const { reducer: basketReducer, actions } = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<Product>) => {
      console.log("payload", payload);
      const index = state.boughtProducts.findIndex(
        ({ product: { id } }) => id === payload.id
      );
      console.log("index", index);
      if (index >= 0) {
        state.boughtProducts[index].quantity += 1;
        console.log("boughtProducts", state.boughtProducts);
      } else {
        state.boughtProducts.push({ product: payload, quantity: 1 });
        console.log("boughtProducts", state.boughtProducts);
      }
    },
  },
});

export const { addProduct } = actions;
export default basketReducer;
