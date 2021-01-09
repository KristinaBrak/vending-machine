import styled from "styled-components";

const ControlPanel = styled.div`
  --sizeNumberButton: 60px;
  width: 100%;
  border: 1px solid green;
  display: grid;

  .keypad-digit {
    width: var(--sizeNumberButton);
    height: var(--sizeNumberButton);
    border-radius: 50%;
  }

  .cancel {
    width: 66.66%;
    height: 50px;
  }
`;

export default ControlPanel;
