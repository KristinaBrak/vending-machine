import React from "react";
import MainWindow from "../../components/main/MainWindow";
import { MONEY } from "../../consts";
import ControlPanelContainer from "./control-panel/ControlPanelContainer";
import ProductListContainer from "./products/ProductListContainer";
import VendingMachine from "./VendingMachine";

const VendingMachineContainer = () => {
  return (
    <MainWindow>
      <ControlPanelContainer money={MONEY} />
      <ProductListContainer />
    </MainWindow>
  );
};

export default VendingMachineContainer;
