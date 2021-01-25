import React, { useEffect, useState } from "react";
import { CURRENCY, DELIMITER } from "../../../consts";
import TextArea from "./TextArea";
import ControlPanel from "./ControlPanel";
import KeypadButton from "./KeypadButton";
import { addProduct } from "../../../redux-store/basket/basket.slice";
import { buyProduct } from "../../../redux-store/vending-machine/vendingMachine.slice";
import { slotListSelector } from "../../../redux-store/vending-machine/vendingMachine.selector";
import { useDispatch, useSelector } from "react-redux";

const CODE_LENGTH = 4;
const digits = Array.from(Array(10).keys());

interface Props {
  money: number;
}

const ControlPanelConteiner: React.FC<Props> = ({ money }) => {
  const slots = useSelector(slotListSelector);
  const dispatch = useDispatch();
  const [code, setCode] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (code.length === CODE_LENGTH) {
      timeout = setTimeout(() => {
        submitCode();
      }, 700);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [code]);

  const submitCode = () => {
    const slot = slots.find((slot) => slot.code === code);
    if (slot && slot.quantity > 0) {
      dispatch(buyProduct(slot.product));
    }
    setCode("");
  };

  const appendDigitToCode = (digit: number) => {
    if (code.length < CODE_LENGTH) {
      const newCode = code.concat(digit.toString());
      setCode(newCode);
    }
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
        onClick={() => setCode("")}
      >
        C
      </KeypadButton>
    </ControlPanel>
  );
};

export default ControlPanelConteiner;
