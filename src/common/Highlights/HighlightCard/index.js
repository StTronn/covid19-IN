import React from "react";

import { STATE_CODES } from "../../../utils/constants";
import { percent,format } from "../../../utils";
import Counter from "../../../common/Counter/";

const HighlightCard = ({ obj, selectedParam }) => {
  const delta =getDelta(obj,selectedParam);
  return (
    <div className="highlightCard card">
      <div className="highlightCardContentWrapper">
        <div className="highlightCardTitle">{STATE_CODES[obj.code]}</div>
        <div className="highlightCardValue">
          {<Counter end={obj.total[selectedParam]} />}
          <div className="highlightCardChange growwPrim">
            {format(delta)}{" "}
           ({percent(obj.total[selectedParam],delta)}%)
          </div>
        </div>
      </div>
    </div>
  );
};

const getDelta = (obj, param) => {
  return (
    (obj.delta && obj.delta[param]) || (obj.delta7 && obj.delta7[param]) || 0
  );
};

export default HighlightCard;
