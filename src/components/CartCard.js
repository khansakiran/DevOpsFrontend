import React from "react";
import { useState, useEffect } from "react";

function CartCard({ item,deleteProduct }) {
  
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="cartMainBox">
        <div className="cartProdName">
          <h2>{item.name}</h2>
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
          <div>
            <button className="cartBtn" onClick={()=>{deleteProduct(item.key)}}>DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
