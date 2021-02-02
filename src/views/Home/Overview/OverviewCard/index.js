import React from "react";
import Counter from "../../../../common/Counter"

export default function index({ type, delta, today }) {
  if (!delta) delta=0;
  return (
    <div className="overViewCard card">
      <div className="paddingoverViewCard">
        <div className="overViewCardDesc"> {type}</div>
        <div className="overViewCardDesc text-right">
          <div><Counter end={today}/></div>
          <div className="overviewCardDayChange growwPrim">
            {format(delta)}
            {" "}
            ({format(percent(today, delta))}%)
          </div>
        </div>
      </div>
    </div>
  );
}

const format = (number) => {
  return Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number
  );
};

const percent = (total, delta) => (delta / total) * 100;
