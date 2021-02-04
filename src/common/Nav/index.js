import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../router/webRoutes";

import Moon from "./images/moon.svg";
import Sun from "./images/sun.svg";

import "./index.css";

const Nav = () => {
  const [theme, setTheme] = useState(findIntialTheme());
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("mode", JSON.stringify(newTheme));
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <div style={{ width: "100vw", maxWidth: "100%" }}>
      <div className="navCointainer ">
        <div className="logoNav">
          <Link to={routes.HOME}>
            <div className="logoNavTitle">Covid-In</div>
          </Link>
        </div>
        <div className="searchBar card">
          <input className="searchInput" placeholder="Search State"></input>

          <img
            className="searchImg"
            alt="searchIcon"
            src="https://assets-netstorage.groww.in/website-assets/prod/1.3.3/build/client/images/search.494f6987.svg"
          />
        </div>
        <div className="icons">
          <img
            className="themeToggle"
            alt="dark mode"
            onClick={toggleTheme}
            src={theme === "light" ? Moon : Sun}
          />
        </div>
      </div>
    </div>
  );
};

const findIntialTheme = () => {
  const cache = JSON.parse(localStorage.getItem("mode")) || false;

  if (cache) {
    document.documentElement.setAttribute("data-theme", cache);
    return cache;
  }

  let theme = "light";
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    theme = "dark";
  }
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

export default Nav;
