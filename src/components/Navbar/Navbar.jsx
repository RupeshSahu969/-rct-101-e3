import React from "react";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {

  const navigate= useNavigate();

const {isAut,logout,login} =useState(AuthContext)

const hendleLogin=()=> {

  if(isAut){
    logout();
    navigate("/")
  }
  else{
    navigate("login")
  }

}

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/login">Login</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button"
      
      onClick={hendleLogin}
      >{isAut ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
