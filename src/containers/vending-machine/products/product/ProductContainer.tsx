import React from "react";
import { CURRENCY, DELIMITER } from "../../../../consts";
import { Product } from "../../../../redux-store/vending-machine/vendingMachine.slice";
import Image from "./Image";

interface Props {
  product: Product;
  code: string;
}

const ProductContainer: React.FC<Props> = ({ product, code }) => {
  return (
    <>
      <div className="product-name">{product.name}</div>
      <div className="product-price">
        {product.price / DELIMITER}
        {CURRENCY}
      </div>
      <Image src={product.pictureURL} alt={product.name} />
      <div className="slot-code">#{code}</div>
    </>
  );
};

export default ProductContainer;
