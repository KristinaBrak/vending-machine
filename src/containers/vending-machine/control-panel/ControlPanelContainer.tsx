import React, { useEffect, useState } from "react";
import { CURRENCY, DELIMITER } from "../../../consts";
import TextArea from "./TextArea";
import ControlPanel from "./ControlPanel";
import KeypadButton from "./KeypadButton";

const CODE_LENGTH = 4;
const digits = Array.from(Array(10).keys());

interface Props {
  money: number;
}

const ControlPanelConteiner: React.FC<Props> = ({ money }) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (code.length === CODE_LENGTH) {
      timeout = setTimeout(() => {
        submitCode();
      }, 700);
      //TODO do stuff
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [code]);

  const appendDigitToCode = (digit: number) => {
    if (code.length < CODE_LENGTH) {
      setCode(code + digit);
    }
  };

  const submitCode = () => {
    setCode("");
  };

  return (
    <ControlPanel>
      <TextArea className="text-area">
        {code ? code : `${(money / DELIMITER).toString()}${CURRENCY}`}
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
        onClick={submitCode}
      >
        C
      </KeypadButton>
    </ControlPanel>
  );
};

export default ControlPanelConteiner;
