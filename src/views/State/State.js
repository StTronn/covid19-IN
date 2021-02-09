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

  let stateData = data[code].districts;
  const stateName = STATE_CODES[code];
  stateData = { ...{ [stateName]: data[code] }, ...stateData };
  const dataList = getDataList(stateData);
  const childrenDataList= dataList.filter(o=>o.name!==stateName)

  return (
    <div key={code} className="homeCointainer px-df">
      <div className="left" style={{ display: "grid", rowGap: "50px" }}>
        <Overview
          data={stateData}
          intitalSelected={stateName}
          dataList={dataList}
        />
        <Highlights dataList={childrenDataList} />
        <Table columns={STATE_TABLE_CL} dataList={childrenDataList} />
      </div>
      <div></div>
    </div>
  );
};

const getDataList = (data) =>
  Object.keys(data).map((key) => {
    let obj = { ...{ code: key }, ...data[key],name:key };
    return obj;
  });


export default State;