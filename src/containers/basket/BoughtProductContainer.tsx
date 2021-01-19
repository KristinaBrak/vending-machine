import React from "react";
import BoughtProduct from "./BoughtProduct";

interface Props {
  name: string;
  url: string;
  quantity: number;
}

const BoughtProductContainer: React.FC<Props> = ({ name, url, quantity }) => {
  return (
    <BoughtProduct>
      <img src={url} alt={name} />
      <h3>
        {name} x {quantity}
      </h3>
    </BoughtProduct>
  );
};

export default BoughtProductContainer;
