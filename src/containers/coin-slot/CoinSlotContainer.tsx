import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinSlotSelector } from "../../redux-store/coin-slot/coinSlot.selector";
import { insertToSlot } from "../../redux-store/coin-slot/coinSlot.slice";
import { walletSelector } from "../../redux-store/wallet/wallet.selector";
import { withdraw } from "../../redux-store/wallet/wallet.slice";
import CoinSlot from "./CoinSlot";

const CoinSlotContainer = () => {
  const { total: walletMoney } = useSelector(walletSelector);
  const { total: coinSlotMoney } = useSelector(coinSlotSelector);
  const dispatch = useDispatch();

  const addMoneyToSlot = (amount: number) => {
    if (walletMoney - amount >= 0) {
      dispatch(withdraw({ total: amount }));
      dispatch(insertToSlot({ total: amount }));
    }
  };

  return (
    <CoinSlot
      moneyInWallet={walletMoney}
      slotMoney={coinSlotMoney}
      addToSlot={addMoneyToSlot}
    />
  );
};

export default CoinSlotContainer;
