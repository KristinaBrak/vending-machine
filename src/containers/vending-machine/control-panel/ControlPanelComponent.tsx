import React from "react";
import ControlPanel from "./ControlPanel";
import KeypadButton from "./KeypadButton";
import TextArea from "./TextArea";

const digits = Array.from(Array(10).keys());
interface Props {
  display: string;
  appendDigit: (digit: number) => void;
  resetCode: () => void;
}

const ControlPanelComponent: React.FC<Props> = ({
  display,
  appendDigit,
  resetCode,
}) => {
  return (
    <ControlPanel>
      <TextArea className="control-panel-textarea" key="contol-panel-textarea">
        {display}
      </TextArea>
      {digits.map((digit) => (
        <KeypadButton
          key={digit}
          id={`keypad-${digit}`}
          className="keypad-digit"
          onClick={() => appendDigit(digit)}
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

export default ControlPanelComponent;
