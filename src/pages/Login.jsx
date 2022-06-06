import React,{useState,useContext} from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {


  

  const { login } = useContext(AuthContext);

  return (
    <div style={{margin:"280px"}}>

      <input data-cy="login-email" 
      type="email" placeholder="Enter gmail" required
      
      />
      <input data-cy="login-password" 
      type="password" placeholder="Enter password" required
    
      />
      <button data-cy="login-submit" onClick={login}>Login</button>
      
    </div>
  );
};

export default Login;
