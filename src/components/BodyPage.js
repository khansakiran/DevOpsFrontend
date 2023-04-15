import React from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function BodyPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  async function getProducts() {
    try {
      const response = await axios.get('http://ec2-35-78-76-51.ap-northeast-1.compute.amazonaws.com:3000/products')
      setProducts(response.data.products)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {

    getProducts();
  }, []);

  return (
    <div>
      <Link to="/addProduct">
      <button className="cartBtn">Add New Product</button>
        </Link>
      <h1 className="productMain">Related Products</h1>
      <div className="productMain_container">
        {products.map((product) => {
          return <ProductCard product={product}></ProductCard>;
        })}
      </div>
    </div>
  );
}

export default BodyPage;
