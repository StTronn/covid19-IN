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
  //for Msite toggle & genrate class to hide 
  const [displayDash, setDisplayDash] = useState(true);
  const [dashClass, updateClass] = getHiddenClass(displayDash);

  const { data, loading, error } = useSelector(selectDataStore);

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>No data availble</div>;

  const dataList = getDataList(data);
  const childrenDataList = dataList.filter((o) => o.code !== "TT");

  return (
    <>
      <div className="homeCointainer px-df">
        <div className={dashClass}>
          <div style={{ display: "grid", rowGap: "50px" }}>
            <Overview data={data} intitalSelected="TT" dataList={dataList} />

            <Highlights dataList={childrenDataList} link={true} />

            <Table
              columns={HOME_TABLE_CL}
              dataList={childrenDataList}
              link={true}
            />
          </div>
        </div>
        <div className={updateClass}>
          <Updates />
        </div>
      </div>
      <BottomNav displayDash={displayDash} setDisplayDash={setDisplayDash} />
    </>
  );
};

const getDataList = (data) => {
  //making sure that India appears first in dropdown
  const retList=[{...data['TT'],...{ code: 'TT', name: STATE_CODES['TT'] }}];
  const stateList=Object.keys(data).filter(key=>key!=='TT').map((key) => {
    let obj = { ...data[key], ...{ code: key, name: STATE_CODES[key] } };
    return obj;
  });

  return [...retList,...stateList];
};


const getHiddenClass = (displayDash) => {
  return [
    !displayDash && window.innerWidth < 768 ? "hidden" : "",
    displayDash && window.innerWidth < 768 ? "hidden" : "",
  ];
};

export default Home;
