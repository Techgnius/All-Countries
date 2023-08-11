import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country, darkMode }) => {
  return (
    <Link
      className={`${darkMode ? "dark_mode" : "light_mode"}`}
      to={`/DynamicRoute/${country.numericCode}`}
    >
      <div className="country">
        <div>
          <img src={country.flags.png} alt="" />
          <div className="country_info">
            <h3>{country.name}</h3>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Country;
