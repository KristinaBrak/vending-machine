import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apple from "../../images/apple.jpg";
import chips from "../../images/chips.png";
import cola from "../../images/cola.png";

export interface Product {
  id: string;
  name: string;
  pictureURL: string;
  price: number;
}

export interface Slot {
  code: string;
  product: Product;
  quantity: number;
}

interface VendingMachine {
  slotList: Slot[];
}

const initialState: VendingMachine = {
  slotList: [
    {
      code: "1234",
      product: { id: "1", name: "apple", pictureURL: `${apple}`, price: 50 },
      quantity: 2,
    },
    {
      code: "2345",
      product: { id: "2", name: "chips", pictureURL: `${chips}`, price: 250 },
      quantity: 10,
    },
    {
      code: "3456",
      product: { id: "3", name: "cola", pictureURL: `${cola}`, price: 100 },
      quantity: 10,
    },
  ],
};

export const buyProduct = createAction<Product>("buyProduct");

const { reducer: vendingMachineReducer, actions } = createSlice({
  name: "vendingMachine",
  initialState,
  reducers: {
    addSlot: (state, { payload }: PayloadAction<Slot>) => {
      state.slotList.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyProduct, (state, { payload }) => {
      state.slotList.map((slot) => {
        if (slot.product.id === payload.id && slot.quantity !== 0) {
          slot.quantity = slot.quantity - 1;
        }
        return slot;
      });
    });
  },
});

export const { addSlot } = actions;
export default vendingMachineReducer;
