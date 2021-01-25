import styled from "styled-components";

const TextArea = styled.div`
  height: 40px;
  grid-area: ${(props) => props.className};
  border: 5px solid hsla(0, 0%, 83%, 0.7);
  background-color: #252323;
  color: #eceaea;
  border-radius: 10px;
  padding: 2px;
  margin: 10px 0px;
  font-size: 36px;
  text-align: center;
`;

export default TextArea;
