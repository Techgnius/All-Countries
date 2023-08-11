import React from "react";

const Filter = ({ onFilter }) => {
  const handleFilterChange = (e) => {
    const selectedRegion = e.target.value;
    onFilter(selectedRegion);
  };

  return (
    <div className="filter">
      <select
        className="country_filter"
        name="filter"
        onChange={handleFilterChange}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
