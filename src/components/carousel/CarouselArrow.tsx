import React from "react";
import Arrow from "./Arrow";

interface Props {
  direction: string;
  clickFunction: () => void;
  glyph: string;
}

const CarouselArrow: React.FC<Props> = ({
  direction,
  clickFunction,
  glyph,
}) => {
  return (
    <Arrow id={`slide-arrow-${direction}`} onClick={clickFunction}>
      {glyph}
    </Arrow>
  );
};

export default CarouselArrow;
