import React, { useState } from "react";
import * as _ from "lodash";

import DropDown from "../DropDown";
import HighlightCard from "./HighlightCard";

import routes from "../../router/webRoutes";

import "./index.css";

const list = ["confirmed", "tested", "recovered", "vaccinated"];

const Highlights = ({ dataList, displayMap, link }) => {
  const [selectedParam, setSelectedParam] = useState("confirmed");
  const sortedList = _.orderBy(dataList, (item) => item.total[selectedParam], [
    "desc",
  ]).slice(0, 4);

  return (
    <div>
      <div
        className="OverviewHeadingCointainer"
        style={{ marginBottom: "30px" }}
      >
        <div className="homeHeading">Hot Reigons</div>
        <DropDown curr={selectedParam} setCurr={setSelectedParam} list={list} />
      </div>
      <div className="higlightCardGrid">
        {sortedList.map((o) => (
          <HighlightCard
            link={link ? `${routes.STATE_NULL}/${o.code}` : null}
            key={o.code}
            displayMap={displayMap}
            obj={o}
            selectedParam={selectedParam}
          />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
