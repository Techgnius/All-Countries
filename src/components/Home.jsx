import React from "react";
import Data from "../Data/data.json";
import { useState, useEffect } from "react";
import Countrywrapper from "./Countrywrapper";

const Home = ({ darkMode }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(Data);
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    filterData(searchTerm, selectedRegion);
  };

  const handleRegionFilter = (region) => {
    setSelectedRegion(region);
    filterData(search, region);
  };

  const filterData = (searchTerm, region) => {
    let filteredItems = Data;

    if (searchTerm) {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (region) {
      filteredItems = filteredItems.filter((item) =>
        item.region.toLowerCase().includes(region.toLowerCase())
      );
    }
    setFilteredData(filteredItems);
  };

  return (
    <div style={{ minHeight: "100vh", marginBottom: 10 }}>
      <Countrywrapper
        darkMode={darkMode}
        filteredData={filteredData}
        search={search}
        onSearch={handleSearch}
        onFilter={handleRegionFilter}
      />
    </div>
  );
};

export default Home;
