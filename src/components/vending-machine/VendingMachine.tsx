import React from "react";
import ControlPanel from "./control-panel/ControlPanel";
import Produce from "./produce/Produce";

const VendingMachine = () => {
  return (
    <div>
      <Produce />
      <ControlPanel />
    </div>
  );
};

export default VendingMachine;
