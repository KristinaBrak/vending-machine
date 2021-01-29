import styled from "styled-components";

const MenuLink = styled.button`
  padding: 10px;
  & a:-webkit-any-link {
    text-decoration: none;
    color: black;
  }
  &:active {
    background-color: gray;
  }

  &:focus {
    outline: none;
  }
`;

export default MenuLink;
