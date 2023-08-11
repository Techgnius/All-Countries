import React from "react";
import { Link } from "react-router-dom";

const Backbutton = () => {
  return (
    <Link to={`/`}>
      <button className="btn">
        <i className="bi bi-arrow-left"></i>
        Back
      </button>
    </Link>
  );
};

export default Backbutton;
