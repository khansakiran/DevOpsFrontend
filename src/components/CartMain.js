import React from "react";
import CartCard from "./CartCard";
import Summary from "./Summary";
import { useState, useEffect } from "react";

function CartMain() {
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);

  function getProduct() {
    const product = localStorage.getItem("products");
    const p = JSON.parse(product);
    console.log(p)
    setCart(JSON.parse(product));

    let totalPrice = 0;
    p.forEach((p) => {
      totalPrice = totalPrice + p.price;
    });
    setSum(totalPrice);
  }

  function deleteProduct(key) {
    const product = localStorage.getItem("products");
    const productArray = JSON.parse(product);
    const newArray = productArray.filter((item) => {
      return item.key !== key;
    });
    localStorage.setItem("products", JSON.stringify(newArray));
    getProduct();
  }

  function deleteAll() {
    localStorage.setItem("products", JSON.stringify([]));
    getProduct();
  }
  
  async function createOrder() {
    const prod = [];
    cart.forEach((item) => {
      const products = {
        _id: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        review:[]
      };
      prod.push(products);
    });
    let date = new Date();
    let newDateObj = new Date(date.getTime() + 30 * 60000);
    const order = {
      orderDate: new Date().toLocaleString(),
      deliveryDate: newDateObj.toLocaleString(),
      price: sum,
      productIDList: prod,
    };

    try {
      console.log(order)
      const url = "http://ec2-35-78-76-51.ap-northeast-1.compute.amazonaws.com:3000/users/addOrder" ;
      //await axios.put(url, order);
      //deleteAll();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="shoppingCartMain">
        <h1>SHOPPING CART</h1>
        <button
          className="cartBtn"
          onClick={() => {
            deleteAll();
          }}
        >
          EMPTY CART
        </button>
      </div>
      <br />
      <div>
        {cart.map((item) => {
          return (
            <CartCard item={item} deleteProduct={deleteProduct}></CartCard>
          );
        })}
      </div>
      <div>
        <Summary sum={sum}></Summary>
      </div>
      <div className="checkOutBtn">
        <button
          className="cartBtn"
          onClick={() => {
            createOrder();
          }}
        >
          CHECK OUT
        </button>
      </div>
    </div>
  );
}

export default CartMain;
