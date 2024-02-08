import React from "react";
import styled from "styled-components";

const Filter = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  height: 100%;
  width: 15%;
  background-color: pink;
`;

const SideBar = () => {
  return <Filter>SideBar</Filter>;
};

export default SideBar;
