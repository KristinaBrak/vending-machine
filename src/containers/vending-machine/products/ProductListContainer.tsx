import React from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../../../redux-store/vending-machine/vendingMachine.selector";
import CarouselContainer from "../../../components/carousel/CarouselContainer";
import ProductContainer from "./product/ProductContainer";

const ProductListContainer = () => {
  const products = useSelector(productsSelector);
  return (
    <CarouselContainer>
      {products.map((product) => (
        <ProductContainer key={product.name} product={product} />
      ))}
    </CarouselContainer>
  );
};

export default ProductListContainer;
