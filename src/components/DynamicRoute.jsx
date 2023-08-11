import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/data.json";
import Backbutton from "./Backbutton";

const DynamicRoute = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const searchItem = Data.find((item) => item.numericCode === id);
    setCountry(searchItem);
  }, []);
  return (
    <div className="country_details">
      <Backbutton />
      <div className="country_flag_details">
        <div className="country_flag">
          <img src={country?.flags?.png} alt="" />
        </div>
        <div className="country_info">
          <div className="top_section">
            <h2>{country.name}</h2>
            <div className="extra_info">
              <div className="left_extra">
                <p>Native Name: {country.nativeName}</p>
                <p>Population: {country?.population?.toLocaleString()}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Captital: {country.capital}</p>
              </div>
              <div className="right_extra">
                <p>Top Level Domain:{country.topLevelDomain}</p>
                <p>
                  Currencies:{" "}
                  {country.currencies && country.currencies[0]?.code}
                </p>
                <p>Languages: {country.demonym}</p>
              </div>
            </div>
            <div className="bottom_info">
              <span>Border Countries:</span>
              <div className="border_countries">
                {country.borders &&
                  country.borders.map((border) => <p key={border}>{border}</p>)}
              </div>
            </div>
          </div>
          <div className="bottom_section"></div>
        </div>
      </div>
    </div>
  );
};

export default DynamicRoute;
