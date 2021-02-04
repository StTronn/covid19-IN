import React from "react";

import TableRow from "./TableRow";

import routes from "../../router/webRoutes";

import "./table.css";

const Table = ({ columns, dataList, displayMap, link }) => {
  return (
    <div className="tableCointainer">
      <div className="tableGrid">
        <div className="row headCointainer">
          {columns.map((item) => (
            <div className="cell heading">
              <div>{item}</div>
            </div>
          ))}
        </div>
        {/* row */}
        {dataList.map((o) => (
          <TableRow
            link={link ? `${routes.STATE_NULL}/${o.code}` : null}
            key={o.code}
            field1={displayMap ? displayMap[o.code] : o.code}
            field2={o.total.confirmed}
            field3={o.total.recovered}
            field4={o.total.tested}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
