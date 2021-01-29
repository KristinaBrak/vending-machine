import styled from "styled-components";

const MainWindow = styled.div`
  margin: 20px auto;
  padding: 0;
  width: 95%;
  height: 95vh;
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
export default MainWindow;
