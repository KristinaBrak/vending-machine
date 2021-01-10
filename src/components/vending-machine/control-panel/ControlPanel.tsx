import styled from "styled-components";

const ControlPanel = styled.div`
  --sizeNumberButton: 60px;
  width: 100%;
  border: 1px solid green;
  display: grid;
  justify-content: center;
  grid-template-areas:
    "keypad-1 keypad-2 keypad-3 keypad-cancel"
    "keypad-4 keypad-5 keypad-6 keypad-cancel"
    "keypad-7 keypad-8 keypad-9 keypad-0";

  & #keypad-cancel {
    height: calc(var(--sizeNumberButton) * 2);
  }
`;

export default ControlPanel;
