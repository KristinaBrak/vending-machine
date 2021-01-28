import React from "react";
import { useSelector } from "react-redux";
import MainWindow from "../../components/main/MainWindow";
import { CURRENCY, DELIMITER } from "../../consts";
import { moneySelector } from "../../redux-store/money/money.selector";
// import Wallet from "./Wallet";

const WalletContainer = () => {
  const { total: money } = useSelector(moneySelector);

  return (
    <MainWindow>
      <h1>Wallet</h1>
      <h2>Currently in wallet:</h2>
      <h2>{`${money / DELIMITER}${CURRENCY}`}</h2>
    </MainWindow>
  );
};

export default WalletContainer;
