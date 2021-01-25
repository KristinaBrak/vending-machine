import styled from "styled-components";

const MenuButton = styled.button`
  --size: 50px;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  width: var(--size);
  height: var(--size);
  z-index: 3;

  border-radius: 50%;
  background-color: #eceaea;

  &:active {
    background-color: gray;
    color: #eceaea;
  }

  &:focus {
    outline: none;
  }
`;

export default MenuButton;
