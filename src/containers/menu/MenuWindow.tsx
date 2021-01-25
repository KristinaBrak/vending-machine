import styled from "styled-components";

const MenuWindow = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  background: hsl(0, 0%, 0%, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & h2 {
    color: white;
    font-size: 32px;
    padding: 10px;
    padding-top: 40px;
  }

  & button {
    font-size: 20px;
    width: 70%;
    padding: 10px;
    margin: 10px;
    border-radius: 20px;
  }
`;

export default MenuWindow;
