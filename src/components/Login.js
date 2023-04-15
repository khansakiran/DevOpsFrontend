import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate()
async function loginUser() {
  try {
    const url = "http://ec2-35-78-76-51.ap-northeast-1.compute.amazonaws.com:3000/users/login";
    const response = await axios.post(url, {email: email, password: pass})
    if (response.data.success  === false) {
      alert('invalid')
    }else {
      localStorage.setItem('user', JSON.stringify(response.data.user))
      return navigate('/body')
    }
  } catch(e) {
    console.log(e)
  }
}
  return (
    <div>
      <div className="registerMain">
        <form className="formRegister">
          <h1 className="Reg">Log In</h1>
          <label className="inputLabel">Enter Email Address:</label>
          <input
            className="inputRegister"
            type="text"
            placeholder="Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
            <button className="btnLoginStyle" onClick={(e) => {
              e.preventDefault()
              loginUser()}}>Log In</button>
          </div>
          <div className="pass">
            <h3 className="passDetails">
              <Link to="/register">Don't have an Account?</Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
