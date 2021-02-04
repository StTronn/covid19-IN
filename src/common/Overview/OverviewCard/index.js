import React from "react";
import Counter from "../../Counter"

import  {format} from "../../../utils"

export default function index({ type, delta, today }) {
  if (!delta) delta=0;
  return (
    <div className="overViewCard card">
      <div className="paddingoverViewCard">
        <div className="overViewCardDesc"> {type}</div>
        <div className="overViewCardDesc text-right">
          <div><Counter end={today}/></div>
          <div className="overviewCardDayChange growwPrim">
            {format(delta)|| "NA"}
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
}

