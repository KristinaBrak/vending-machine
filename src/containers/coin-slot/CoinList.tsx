import styled from "styled-components";

const CoinList = styled.ul`
  display: grid;
  width: 80%;
  height: 30%;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  grid-template-areas:
    "amount-10 amount-20 amount-50"
    "amount-100 amount-200 amount-500";
  column-gap: 20px;
  row-gap: 20px;
`;

export default CoinList;
