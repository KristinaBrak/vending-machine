import { RootState } from "../store";

export const slotListSelector = (state: RootState) =>
  state.vendingMachine.slotList;
