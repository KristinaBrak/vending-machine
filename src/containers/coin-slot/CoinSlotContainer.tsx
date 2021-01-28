import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinSlotSelector } from "../../redux-store/coin-slot/coinSlot.selector";
import { insertToSlot } from "../../redux-store/coin-slot/coinSlot.slice";
import { moneySelector } from "../../redux-store/money/money.selector";
import { withdraw } from "../../redux-store/money/money.slice";
import CoinSlot from "./CoinSlot";

const CoinSlotContainer = () => {
  const { total: money } = useSelector(moneySelector);
  const { total: coinSlotMoney } = useSelector(coinSlotSelector);
  const dispatch = useDispatch();

  const addMoneyToSlot = (amount: number) => {
    if (money - amount >= 0) {
      dispatch(withdraw({ total: amount }));
      dispatch(insertToSlot({ total: amount }));
    }
  };

  return (
    <CoinSlot
      moneyInWallet={money}
      slotMoney={coinSlotMoney}
      addToSlot={addMoneyToSlot}
    />
  );
};

export default CoinSlotContainer;
