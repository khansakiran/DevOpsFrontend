
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
    const [name, setName] = useState(" ");
    const [price, setPrice] = useState(" ");
    const [image, setImage] = useState(" ");

    async function addProduct() {
        try {
          const url = "http://ec2-35-78-76-51.ap-northeast-1.compute.amazonaws.com:3000/products/addProduct";
          const product = {
            name: name,
            price: price,
            image: image
          };
          const response = await axios.post(url, product);
        } catch (e) {
          console.log(e);
        }
      }


    return (
    <div>
      <div>
      <div className="registerMain">
        <form className="formRegister">
          <h1 className="Reg">Add New Product</h1>
          <label className="inputLabel">Enter Name of Product:</label>
          <input
            className="inputRegister"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label className="inputLabel">Enter Price:</label>
          <input
            className="inputRegister"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <br />
          <label className="inputLabel">Enter Image URL:</label>
          <input
            className="inputRegister"
            type="text"
            placeholder="URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></input>
          <br />
         
          <div className="btnRegister">
            <button className="btnLogStyle" onClick={()=>{addProduct()}}>Add Product</button>
            
          </div>
        </form>
      </div>
      
    </div>
    </div>
  );
}

export default AddProduct;
