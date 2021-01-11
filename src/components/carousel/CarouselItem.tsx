import React, { useState } from "react";

interface Props {
  item: React.ReactNode;
  changeIndex: (direction: string) => void;
}

const CarouselItem: React.FC<Props> = ({ item, changeIndex }) => {
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
    <div
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
    </div>
  );
};

export default CarouselItem;
