import React, { useState } from "react";

import Arrowdown from "../../../../assets/icons/Arrowdown";


const params=['confirmed','tested','recovered','vaccinated']

const DropDown = ({  selectedParam, setSelectedParam }) => {
  const [dropwDownVisible, setDropDownVisible] = useState(false);
  return (
    <div className="overViewDropCointainer">
      <div
        className="overViewDrop"
        onClick={() => setDropDownVisible(!dropwDownVisible)}
      >
        {selectedParam.charAt(0).toUpperCase() + selectedParam.slice(1)} 
        <Arrowdown />
      </div>
      {dropwDownVisible && (
        <div className="dropDown ">
          {params.map((param) => (
            <Suggestion
              key={param}
              display={param}
              onClick={() => {
                setSelectedParam(param);
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
