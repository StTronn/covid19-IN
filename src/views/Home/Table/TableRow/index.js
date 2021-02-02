import React from "react";


const TableRow = () => {
    return(
        <div className="row">
          <div className="cell">
            <div className="state-name fadeInUp">Maharashtra</div>
          </div>
          <div className="cell statistic">
            <div className="total" title="2023814">
              20,23,814
            </div>
          </div>
          <div className="cell statistic">
            <div className="total" title="44199">
              44,199
            </div>
          </div>
          <div className="cell statistic text-right">
            <div className="total" title="1927335">
              19,27,335
              <br/>
              <div className='text-right subStatistic growwPrim'>54%</div>
            </div>
          </div>
        </div>
    )
}

export default TableRow;
