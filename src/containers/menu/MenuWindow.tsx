import styled from "styled-components";

const MenuWindow = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    border: 1px solid red;
  }
`;

export default MenuWindow;
