import styled from "styled-components";

const Info = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin: 10px;

  & .product-name {
    font-size: 52px;
  }

  & .product-price {
    font-size: 32px;
  }
`;
export default Info;
