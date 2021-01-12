import React from "react";
import ControlPanelConteiner from "./control-panel/ControlPanelConteiner";
import ProductListContainer from "./products/ProductListContainer";
import TextAreaContainer from "./text-area/TextAreaContainer";

const VendingMachine = () => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <TextAreaContainer money={100} />
      {/* <ControlPanelConteiner /> */}
      {/* <ProductListContainer /> */}
    </div>
  );
};

export default VendingMachine;
