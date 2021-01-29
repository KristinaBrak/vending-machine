import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainWindow from "../../components/main/MainWindow";
import Subtitle from "../../components/main/Subtitle";
import Title from "../../components/main/Title";
import { boughtProductsSelector } from "../../redux-store/basket/basket.selector";
import BoughtProductContainer from "./BoughtProductContainer";

const BasketContainer = () => {
  const boughtProducts = useSelector(boughtProductsSelector);
  const [productsQuantity, setProductsQuantity] = useState(0);

  useEffect(() => {
    const counter = boughtProducts.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
    setProductsQuantity(counter);
  }, [boughtProducts]);

  return (
    <MainWindow>
      <Title>Basket</Title>
      {productsQuantity === 0 ? (
        <Subtitle>Basket is empty</Subtitle>
      ) : (
        <Subtitle>Items in basket: {productsQuantity}</Subtitle>
      )}
      {boughtProducts.map((item) => (
        <BoughtProductContainer
          key={item.product.id}
          name={item.product.name}
          url={item.product.pictureURL}
          quantity={item.quantity}
        />
      ))}
    </MainWindow>
  );
};

export default BasketContainer;
