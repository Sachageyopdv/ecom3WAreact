import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BrandFilter from "./BrandFilter";

const Filter = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  height: 100%;
  width: 15%;
  background-color: pink;
`;

// A refaire pour intégrer des components réutilisable

const SideBar = ({ productList, setFilter }) => {
  const [maxPrice, setMaxPrice] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(0);
  const [minPriceFilter, setMinPriceFilter] = useState(0);

  useEffect(() => {
    let max = 0;
    if (productList.length > 0) {
      productList.forEach((product) => {
        if (product.price > max) {
          max = product.price;
        }
      });
      setMaxPrice(max);
      setMaxPriceFilter(max);
      setFilter((prevFilter) => ({
        ...prevFilter,
        maxPrice: max,
      }));
    } else {
      setMaxPrice(0);
    }
    setMaxPrice(max);
  }, [productList, setFilter]);

  const handleMaxPrice = (e) => {
    const newMaxPrice = e.target.value;
    setMaxPriceFilter(e.target.value);
    setFilter((prevFilter) => ({
      ...prevFilter,
      maxPrice: newMaxPrice,
    }));
  };

  const handleMinPrice = (e) => {
    const newMinPrice = e.target.value;
    setMinPriceFilter(e.target.value);
    setFilter((prevFilter) => ({
      ...prevFilter,
      minPrice: newMinPrice,
    }));
  };

  return (
    <Filter>
      <h2>Filtre :</h2>
      <label>Prix:</label>
      <input
        type="number"
        min={0}
        value={minPriceFilter}
        onChange={handleMinPrice}
      ></input>
      <input
        type="number"
        max={maxPrice}
        onChange={handleMaxPrice}
        value={maxPriceFilter}
      ></input>
      <BrandFilter productList={productList} setFilter={setFilter}/>
    </Filter>
  );
};

export default SideBar;
