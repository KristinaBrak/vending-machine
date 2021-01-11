import React from "react";
import ControlPanelConteiner from "./control-panel/ControlPanelConteiner";
import ProductListContainer from "./products/ProductListContainer";

const VendingMachine = () => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* <ControlPanelConteiner /> */}
      <ProductListContainer />
    </div>
  );
};

export default VendingMachine;
