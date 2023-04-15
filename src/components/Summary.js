import React from "react";

function Summary({ sum }) {
  return (
    <div className="ordersummary__container">
      <div className="OrderSummary">
        <div className="order">
          <h1>Order Summary</h1>
        </div>
        <div className="lineOrder"></div>
        <div className="order">
          <div>
            <h2>Total</h2>
          </div>
          <div>
            <h2>Rs. {sum}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
