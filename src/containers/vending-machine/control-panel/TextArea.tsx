import styled from "styled-components";

const TextArea = styled.div`
  grid-area: ${(props) => props.className};
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  font-size: 24px;
  text-align: center;
`;

export default TextArea;
