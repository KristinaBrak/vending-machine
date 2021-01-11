import React from "react";
import VendingMachine from "./containers/vending-machine/VendingMachine";
import { Provider } from "react-redux";
import store from "./redux-store/store";

const App = () => {
  return (
    <Provider store={store}>
      <VendingMachine />
    </Provider>
  );
};

export default App;
