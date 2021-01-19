import styled from "styled-components";

const BoughtProduct = styled.div`
  display: flex;
  padding: 10px;
  width: 300px;
  background-color: hsla(0, 0%, 83%, 0.7);
  backdrop-filter: blur(1rem);
  box-shadow: 5px 2px 12px black;
  margin: 10px;
  border-radius: 10px;
  backdrop-filter: blur(1rem);
  justify-content: space-between;

  & img {
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    padding: 10px;
  }

  & h3 {
    color: black;
  }
`;

export default BoughtProduct;
