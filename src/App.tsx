import React from "react";
import { Provider } from "react-redux";
import store from "./redux-store/store";
import MenuContainer from "./containers/menu/MenuContainer";
import "./index.css";

const App = () => {
  return (
    <Provider store={store}>
      <MenuContainer />
    </Provider>
  );
};

export default App;
