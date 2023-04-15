import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function addUser() {
    try {
      const url = "http://ec2-35-78-76-51.ap-northeast-1.compute.amazonaws.com:3000/users/RegisterUser";
      const user = {
        username: name,
        email: email,
        password: pass,
      };
      const response = await axios.post(url, user);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div className="registerMain">
        <form className="formRegister">
          <h1 className="Reg">Register</h1>
          <label className="inputLabel">Enter Name:</label>
          <input
            className="inputRegister"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label className="inputLabel">Enter Email Address:</label>
          <input
            className="inputRegister"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <label className="inputLabel">Enter Password:</label>
          <input
            className="inputRegister"
            type="text"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          ></input>
          <br />

          <div className="btnRegister">
            <Link to="/login">
              <button
                className="btnRegisterStyle"
                onClick={() => {
                  addUser();
                }}
              >
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="btnLogStyle">Log In</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
