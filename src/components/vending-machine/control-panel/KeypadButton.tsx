import styled from "styled-components";

const KeypadButton = styled.button`
  --sizeNumberButton: 60px;
  grid-area: ${(props) => props.id};
  width: var(--sizeNumberButton);
  height: var(--sizeNumberButton);
  border-radius: 50%;
`;

export default KeypadButton;
