import React, { useState, useEffect } from "react";
import * as _ from "lodash";

import TableRow from "./TableRow";

import routes from "../../router/webRoutes";

import "./table.css";

const Table = ({ columns, dataList: dataListProps, link }) => {
  const [dataList, setDataList] = useState(dataListProps);
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortParam, setSortParam] = useState(columns[1].key);

  const changeSortParam = (newSortParam) => {
    if (newSortParam === sortParam) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortParam(newSortParam);
      setSortOrder("asc");
    }
  };

  useEffect(() => {
    const sortedList = _.orderBy(
      dataList,
      (item) =>
        sortParam === "name" ? item[sortParam] : item.total[sortParam],
      [sortOrder]
    );
    setDataList(sortedList);
  }, [sortOrder, sortParam]);

  console.log(dataList);
  return (
    <div className="tableCointainer">
      <div className="tableGrid">
        <div className="row headCointainer">
          {columns.map((column) => (
            <TableColumn
              column={column}
              sortParam={sortParam}
              sortOrder={sortOrder}
              changeSortParam={changeSortParam}
            />
          ))}
        </div>
        {/* row */}
        {dataList.map((o) => (
          <TableRow
            link={link ? `${routes.STATE_NULL}/${o.code}` : null}
            key={o.code}
            field1={o.name ? o.name : o.code}
            field2={o.total.confirmed}
            field3={o.total.recovered}
            field4={o.total.tested}
          />
        ))}
      </div>
    </div>
  );
};

const TableColumn = ({ column, changeSortParam, sortParam, sortOrder }) => {
  const changeParam = () => {
    changeSortParam(column.key);
  };
  if (column.key === sortParam)
    return (
      <div className="cell heading growwPrim " onClick={changeParam}>
        <div className="sortedCell">
          <span>{column.value}</span>
          {sortOrder === "asc" ? <ArrowUp /> : <ArrowDown />}
        </div>
      </div>
    );
  return (
    <div className="cell heading" onClick={changeParam}>
      <div>{column.value}</div>
    </div>
  );
};

const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    fill="currentColor"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);

const ArrowUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
  </svg>
);
export default Table;
