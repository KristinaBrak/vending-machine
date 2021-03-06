import styled from "styled-components";

const Arrow = styled.button`
  visibility: hidden;
  background-color: hsla(0, 0%, 50%, 0.85);
  color: white;
  width: 50px;
  height: 40px;
  border: none;
  position: absolute;

  &#slide-arrow-left {
    left: 0;
  }
  &#slide-arrow-right {
    right: 0;
  }

  & .activated {
    visibility: visible;
  }
`;

export default Arrow;
