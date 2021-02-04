import { useSelector } from "react-redux";
import { selectDataStore } from "../../store/dataSlice";

import { STATE_CODES, HOME_TABLE_CL } from "../../utils/constants";

import Overview from "../../common/Overview";
import Highlights from "../../common/Highlights";
import Table from "../../common/Table";

const Home = () => {
  const { data, loading, error } = useSelector(selectDataStore);

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>No data availble</div>;

  const dataList = getDataList(data);
  const allEntries = getEntries(STATE_CODES);

  return (
    <div className="homeCointainer px-df">
      <div className="left" style={{ display: "grid", rowGap: "50px" }}>
        <Overview data={data} parent="TT" allEntries={allEntries} />

        <Highlights dataList={dataList} allEntries={allEntries} link={true} />

        <Table
          columns={HOME_TABLE_CL}
          dataList={dataList}
          data={data}
          link={true}
          displayMap={STATE_CODES}
        />
      </div>
      <div>Updates</div>
    </div>
  );
};

const getDataList = (data) => {
  return Object.keys(data)
    .filter((code) => code !== "TT")
    .map((key) => {
      let obj = { ...data[key], ...{ code: key } };
      return obj;
    });
};

const getEntries = (STATE_CODES) =>
  Object.keys(STATE_CODES).map((e) => ({
    [e]: STATE_CODES[e],
  }));

export default Home;
