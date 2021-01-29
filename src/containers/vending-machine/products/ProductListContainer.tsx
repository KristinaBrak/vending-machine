import React from "react";
import { useSelector } from "react-redux";
import { slotListSelector } from "../../../redux-store/vending-machine/vendingMachine.selector";
import CarouselContainer from "../../../components/carousel/CarouselContainer";
import ProductComponent from "./product/ProductComponent";
import ProductList from "./ProductList";
import Subtitle from "../../../components/main/Subtitle";

const ProductListContainer = () => {
  const slots = useSelector(slotListSelector);
  const text = "View products";

  return (
    <ProductList>
      <Subtitle>
        {text} <i className="fas fa-angle-right fa-sm" />
      </Subtitle>
      <CarouselContainer>
        {slots.map((slot) => (
          <ProductComponent
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
