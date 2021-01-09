import { combineReducers, configureStore } from "@reduxjs/toolkit";
import controlPanelReducer from "./control-panel/controlPanel.slice";
import vendingMachineReducer from "./vending-machine/vendingMachine.slice";

const rootReducer = combineReducers({
  vendingMachine: vendingMachineReducer,
  controlPanel: controlPanelReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({ reducer: rootReducer });

export default store;
