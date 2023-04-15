import React from "react";

function OrderCard({ item }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="cartMainBox">
        <div className="orderDetails_main">
          <div className="cartProdName">
            <h2>{item.name}</h2>
          </div>
          <div>
            <h2>Ordered On</h2>
            <h4 className="cartInfo">01-04-2022</h4>
          </div>
          <div>
            <h2>Delivered On</h2>
            <h4 className="cartInfo">07-04-2022</h4>
          </div>
        </div>
        <div className="line"></div>
        <div className="cart">
          <div>
            <img className="CartImg" src={item.image} />
          </div>
          <div className="cartInfo">
            <h2 className="cartInfoInner">Quantity x {item.quantity}</h2>
            <h2 className="cartInfoInner">Rs. {item.price}</h2>
            
          </div>
          <div className="cartInfo">
            <h2 className="cartInfoInner">paid by credit card.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
