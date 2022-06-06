import React, { useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const navigation = useNavigate();
  const { isAut, login, logOut } = useContext(AuthContext);

 
  return (
    <div data-cy="navbar">Logo
      <Link data-cy="navbar-home-link" to='/' style={{margin: "280px"}}>Home</Link>
      <span data-cy="navbar-cart-items-count">Cart:</span>
      <button data-cy="navbar-login-logout-button" onClick={
        () => {
          if(isAut){
            logOut();
          }else{
            login();
          }
        }

      }>
         {isAut? "Logout" : "Login"}
     </button>

    </div>
  );
};

export default Navbar;
