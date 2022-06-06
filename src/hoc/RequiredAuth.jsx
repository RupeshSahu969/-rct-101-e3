import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {

  
  const { locationname } = useLocation();
  const {isAut} =useContext(AuthContext)

  if(isAut)
  {
      return children
  }
  else{
    return <Navigate to="/login" state={{from: locationname}} />
  }


  
};

export default RequiredAuth;
