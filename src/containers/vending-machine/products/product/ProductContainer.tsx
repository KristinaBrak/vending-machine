import React from "react";
import { CURRENCY, DELIMITER } from "../../../../consts";
import { Product } from "../../../../redux-store/vending-machine/vendingMachine.slice";
import Image from "./Image";
import Info from "./Info";
import ProductStyle from "./ProductStyle";

interface Props {
  product: Product;
}

const ProductContainer: React.FC<Props> = ({ product }) => {
  return (
    <ProductStyle>
      <Image src={product.pictureURL} alt={product.name} />
      <Info>
        <div className="product-name">{product.name}</div>
        <div className="product-price">
          {product.price / DELIMITER}
          {CURRENCY}
        </div>
      </Info>
    </ProductStyle>
  );
};

export default ProductContainer;
