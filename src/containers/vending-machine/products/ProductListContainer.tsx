import React from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../../../redux-store/vending-machine/vendingMachine.selector";
import CarouselContainer from "../../../components/carousel/CarouselContainer";
import ProductContainer from "./product/ProductContainer";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const products = useSelector(productsSelector);
  return (
    <ProductList>
      <h2>
        View products <i className="fas fa-angle-right fa-sm" />
      </h2>
      <CarouselContainer>
        {products.map((product) => (
          <ProductContainer key={product.name} product={product} />
        ))}
      </CarouselContainer>
    </ProductList>
  );
};

export default ProductListContainer;
