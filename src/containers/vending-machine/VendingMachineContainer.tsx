import React from "react";
import MainWindow from "../../components/main/MainWindow";
import ControlPanelContainer from "./control-panel/ControlPanelContainer";
import ProductListContainer from "./products/ProductListContainer";

const VendingMachineContainer = () => (
  <MainWindow>
    <ControlPanelContainer />
    <ProductListContainer />
  </MainWindow>
);

export default VendingMachineContainer;
