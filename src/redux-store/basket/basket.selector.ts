import { RootState } from "../store";

export const boughtProductsSelector = (state: RootState) =>
  state.basket.boughtProducts;
