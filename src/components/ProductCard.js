import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  console.log(product);
  const navigate = useNavigate();
  const [count, setCount] = React.useState(1);

  function saveItem() {
    const prod = localStorage.getItem("products");
    if (prod === null) {
      localStorage.setItem(
        "products",
        JSON.stringify([
          {
            _id: product._id,
            name:product.name,
            price: product.price,
           quantity: 1,
           image: product.image
          },
        ])
      );
    } else {
      const array = JSON.parse(prod);
      array.push({
        _id: product._id,
            name:product.name,
            price: product.price,
           quantity: 1,
           image: product.image    
      });
      localStorage.setItem("products", JSON.stringify(array));
    }
  }

  return (
    <div
      className="card"
      onClick={() => {
        navigate("/user/productDetails/" + product._id, {
          state: { product: product },
        });
      }}
    >
      <div>
        <img className="cardImg" src={product.image}></img>
      </div>
      <div className="prodDesc">
        <h4>{product.name}</h4>
        <h4>Rs.{product.price}</h4>
      </div>
      <div className="btnMain">
        <div className="btnMain">
          <button
            className="btn"
            onClick={(e) => {
              e.stopPropagation()
              saveItem();
            }}
          >
            Add to Cart
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default ProductCard;
