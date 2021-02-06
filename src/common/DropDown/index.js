import React, { useState } from "react";

import "./dropdown.css";

import { getValueFromKey } from "../../utils/helper";

const DropDown = ({ curr, setCurr, dropDownEntries }) => {
  const [dropwDownVisible, setDropDownVisible] = useState(false);
  const setSuggestion = (key) => {
    setCurr(key);
    setDropDownVisible(false);
  };
  return (
    <div className="overViewDropCointainer">
      <div
        className="overViewDrop"
        onClick={() => setDropDownVisible(!dropwDownVisible)}
      >
        {getValueFromKey(dropDownEntries, curr)}
        <Arrowdown />
      </div>

      {dropwDownVisible && (
        <div className="dropDown ">
          {dropDownEntries.map((o) => {
            const key = Object.keys(o)[0];
            const value = Object.values(o)[0];
            return (
              <Suggestion
                key={key}
                display={value}
                onClick={()=>{setSuggestion(key)}}
              />
            );
          })}
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

const Arrowdown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export default DropDown;
