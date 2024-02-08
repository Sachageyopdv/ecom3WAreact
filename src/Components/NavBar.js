import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #ddaabb;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const MyLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-family: Optima, sans-serif;
  color: grey;
  margin: 10px;
  padding: 10px;
  border: solid 2px black;
  border-radius: 90px;
  margin-left: ${(props) => (props.$right ? "auto" : "10px")};
`;

const NavBar = () => {
  return (
    <Header>
      <MyLink to="/">HOME</MyLink>
      <MyLink to="/" $right>
        Log in
      </MyLink>
      <MyLink to="/" $right>
        Log in
      </MyLink>
    </Header>
  );
};

export default NavBar;
