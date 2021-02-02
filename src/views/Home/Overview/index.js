import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectData,
  selectDataError,
  selectDataLoading,
} from "../../../store/dataSlice";

import OverviewCard from "./OverviewCard";
import DropDown from "./DropDown";

import "./index.css";

const Overview = () => {
  const data = useSelector(selectData);
  const loading = useSelector(selectDataLoading);
  const error = useSelector(selectDataError);
  const [selectedState, setSelectedState] = useState("TT");

  const currStateData = data[selectedState];
  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>No data availble</div>;
  const {delta,delta7,total}=currStateData
  return (
    <div>
      <div className="m-b-30">
        <div className="OverviewHeadingCointainer">
          <div className="homeHeading">Overview</div>
          <DropDown
            selectedState={selectedState}
            setSelectedState={setSelectedState}
          />
        </div>
      </div>
      <div className="overViewCardGrid">
        <OverviewCard
          type="Coinfirmed"
          delta={ (delta && delta.confirmed) || (delta7 && delta7.confirmed) || 0}
          today={total.confirmed}
        />
        <OverviewCard
          type="Recovered"
          delta={(delta && delta.recovered)||(delta7 && delta7.recovered) || 0}
          today={total.recovered}
        />
        <OverviewCard
          type="Tested"
          delta={(delta && delta.tested) || (delta7 && delta7.tested) || 0}
          today={total.tested}
        />
        <OverviewCard
          type="Vaccinated"
          delta={(delta&& delta.vaccinated) || (delta7 && delta7.vaccinated) || 0}
          today={total.vaccinated}
        />
      </div>
    </div>
  );
};

export default Overview;
