import React from "react";
import { Link } from "react-router-dom";

import { format } from "../../../utils";
import Counter from "../../../common/Counter/";

const HighlightCard = ({ obj, selectedParam, displayMap, link }) => {
  const delta = getDelta(obj, selectedParam);
  return (
    <>
      {link && (
        <div className="highlightCard card">
          <Link to={link}>
            <div className="highlightCardContentWrapper">
              <div className="highlightCardTitle">
                {displayMap ? displayMap[obj.code] : obj.code}
              </div>
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
      )}
      {!link && (
        <div className="highlightCard card">
          <div className="highlightCardContentWrapper">
            <div className="highlightCardTitle">
                {displayMap ? displayMap[obj.code] : obj.code}
            </div>
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
        </div>
      )}
    </>
  );
};

const getDelta = (obj, param) => {
  return (
    (obj.delta && obj.delta[param]) || (obj.delta7 && obj.delta7[param]) || 0
  );
};

export default HighlightCard;
