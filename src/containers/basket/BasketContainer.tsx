import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainWindow from "../../components/main/MainWindow";
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
  }, [productsQuantity]);

  return (
    <MainWindow>
      <h1>Basket</h1>
      <h3>All items: {productsQuantity}</h3>
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
