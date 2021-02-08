import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectDataStore } from "../../store/dataSlice";

import { STATE_CODES, HOME_TABLE_CL } from "../../utils/constants";

import Overview from "../../common/Overview";
import BottomNav from "../../common/BottomNav";
import Highlights from "../../common/Highlights";
import Table from "../../common/Table";
import Updates from "../../common/Updates";

const Home = () => {
  const [displayDash, setDisplayDash] = useState(true);
  const { data, loading, error } = useSelector(selectDataStore);

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>No data availble</div>;

  const dataList = getDataList(data);
  const allEntries = getEntries(STATE_CODES);
  const [dashHidden, updateHidden] = getHiddenClass(displayDash);
  return (
    <>
      <div className="homeCointainer px-df">
        <div className={dashHidden}>
          <div
            className={dashHidden}
            style={{ display: "grid", rowGap: "50px" }}
          >
            <Overview data={data} parent="TT" allEntries={allEntries} />

            <Highlights
              dataList={dataList}
              allEntries={allEntries}
              link={true}
            />

            <Table
              columns={HOME_TABLE_CL}
              dataList={dataList}
              data={data}
              link={true}
            />
          </div>
        </div>
        <div className={updateHidden}>
          <Updates />
        </div>
      </div>
      <BottomNav displayDash={displayDash} setDisplayDash={setDisplayDash} />
    </>
  );
};

const getDataList = (data) => {
  return Object.keys(data)
    .filter((code) => code !== "TT")
    .map((key) => {
      let obj = { ...data[key], ...{ code: key,name:STATE_CODES[key] } };
      return obj;
    });
};

const getEntries = (STATE_CODES) =>
  Object.keys(STATE_CODES).map((e) => ({
    [e]: STATE_CODES[e],
  }));

const getHiddenClass = (displayDash) => {
  return [
    !displayDash && window.innerWidth < 768 ? "hidden" : "",
    displayDash && window.innerWidth < 768 ? "hidden" : "",
  ];
};

export default Home;
