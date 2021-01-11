import styled from "styled-components";

const Info = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin: 10px;

  & .product-name {
    font-size: 32px;
    padding-bottom: 10px;
  }

  & .product-price {
    font-size: 24px;
  }
`;
export default Info;
