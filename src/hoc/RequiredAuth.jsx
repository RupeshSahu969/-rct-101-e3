import React from "react";
import {AuthContext} from "../context/AuthContext"
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {

  // const {isAut} =useContext(AuthContext)

  // if(isAut)
  // {
  //     return children
  // }
  // else{
      // return <Navigate to="/login" />
  // }


  
};

export default RequiredAuth;
