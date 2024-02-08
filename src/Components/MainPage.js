import axios from "axios";
import React from "react";
import styled from "styled-components";
import Product from "./Product";

const MyDiv = styled.div`
  height: 100vh;
  width: 100vw;
  flex: flex-wrap;
`;

const MainPage = () => {
  axios(
    "https://backend-exam-react-w2-g9us7xub4-nissim-shoprahacom.vercel.app/api/product"
  )
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error));

  return (
    <MyDiv>
      <Product></Product>
    </MyDiv>
  );
};

export default MainPage;
