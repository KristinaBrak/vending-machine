import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from{opacity:0.4}
to{opacity:1}
`;

const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
  margin: 0;

  & .product-name {
    --fontSize: 42px;
    position: absolute;
    top: 0px;
    left: calc(50% - var(fontSize) / 2);
    font-size: var(--fontSize);
    padding-top: 0px;
    padding-bottom: 10px;
    margin: 0;
  }

  & .product-price {
    --fontSize: 28px;
    position: absolute;
    top: 18%;
    left: calc(50% - var(fontSize) / 2);
    font-size: var(--fontSize);
    color: #4d4c4c;
  }

  & .slot-code {
    font-size: 34px;
  }
`;

export default CarouselItem;
