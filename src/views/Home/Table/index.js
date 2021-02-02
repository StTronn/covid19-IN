import React from "react";

import TableRow from "./TableRow";

import "./index.css";

const Table = () => {
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
            <div>Active</div>
          </div>
          <div className="cell heading">
            <div>Recovered</div>
          </div>
        </div>
        {/* row */}
        <TableRow/>
        <TableRow/>
        <TableRow/>
        <TableRow/>
      </div>
    </div>
  );
};

export default Table;
