import styled from "styled-components";
import metallic from "../../../images/metallic.jpg";

const KeypadButton = styled.button`
  --sizeNumberButton: 60px;
  font-size: 20px;
  grid-area: ${(props) => props.id};
  width: var(--sizeNumberButton);
  height: var(--sizeNumberButton);
  border-radius: 50%;
  background: url(${metallic});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 1px 2px 2px black;

  &:focus {
    outline: none;
  }
`;

export default KeypadButton;
