import React, { useEffect, useState } from "react";
import { CURRENCY, DELIMITER, CODE_LENGTH } from "../../../consts";
import { buyProduct } from "../../../redux-store/vending-machine/vendingMachine.slice";
import { slotListSelector } from "../../../redux-store/vending-machine/vendingMachine.selector";
import { useDispatch, useSelector } from "react-redux";
import ControlPanelComponent from "./ControlPanelComponent";
import { coinSlotSelector } from "../../../redux-store/coin-slot/coinSlot.selector";

const ControlPanelConteiner = () => {
  const slots = useSelector(slotListSelector);
  const { total: money } = useSelector(coinSlotSelector);
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
    if (slot && slot.quantity > 0 && money - slot.product.price >= 0) {
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
    <ControlPanelComponent
      display={code ? code : `${(money / DELIMITER).toString()}${CURRENCY}`}
      appendDigit={appendDigitToCode}
      resetCode={() => setCode("")}
    />
  );
};

export default ControlPanelConteiner;
