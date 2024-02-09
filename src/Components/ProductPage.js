import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  let { id } = useParams();
  id = id.substring(1);
  const [productData, setProductData] = useState({});

  console.log(productData);

  useEffect(() => {
    axios(`https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/product/${id}`)
      .then(({ data }) => {
        setProductData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <div>ProductPage</div>;
};

export default ProductPage;
