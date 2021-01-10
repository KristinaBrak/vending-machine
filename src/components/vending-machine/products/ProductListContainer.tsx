import React from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../../../redux-store/vending-machine/vendingMachine.selector";
import ProductContainer from "./product/ProductContainer";

const ProductListContainer = () => {
  const products = useSelector(productsSelector);
  return (
    <div style={{ width: "80%", border: "2px solid blue" }}>
      {products.map((product) => (
        <ProductContainer product={product} />
      ))}
    </div>
  );
};

export default ProductListContainer;
