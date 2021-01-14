import React from "react";
import { MONEY } from "../../consts";
import ControlPanelConteiner from "./control-panel/ControlPanelConteiner";
import ProductListContainer from "./products/ProductListContainer";

const VendingMachine = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ControlPanelConteiner money={MONEY} />
      <ProductListContainer />
    </div>
  );
};

export default VendingMachine;
