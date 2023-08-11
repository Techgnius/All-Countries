import React from "react";
import Countries from "./Countries";
import Header from "./Header";

const CountryWrapper = ({
  darkMode,
  filteredData,
  search,
  onSearch,
  onFilter,
}) => {
  return (
    <div className="country_wrap ">
      <Header search={search} onSearch={onSearch} onFilter={onFilter} />
      <Countries filteredData={filteredData} darkMode={darkMode} />
    </div>
  );
};

export default CountryWrapper;
