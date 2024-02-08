import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.nav`
  height: 70px;
  background-color: #ddaabb;
  display: flex;
  box-shadow: 10px 10px 10px pink;
`;

const MyLink = styled(Link)`
  align-self: center;
  margin: 10px;
  padding: 3px;
  border: solid 2px black;
  border-radius: 90px;
  margin-left: ${(props) => (props.$right ? "auto" : false)};
`;

const NavBar = () => {
  return (
    <Header>
      <MyLink to="/">HOME</MyLink>
      <MyLink to="/" $right>
        HOME
      </MyLink>
    </Header>
  );
};

export default NavBar;
