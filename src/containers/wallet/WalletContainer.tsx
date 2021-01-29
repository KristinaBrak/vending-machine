import React from "react";
import { useSelector } from "react-redux";
import MainWindow from "../../components/main/MainWindow";
import Subtitle from "../../components/main/Subtitle";
import Title from "../../components/main/Title";
import { CURRENCY, DELIMITER } from "../../consts";
import { walletSelector } from "../../redux-store/wallet/wallet.selector";
// import Wallet from "./Wallet";

const WalletContainer = () => {
  const { total: money } = useSelector(walletSelector);

  return (
    <MainWindow>
      <Title>Wallet</Title>
      <Subtitle>
        Currently in wallet: {`${money / DELIMITER}${CURRENCY}`}
      </Subtitle>
    </MainWindow>
  );
};

export default WalletContainer;
