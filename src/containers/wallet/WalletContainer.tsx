import React from "react";
import { useSelector } from "react-redux";
import MainWindow from "../../components/main/MainWindow";
import Subtitle from "../../components/main/Subtitle";
import { CURRENCY, DELIMITER } from "../../consts";
import { walletSelector } from "../../redux-store/wallet/wallet.selector";
// import Wallet from "./Wallet";

const WalletContainer = () => {
  const { total: money } = useSelector(walletSelector);

  return (
    <MainWindow>
      <h1>Wallet</h1>
      <Subtitle>Currently in wallet:</Subtitle>
      <Subtitle>{`${money / DELIMITER}${CURRENCY}`}</Subtitle>
    </MainWindow>
  );
};

export default WalletContainer;
