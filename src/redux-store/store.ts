import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/basket.slice";
import moneyReducer from "./money/money.slice";
import vendingMachineReducer from "./vending-machine/vendingMachine.slice";

const rootReducer = combineReducers({
  vendingMachine: vendingMachineReducer,
  money: moneyReducer,
  basket: basketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({ reducer: rootReducer });

export default store;
