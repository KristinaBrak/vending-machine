import styled from "styled-components";
import Subtitle from "../../../components/main/Subtitle";

const ProductList = styled.div`
  color: #eceaea;

  display: flex;
  flex-direction: column;

  & ${Subtitle} {
    margin: 0;
    margin-left: 10px;
  }
`;

export default ProductList;
