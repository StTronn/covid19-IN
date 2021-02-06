import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectDataStore } from "../../store/dataSlice";

import Overview from "../../common/Overview";
import Highlights from "../../common/Highlights";
import Table from "../../common/Table";

import { STATE_CODES, STATE_TABLE_CL } from "../../utils/constants";

const State = () => {
  const { code } = useParams();

  const { data, loading, error } = useSelector(selectDataStore);

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>No data availble</div>;

  const stateData = data[code].districts;
  const dataList = getDataList(stateData);
  const stateName = STATE_CODES[code];
  const overviewData = { ...{ [stateName]: data[code] }, ...stateData };
  const allEntries = getEntries(overviewData);

  return (
    <div key={code} className="homeCointainer px-df">
      <div className="left" style={{ display: "grid", rowGap: "50px" }}>
        <Overview
          data={overviewData}
          parent={stateName}
          allEntries={allEntries}
        />
        <Highlights allEntries={allEntries} dataList={dataList} />
        <Table columns={STATE_TABLE_CL} dataList={dataList} data={stateData} />
      </div>
      <div></div>
    </div>
  );
};

const getDataList = (data) =>
  Object.keys(data).map((key) => {
    let obj = { ...{ code: key }, ...data[key] };
    return obj;
  });

const getEntries =(data)=>Object.keys(data).map((key) => ({ [key]: key })); 

export default State;