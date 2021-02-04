import React, { useState } from "react";
import * as _ from "lodash";

import DropDown from "../DropDown";
import HighlightCard from "./HighlightCard";

import routes from "../../router/webRoutes";

import "./highlight.css";

import { COVID_PARAMS } from "../../utils/constants";
import { getValueFromKey } from "../../utils/helper";

const Highlights = ({ allEntries, dataList, link }) => {
  const [selectedParam, setSelectedParam] = useState("confirmed");

  const sortedList = getSortedList(dataList, selectedParam);

  return (
    <div>
      <div
        className="OverviewHeadingCointainer m-b-30"
      >
        <div className="homeHeading">Hot Reigons</div>
        <DropDown
          curr={selectedParam}
          setCurr={setSelectedParam}
          dropDownEntries={COVID_PARAMS}
        />
      </div>
      <div className="higlightCardGrid">
        {sortedList.map((o) => (
          <HighlightCard
            link={link ? `${routes.STATE_NULL}/${o.code}` : null}
            key={o.code}
            name={getValueFromKey(allEntries, o.code)}
            obj={o}
            selectedParam={selectedParam}
          />
        ))}
      </div>
    </div>
  );
};

const getSortedList = (dataList, field) =>
  _.orderBy(dataList, (item) => item.total[field], ["desc"]).slice(0, 4);

export default Highlights;
