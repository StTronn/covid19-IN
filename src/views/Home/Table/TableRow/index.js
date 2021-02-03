import React from "react";


const TableRow = ({field1,field2,field3,field4}) => {
    return(
        <div className="row">
          <div className="cell">
            <div className="cell">{field1}</div>
          </div>
          <div className="cell statistic">
            <div className="total" title="2023814">
              {field2}
            </div>
          </div>
          <div className="cell statistic">
            <div className="total" title="44199">
              {field3}
            </div>
          </div>
          <div className="cell statistic text-right">
            <div className="total" title="1927335">
              {field4}
              <br/>
              <div className='text-right subStatistic growwPrim'>54%</div>
            </div>
          </div>
        </div>
    )
}

export default TableRow;
