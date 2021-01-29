import styled from "styled-components";

const Coin = styled.li`
  grid-area: ${(props) => props.key};
  list-style-type: none;
  text-indent: 0px;
`;

export default Coin;
