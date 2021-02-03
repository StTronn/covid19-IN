import React, { useState } from "react";
import * as _ from "lodash";

import DropDown from "./DropDown";
import HighlightCard from "./HighlightCard";

import "./index.css";

const Highlights = ({ data }) => {
  const [selectedParam, setSelectedParam] = useState("confirmed");
  let sortedList = Object.keys(data).filter(code=>code!=='TT').map((key) => {
    let obj = { ...data[key], ...{ code: key } };
    return obj;
  });
  sortedList = _.orderBy(sortedList, (item) => item.total[selectedParam], [
    "desc",
  ]).slice(0, 4);
  console.log(sortedList);

  return (
    <div>
      <div
        className="OverviewHeadingCointainer"
        style={{ marginBottom: "30px" }}
      >
        <div className="homeHeading">Hot Reigons</div>
        <DropDown
          selectedParam={selectedParam}
          setSelectedParam={setSelectedParam}
        />
      </div>
      <div className="higlightCardGrid">
        {sortedList.map((o) => (
          <HighlightCard obj={o} selectedParam={selectedParam} />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
