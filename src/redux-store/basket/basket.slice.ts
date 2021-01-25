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
      const index = state.boughtProducts.findIndex(
        ({ product: { id } }) => id === payload.id
      );

      if (index >= 0) {
        state.boughtProducts[index].quantity += 1;
      } else {
        state.boughtProducts.push({ product: payload, quantity: 1 });
      }
    },
  },
});

export const { addProduct } = actions;
export default basketReducer;
