import React, { useState } from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DynamicRoute from "./components/DynamicRoute";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? "dark_mode" : "light_mode"}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/DynamicRoute/:id" element={<DynamicRoute />} />
      </Routes>
    </div>
  );
};

export default App;
