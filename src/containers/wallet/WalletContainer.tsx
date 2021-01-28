import React from "react";
import { useSelector } from "react-redux";
import MainWindow from "../../components/main/MainWindow";
import { DELIMITER } from "../../consts";
import { moneySelector } from "../../redux-store/money/money.selector";
// import Wallet from "./Wallet";

const WalletContainer = () => {
  const { total, currencySign } = useSelector(moneySelector);

  return (
    <MainWindow>
      <h1>Wallet</h1>
      <h2>Currently in wallet:</h2>
      <h2>{`${total / DELIMITER}${currencySign}`}</h2>
    </MainWindow>
  );
};

export default WalletContainer;
