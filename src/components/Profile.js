import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Profile() {

  const[user,setUser] = React.useState('')
  
  function getUser() {
    const user = localStorage.getItem("user");
    const p = JSON.parse(user);
    console.log(p)
    setUser(JSON.parse(user));
  }

  const navigate = useNavigate()
  function deleteAll() {
    localStorage.removeItem("user", JSON.stringify([]));
    return navigate('/login')
  }

  useEffect(() => {
    getUser();
  }, []);


  return (
    <div>
      <div className="account">
        <h1>My Account</h1>
      </div>
      <div className="accountBox">
        <div className="accountBox-3"></div>
        <div className="accountBox-1">
          <h4 className="">Name</h4>
          <div className="horizontalLine"></div>
          <h4>Email</h4>
          <div className="horizontalLine"></div>
          
        </div>

        <div className="accountBox-2">
          <h4 className="changepass">{user.username}</h4>
          <div className="horizontalLine"></div>
          <h4 className="changepass">{user.email}</h4>
          <div className="horizontalLine"></div>
          <br />
          <Link>
            <button className="btnReview" onClick={(e) => {
              e.preventDefault()
              deleteAll()}}>LOG OUT</button>
          </Link>
        </div>
        <div className="accountBox-3"></div>
      </div>
      
    </div>
  );
}

export default Profile;