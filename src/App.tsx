import React from "react";
import VendingMachineContainer from "./containers/vending-machine/VendingMachineContainer";
import { Provider } from "react-redux";
import store from "./redux-store/store";
import MenuContainer from "./containers/menu/MenuContainer";
import "./index.css";
import BasketContainer from "./containers/basket/BasketContainer";

const App = () => {
  return (
    <Provider store={store}>
      <MenuContainer />
      <BasketContainer />
    </Provider>
  );
};

export default App;
