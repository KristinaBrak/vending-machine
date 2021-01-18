import styled from "styled-components";

const MenuButton = styled.button`
  --size: 40px;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  width: var(--size);
  height: var(--size);
  z-index: 2;

  &#open {
    position: relative;
    margin: -10px;
  }
`;

export default MenuButton;
