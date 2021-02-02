import React, { useState } from "react";

import Arrowdown from "../../../../assets/icons/Arrowdown";

import { STATE_CODES } from "../../../../utils/constants";

import './index.css'


const DropDown = ({ selectedState, setSelectedState }) => {
  const [dropwDownVisible, setDropDownVisible] = useState(false);
  return (
    <div className="overViewDropCointainer">
      <div
        className="overViewDrop"
        onClick={() => setDropDownVisible(!dropwDownVisible)}
      >
        {STATE_CODES[selectedState] || "NA"}
        <Arrowdown />
      </div>
      {dropwDownVisible && (
        <div className="dropDown ">
          {Object.keys(STATE_CODES).map((code) => (
            <Suggestion
              display={STATE_CODES[code]}
              onClick={() => {
                setSelectedState(code);
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
      {display}
    </div>
  );
};

export default DropDown;
