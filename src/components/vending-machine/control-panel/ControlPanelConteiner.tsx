import React, { useEffect, useState } from "react";
// import "./control-panel.css";
import ControlPanel from "./ControlPanel";

const CODE_LENGTH = 4;

const ControlPanelConteiner = () => {
  const [code, setCode] = useState("");
  const digits = Array.from(Array(10).keys());

  useEffect(() => {
    if (code.length === CODE_LENGTH) {
      //TODO do stuff
      resetCode();
    }
  }, [code]);

  const appendDigitToCode = (digit: number) => {
    setCode(code + digit);
  };

  const resetCode = () => {
    setCode("");
  };

  return (
    <ControlPanel>
      {/* <p>{code}</p> */}
      {digits.map((digit) => (
        <button
          key={digit}
          id={`keypad-${digit}`}
          className="keypad-digit"
          onClick={() => appendDigitToCode(digit)}
        >
          {digit}
        </button>
      ))}
      <button key="cancel" className="cancel" onClick={resetCode}>
        Cancel
      </button>
    </ControlPanel>
  );
};

export default ControlPanelConteiner;
