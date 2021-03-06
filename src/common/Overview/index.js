import React, { useState } from "react";

import OverviewCard from "./OverviewCard";
import DropDown from "../DropDown";

import "./overview.css";

const Overview = ({ dataList, intitalSelected }) => {
  const [selectedKey, setSelectedKey] = useState(intitalSelected);

  const currStateData = dataList.find((o) => o.code === selectedKey);
  const { delta, delta7, total } = currStateData;

  return (
    <div>
      <div className="m-b-30">
        <div className="OverviewHeadingCointainer">
          <div className="homeHeading">Overview</div>
          <DropDown
            curr={selectedKey}
            setCurr={setSelectedKey}
            dataList={dataList}
          />
        </div>
      </div>

      <div className="overViewCardGrid">
        <OverviewCard
          type="Confirmed"
          delta={
            (delta && delta.confirmed) || (delta7 && delta7.confirmed) || 0
          }
          today={total.confirmed}
        />
        <OverviewCard
          type="Recovered"
          delta={
            (delta && delta.recovered) || (delta7 && delta7.recovered) || 0
          }
          today={total.recovered}
        />
        <OverviewCard
          type="Tested"
          delta={(delta && delta.tested) || (delta7 && delta7.tested) || 0}
          today={total.tested}
        />
        <OverviewCard
          type="Vaccinated"
          delta={
            (delta && delta.vaccinated) || (delta7 && delta7.vaccinated) || 0
          }
          today={total.vaccinated}
        />
      </div>
    </div>
  );
};

export default Overview;
