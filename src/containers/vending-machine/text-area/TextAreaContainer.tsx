import React from "react";
import { CURRENCY } from "../../../consts";

interface Props {
  money: number;
}

const TextAreaContainer: React.FC<Props> = ({ money }) => {
  return (
    <div>
      {money}
      {CURRENCY}
    </div>
  );
};

export default TextAreaContainer;
