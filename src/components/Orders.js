import React from "react";
import CartCard from "./CartCard";
import OrderCard from "./OrderCard";
import Summary from "./Summary";

function Orders() {
  var obj = [
    {
      name: "Fitness Shirt 1",
      quantity: 1,
      price: 1500,
      img: "",
    },
  ];
  return (
    <div>
      <div>
        <div className="shoppingCartMain">
          <h1>MY ORDERS</h1>
        </div>
        <br />
        <div>
          {obj.map((item) => {
            return <OrderCard item={item}></OrderCard>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Orders;
