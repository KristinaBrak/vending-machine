import React from "react";
import { MONEY } from "../../consts";
import ControlPanelConteiner from "./control-panel/ControlPanelConteiner";
import ProductListContainer from "./products/ProductListContainer";
import VendingMachine from "./VendingMachine";

const VendingMachineContainer = () => {
  return (
    <VendingMachine>
      <ControlPanelConteiner money={MONEY} />
      <ProductListContainer />
    </VendingMachine>
  );
};

export default VendingMachineContainer;
