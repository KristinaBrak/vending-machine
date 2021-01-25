import React from "react";
import { useSelector } from "react-redux";
import { slotListSelector } from "../../../redux-store/vending-machine/vendingMachine.selector";
import CarouselContainer from "../../../components/carousel/CarouselContainer";
import ProductContainer from "./product/ProductContainer";
import ProductList from "./ProductList";
import { addProduct } from "../../../redux-store/basket/basket.slice";

const ProductListContainer = () => {
  const slots = useSelector(slotListSelector);
  const text = "View products";

  return (
    <ProductList>
      <h2>
        {text} <i className="fas fa-angle-right fa-sm" />
      </h2>
      <CarouselContainer>
        {slots.map((slot) => (
          <ProductContainer
            key={slot.product.name}
            product={slot.product}
            code={slot.code}
          />
        ))}
      </CarouselContainer>
    </ProductList>
  );
};

export default ProductListContainer;
