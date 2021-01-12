import React, { useState } from "react";
import CarouselItem from "./CarouselItem";

interface Props {
  item: React.ReactNode;
  changeIndex: (direction: string) => void;
}

const CarouselItemContainer: React.FC<Props> = ({ item, changeIndex }) => {
  const [startX, setStartX] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const changeDirection = () => {
    if (hasMoved) {
      if (startX - lastX < 0) {
        changeIndex("left");
      }
      if (startX - lastX > 0) {
        changeIndex("right");
      }
      setHasMoved(false);
    }
    setStartX(0);
    setLastX(0);
  };

  return (
    <CarouselItem
      className="carousel-item"
      onTouchStart={(event) => {
        setStartX(event.touches[0].clientX);
      }}
      onTouchMove={(event) => {
        setLastX(event.touches[0].clientX);
        setHasMoved(true);
      }}
      onTouchEnd={() => {
        changeDirection();
      }}
    >
      {item}
    </CarouselItem>
  );
};

export default CarouselItemContainer;
