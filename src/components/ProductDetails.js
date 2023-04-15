import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductDetails({ product }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [obj, setObj] = React.useState(location.state.product);
  const [count, setCount] = React.useState(1);

  function saveItem() {
    const product = localStorage.getItem("products");
    if (product === null) {
      localStorage.setItem(
        "products",
        JSON.stringify([
          {
            _id: obj._id,
            price: obj.price * count,
            quantity: count,
            name: obj.name,
            image:obj.image
          },
        ])
      );
    } else {
      const array = JSON.parse(product);
      array.push({
        _id: obj._id,
        price: obj.price * count,
        quantity: count,
        name: obj.name,
        image:obj.image
      });
      localStorage.setItem("products", JSON.stringify(array));
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div className="prodDiv">
        <div className="prodDetails">
          <div className="details">
            <img
              className="ProductImg"
              src={obj.image}
            ></img>
          </div>
          <div className="details">
            <h2 className="prodName">{obj.name}</h2>
            <div class="hl"></div>
            <h2 className="price">Rs. {obj.price}</h2>
            <h2 className="quantity">
              Quantity{" "}
              <button
                className="quantityBtn"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>{" "}
              <button className="btnCount">{count}</button>{" "}
              <button
                className="quantityBtn"
                onClick={() => {
                  setCount(count - 1);
                }}
                disabled={count === 1}
              >
                {" "}
                -{" "}
              </button>
            </h2>
            <button
              className="btnBrowse"
              onClick={() => {
                saveItem();
              }}
            >
              Cart
            </button>
          </div>
          <div class="vl"></div>
          <div className="details">
            <h2 className="prodName">Delivery Options</h2>
            <h3 className="stock">Home Delivery</h3>
            <div class="hl"></div>
            <h3 className="stock">Rs. 70 (4-7 days)</h3>
            <Link to="/">
              <button className="btnBrowse">Browse Store</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
