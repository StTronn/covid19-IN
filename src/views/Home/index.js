import { useSelector } from "react-redux";
import {
  selectData,
  selectDataError,
  selectDataLoading,
} from "../../store/dataSlice";

import { STATE_CODES } from "../../utils/constants";

import Overview from "../../common/Overview";
import Highlights from "../../common/Highlights";
import Table from "../../common/Table";

import "./index.css";

const Home = () => {
  const data = useSelector(selectData);
  const loading = useSelector(selectDataLoading);
  const error = useSelector(selectDataError);
  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>No data availble</div>;

  const dataList = Object.keys(data)
    .filter((code) => code !== "TT")
    .map((key) => {
      let obj = { ...data[key], ...{ code: key } };
      return obj;
    });

  const dropList = Object.keys(STATE_CODES);
  return (
    <div className="homeCointainer px-df">
      <div className="left" style={{ display: "grid", rowGap: "50px" }}>
        <Overview
          data={data}
          parent="TT"
          displayMap={STATE_CODES}
          dropList={dropList}
        />
        <Highlights
          dataList={dataList}
          displayMap={STATE_CODES}
          dropList={dropList}
          link={true}
        />
        <Table dataList={dataList} data={data} link={true} displayMap={STATE_CODES} />
      </div>
      <div>Updates</div>
    </div>
  );
};

export default Home;
