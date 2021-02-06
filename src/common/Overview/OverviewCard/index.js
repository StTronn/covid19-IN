import React from "react";
import Counter from "../../Counter";

import { format } from "../../../utils/helper";

export default function index({ type, delta, today }) {
  return (
    <div className="overViewCard card">
      <div className="paddingoverViewCard">
        <div className="overViewCardDesc"> {type}</div>
        <div className="overViewCardDesc text-right">
          <div>{today ? <Counter end={today} /> : "NA"}</div>
          <div className={`overviewCardDayChange ${colorMap[type]}`}>
            {format(delta) || "NA"}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

const colorMap = {
  Confirmed: "growwRed",
  Recovered: "growwPrim",
  Tested: "growwPrim",
  Vaccinated: "growwPrim",
};
