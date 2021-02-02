import React from "react";

import "./index.css";
//added due to add dependices in bit.dev  & generating component library
import "../../App.css";

/**
*    @render react
*    @name PrimaryButton
*    @description Primary Button with onClick method taking style props as css
*    @example
*    <PrimaryButton
			  style={{ width: "150px", height: "50px" }}
     >
      Submit
     </PrimaryButton>
*/
const PrimaryButton = ({ onClick, style, children }) => {
  return (
    <div onClick={onClick} className="primaryButton" style={style}>
      <span>{children}</span>
    </div>
  );
};

export default PrimaryButton;
