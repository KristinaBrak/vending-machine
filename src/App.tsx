import React from "react";
import VendingMachineContainer from "./containers/vending-machine/VendingMachineContainer";
import { Provider } from "react-redux";
import store from "./redux-store/store";
import Menu from "./containers/menu/Menu";
import "./index.css";

const App = () => {
  return (
    <Provider store={store}>
      <Menu />
      <VendingMachineContainer />
    </Provider>
  );
};

export default App;
