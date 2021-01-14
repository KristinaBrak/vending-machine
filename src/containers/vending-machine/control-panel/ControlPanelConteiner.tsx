import React, { useEffect, useState } from "react";
import { CURRENCY } from "../../../consts";
import TextArea from "./TextArea";
import ControlPanel from "./ControlPanel";
import KeypadButton from "./KeypadButton";

const CODE_LENGTH = 4;

interface Props {
  money: number;
}

const ControlPanelConteiner: React.FC<Props> = ({ money }) => {
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
      <TextArea className="text-area">
        {code ? code : `${money.toString()}${CURRENCY}`}
      </TextArea>
      {digits.map((digit) => (
        <KeypadButton
          key={digit}
          id={`keypad-${digit}`}
          className="keypad-digit"
          onClick={() => appendDigitToCode(digit)}
        >
          {digit}
        </KeypadButton>
      ))}
      <KeypadButton
        key="cancel"
        id={`keypad-cancel`}
        className="cancel"
        onClick={resetCode}
      >
        C
      </KeypadButton>
    </ControlPanel>
  );
};

export default ControlPanelConteiner;
