import styled from "styled-components";

const VendingMachine = styled.div`
  margin: 10px auto;
  padding: 0;
  width: 350px;
  height: 620px;
  background: linear-gradient(
    to right top,
    hsla(0, 0%, 0%, 0.25),
    hsla(360, 100%, 100%, 0.25)
  );
  z-index: 1;
  backdrop-filter: blur(1rem);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default VendingMachine;
