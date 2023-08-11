import React, { useEffect, useState } from "react";

const Navbar = ({ darkMode, toggleTheme }) => {
  const [visibility, setVisibility] = useState(true);
  let previousPosition = null;

  const handleNavbar = () => {
    const currentPosition = window.pageYOffset;

    if (previousPosition > currentPosition && currentPosition > 0) {
      setVisibility(true);
    } else if (previousPosition < currentPosition) {
      setVisibility(false);
    }
    previousPosition = currentPosition;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  return (
    <div
      className={`navbar ${visibility ? "" : "hide"} ${
        darkMode ? "dark_mode" : "light_mode"
      }`}
    >
      <div className="nav_content">
        <h3 className="nav_logo">Where in the world?</h3>
        <div
          className={`theme ${darkMode ? "dark_mode" : "light_mode"}`}
          onClick={toggleTheme}
        >
          <span className="theme_mode">
            <i
              className={`bi ${
                darkMode ? "bi-brightness-high-fill" : "bi-moon"
              }`}
            ></i>
            {darkMode ? "Light mode" : "Dark mode"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
