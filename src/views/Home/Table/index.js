import React from "react";

import TableRow from "./TableRow";

import { STATE_CODES } from "../../../utils/constants";

import { useSelector } from "react-redux";
import {
  selectData,
  selectDataError,
  selectDataLoading,
} from "../../../store/dataSlice";

import "./index.css";

const Table = () => {
  const data = useSelector(selectData);
  const loading = useSelector(selectDataLoading);
  const error = useSelector(selectDataError);
  if (loading) return <div>Loading</div>
  if (error) return <div>coudn't get data</div>
  return (
    <div className="tableCointainer">
      <div className="tableGrid">
        <div className="row headCointainer">
          <div className="cell heading">
            <div>State/UT</div>
          </div>
          <div className="cell heading">
            <div>Confirmed</div>
          </div>
          <div className="cell heading">
            <div>Recovered</div>
          </div>
          <div className="cell heading">
            <div>Tested</div>
          </div>
        </div>
        {/* row */}
        {Object.keys(data).map((code) =>
          code !== "TT" && STATE_CODES[code] ? (
            <TableRow
              field1={STATE_CODES[code]}
              field2={data[code].total.confirmed}
              field3={data[code].total.recovered}
              field4={data[code].total.tested}
            />
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

export default Table;
