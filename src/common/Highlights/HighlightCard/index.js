import React from "react";
import { Link } from "react-router-dom";

import Counter from "../../../common/Counter/";

import { format } from "../../../utils/helper";

const HighlightCard = ({ obj, selectedParam, name, link }) => {
  const delta = getDelta(obj, selectedParam);

  return (
    <>
      <div className={`highlightCard card ${link ? "" : "disable-p-events"}`}>
        <Link to={link}>
          <div className="highlightCardContentWrapper">
            <div className="highlightCardTitle">{name}</div>
            <div className="highlightCardValue">
              {obj.total[selectedParam] ? (
                <Counter end={obj.total[selectedParam]} />
              ) : (
                "NA"
              )}
              <div className="highlightCardChange growwPrim">
                {delta ? format(delta) : 0}{" "}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

const getDelta = (obj, param) => {
  return (
    (obj.delta && obj.delta[param]) || (obj.delta7 && obj.delta7[param]) || 0
  );
};

export default HighlightCard;
