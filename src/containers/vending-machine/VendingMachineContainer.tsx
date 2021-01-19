import React from "react";
import MainWindow from "../../components/main/MainWindow";
import { MONEY } from "../../consts";
import ControlPanelConteiner from "./control-panel/ControlPanelConteiner";
import ProductListContainer from "./products/ProductListContainer";
import VendingMachine from "./VendingMachine";

const VendingMachineContainer = () => {
  return (
    <MainWindow>
      <ControlPanelConteiner money={MONEY} />
      <ProductListContainer />
    </MainWindow>
  );
};

export default VendingMachineContainer;
