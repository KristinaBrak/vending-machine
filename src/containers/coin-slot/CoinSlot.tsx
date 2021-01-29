import React from "react";
import MainWindow from "../../components/main/MainWindow";
import Subtitle from "../../components/main/Subtitle";
import Title from "../../components/main/Title";
import { CURRENCY, DELIMITER, MONEY_AMOUNTS } from "../../consts";
import KeypadButton from "../vending-machine/control-panel/KeypadButton";
import TextArea from "../vending-machine/control-panel/TextArea";
import Coin from "./Coin";
import CoinList from "./CoinList";
import CoinSlotDisplay from "./CoinSlotDisplay";

interface Props {
  moneyInWallet: number;
  slotMoney: number;
  addToSlot: (amount: number) => void;
}

const CoinSlot: React.FC<Props> = ({ moneyInWallet, slotMoney, addToSlot }) => {
  return (
    <MainWindow>
      <Title>Coin Slot</Title>
      <CoinSlotDisplay key="coin-slot-textarea" className="coin-slot">
        {slotMoney / DELIMITER}
        {CURRENCY}
      </CoinSlotDisplay>
      <Subtitle>
        {`Currently in wallet: ${moneyInWallet / DELIMITER}`}
        {CURRENCY}
      </Subtitle>
      <CoinList>
        {MONEY_AMOUNTS.map((amount) => (
          <Coin key={`amount-${amount}`}>
            <KeypadButton
              id={`amount-${amount}`}
              onClick={() => {
                addToSlot(amount);
              }}
            >
              {amount / DELIMITER}
              {CURRENCY}
            </KeypadButton>
          </Coin>
        ))}
      </CoinList>
    </MainWindow>
  );
};

export default CoinSlot;
