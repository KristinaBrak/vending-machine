import React from "react";
import ControlPanelConteiner from "./control-panel/ControlPanelConteiner";
import Products from "./products/Products";

const VendingMachine = () => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <ControlPanelConteiner />
      {/* <Products /> */}
    </div>
  );
};

export default VendingMachine;
