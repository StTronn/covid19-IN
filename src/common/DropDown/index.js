import React, { useState } from "react";

import Arrowdown from "../../assets/icons/Arrowdown";

import "./index.css";

const DropDown = ({ curr, setCurr, list, displayMap }) => {
  const [dropwDownVisible, setDropDownVisible] = useState(false);
  return (
    <div className="overViewDropCointainer">
      <div
        className="overViewDrop"
        onClick={() => setDropDownVisible(!dropwDownVisible)}
      >
        {displayMap
          ? displayMap[curr]
          : curr.charAt(0).toUpperCase() + curr.slice(1)}
        <Arrowdown />
      </div>
      {dropwDownVisible && (
        <div className="dropDown ">
          {list.map((item) => (
            <Suggestion
              key={item}
              display={displayMap ? displayMap[item] : item}
              onClick={() => {
                setCurr(item);
                setDropDownVisible(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Suggestion = ({ display, onClick }) => {
  return (
    <div onClick={onClick} className="suggestion">
      {display.charAt(0).toUpperCase() + display.slice(1)}
    </div>
  );
};

export default DropDown;
