import React, { useState } from "react";
import CarouselArrow from "./CarouselArrow";
import Carousel from "./Carousel";
import CarouselItemContainer from "./CarouselItemContainer";

interface Props {
  children: React.ReactNode[];
}

const CarouselContainer: React.FC<Props> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(children.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goRight = () => {
    if (currentIndex + 1 > children.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const changeIndex = (direction: string) => {
    if (direction === "left") {
      goLeft();
    }
    if (direction === "right") {
      goRight();
    }
  };

  return (
    <Carousel>
      <CarouselArrow
        direction="left"
        clickFunction={() => changeIndex("left")}
        glyph="<-"
      />
      <CarouselItemContainer
        item={children[currentIndex]}
        changeIndex={changeIndex}
      />
      <CarouselArrow
        direction="right"
        clickFunction={() => changeIndex("right")}
        glyph="->"
      />
    </Carousel>
  );
};

export default CarouselContainer;
