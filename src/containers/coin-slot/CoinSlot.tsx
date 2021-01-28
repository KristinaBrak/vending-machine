import React from "react";
import MainWindow from "../../components/main/MainWindow";
import { CURRENCY, DELIMITER, MONEY_AMOUNTS } from "../../consts";
import KeypadButton from "../vending-machine/control-panel/KeypadButton";
import TextArea from "../vending-machine/control-panel/TextArea";

interface Props {
  moneyInWallet: number;
  slotMoney: number;
  addToSlot: (amount: number) => void;
}

const CoinSlot: React.FC<Props> = ({ moneyInWallet, slotMoney, addToSlot }) => {
  return (
    <MainWindow>
      <h1>Coin Slot</h1>
      <TextArea key="coin-slot-textarea" className="coin-slot">
        {slotMoney / DELIMITER}
        {CURRENCY}
      </TextArea>
      <h2>
        {`Currently in wallet: ${moneyInWallet/ DELIMITER}`}
        {CURRENCY}
      </h2>
      <ul>
        {MONEY_AMOUNTS.map((amount) => (
          <li key={`amount-${amount}`}>
            <KeypadButton
              id={`amount-${amount}`}
              onClick={() => {
                addToSlot(amount);
              }}
            >
              {amount / DELIMITER}
              {CURRENCY}
            </KeypadButton>
          </li>
        ))}
      </ul>
    </MainWindow>
  );
};

export default CoinSlot;
