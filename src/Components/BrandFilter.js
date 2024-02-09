import React, { useState } from "react";

const BrandFilter = ({ productList, setFilter }) => {
  const [selectData, setSelectData] = useState("");

  let brandList = Array.from(new Set(productList.map((elem) => elem.brand)));

  const handleSelect = (e) => {
    setSelectData(e.target.value);
    setFilter((prevFilter) => ({
      ...prevFilter,
      brand: e.target.value,
    }));
  };

  return (
    <select onChange={handleSelect} value={selectData}>
      <option value="">Marque</option>
      {brandList.map((elem) => (
        <option key={elem} value={elem}>
          {elem}
        </option>
      ))}
    </select>
  );
};

export default BrandFilter;
