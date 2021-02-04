import React from "react";
import { Link } from "react-router-dom";

import {format} from "../../../utils"

const TableRow = ({ field1, field2, field3, field4, link }) => {
  return (
    <div className="row">
      <div className="cell1">
        {link && <Link to={link}><span className="link">{field1}</span></Link>}
        {!link && field1}
      </div>
      <div className="cell statistic">
        <div className="total" title="2023814">
          {field2?format(field2): "NA"}
        </div>
      </div>
      <div className="cell statistic">
        <div className="total" title="44199">
          {field3?format(field3): "NA"}
        </div>
      </div>
      <div className="cell statistic text-right">
        <div className="total" title="1927335">
          {field4?format(field4): "NA"}
        </div>
      </div>
    </div>
  );
};

export default TableRow;
