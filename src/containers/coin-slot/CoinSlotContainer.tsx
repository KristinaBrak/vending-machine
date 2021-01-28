import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CURRENCY } from "../../consts";
import { moneySelector } from "../../redux-store/money/money.selector";
import { withdraw } from "../../redux-store/money/money.slice";
import CoinSlot from "./CoinSlot";

const CoinSlotContainer = () => {
  const { total: money } = useSelector(moneySelector);
  const [slotMoney, setSlotMoney] = useState(0);
  const dispatch = useDispatch();

  const addMoneyToSlot = (amount: number) => {
    if (money - amount >= 0) {
      setSlotMoney(slotMoney + amount);
      dispatch(withdraw({ total: amount }));
    }
  };

  return (
    <CoinSlot
      moneyInWallet={money}
      slotMoney={slotMoney}
      addToSlot={addMoneyToSlot}
    />
  );
};

export default CoinSlotContainer;
