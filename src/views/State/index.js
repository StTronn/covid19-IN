import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  selectData,
  selectDataError,
  selectDataLoading,
} from "../../store/dataSlice";

import Overview from "../../common/Overview";
import Highlights from "../../common/Highlights";
import Table from "../../common/Table";

import { STATE_CODES } from "../../utils/constants";

import "./index.css";

const State = () => {
  const { code } = useParams();
  let data = useSelector(selectData);
  const loading = useSelector(selectDataLoading);
  const error = useSelector(selectDataError);
  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>No data availble</div>;
  let stateData = data[code].districts;

  const dataList = Object.keys(stateData).map((key) => {
    let obj = { ...{ code: key }, ...stateData[key] };
    return obj;
  });

  const stateName = STATE_CODES[code];
  const overviewData = {  ...{ [stateName]: data[code] }, ...stateData};
  console.log(overviewData);
  return (
    <div className="homeCointainer px-df">
      <div className="left" style={{ display: "grid", rowGap: "50px" }}>
        <Overview
          data={overviewData}
          parent={stateName}
          dropList={Object.keys(overviewData)}
        />
        <Highlights dataList={dataList} />
        <Table dataList={dataList} data={stateData} />
      </div>
      <div>Updates</div>
    </div>
  );
};

export default State;
