import styled from "styled-components";

const BoughtProduct = styled.div`
  display: flex;
  padding: 10px;
  width: 300px;
  background-color: hsla(0, 0%, 83%, 0.5);
  backdrop-filter: blur(1rem);
  box-shadow: 5px 2px 12px black;
  margin: 10px;
  border-radius: 10px;
  backdrop-filter: blur(1rem);
  justify-content: space-around;
  position: relative;

  & img {
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    padding: 10px;
  }

  & h3 {
    font-size: 36px;
    align-self: center;
    color: black;
    font-weight: normal;
  }
`;

export default BoughtProduct;
