import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import routes from "../../../router/webRoutes";

import { STATE_CODES } from "../../../utils/constants";

const initialList = Object.keys(STATE_CODES).filter((code) => code !== "TT");

const Search = () => {
  const history = useHistory();

  const [dropwDownVisible, setDropDownVisible] = useState(false);
  const [list, setList] = useState(initialList);
  const [input, setInput] = useState("");

  useEffect(() => {
    const newList = initialList.filter((item) =>
      fuzzy(STATE_CODES[item], input)
    );
    setList(newList);
  }, [input]);

  return (
    <div
      className="searchBar card"
      style={{ position: "relative", zIndex: "199" }}
    >
      <input
        value={input}
        onFocus={() => {
          setDropDownVisible(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && list.length > 0) {
            setInput("");
            history.push(`${routes.STATE_NULL}/${list[0]}`);
            setDropDownVisible(false);
          }
          else {setDropDownVisible(true)}
        }}
        onBlur={() => {
          setDropDownVisible(false);
        }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="searchInput"
        placeholder="Search State"
      ></input>
      {dropwDownVisible && (
        <div className="dropDown " style={{ top: "40px" }}>
          {list.map((code, i) => (
            <Suggestion
              key={code}
              display={STATE_CODES[code]}
              onMouseDown={() => {
                setInput("");
                history.push(`${routes.STATE_NULL}/${code}`);
                setDropDownVisible(false);
              }}
              highlight={i === 0 ? true : false}
            />
          ))}
        </div>
      )}

      <img
        className="searchImg"
        alt="searchIcon"
        src="https://assets-netstorage.groww.in/website-assets/prod/1.3.3/build/client/images/search.494f6987.svg"
      />
    </div>
  );
};

const Suggestion = ({ display, onMouseDown, highlight }) => {
  return (
    <div
      onMouseDown={onMouseDown}
      className={highlight ? "suggestion-high" : "suggestion"}
    >
      {display.charAt(0).toUpperCase() + display.slice(1)}
    </div>
  );
};

const fuzzy = function (s, term, ratio = 0.6) {
  var string = s.toLowerCase();
  var compare = term.toLowerCase();
  var matches = 0;
  if (string.indexOf(compare) > -1) return true; // covers basic partial matches
  for (var i = 0; i < compare.length; i++) {
    string.indexOf(compare[i]) > -1 ? (matches += 1) : (matches -= 1);
  }
  return matches / s.length >= ratio || term === "";
};

export default Search;
