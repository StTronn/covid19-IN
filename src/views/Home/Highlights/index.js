import React from "react";

import "./index.css";

const Highlights = () => {
  return (
    <div >
        <div className="homeHeading m-b-30">Hot Reigons</div>
        <div className="higlightCardGrid">
          <div className="highlightCard card">
            <div className="highlightCardContentWrapper">
              <div className="highlightCardTitle">Madhya Pradesh</div>
              <div className="highlightCardValue">
                10,846
                <div className="highlightCardChange growwPrim">+468 (2.3%)</div>
              </div>
            </div>
          </div>
          <div className="highlightCard card">
            <div className="highlightCardContentWrapper">
              <div className="highlightCardTitle">Madhya Pradesh</div>
              <div className="highlightCardValue">
                10,846
                <div className="highlightCardChange growwPrim">+468 (2.3%)</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Highlights;
