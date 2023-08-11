import React from "react";
import Country from "./Country";

const Countries = ({ filteredData, darkMode }) => {
  return (
    <div className="countries">
      {filteredData && filteredData.length > 0 ? (
        filteredData.map((item, id) => (
          <Country key={item.numericCode} darkMode={darkMode} country={item} />
        ))
      ) : (
        <p>No countries found.</p>
      )}
    </div>
  );
};

export default Countries;
