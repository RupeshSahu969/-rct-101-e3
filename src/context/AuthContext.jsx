import React, { createContext,useState,useNavigate } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

const navigate =useNavigate();


const [isAut,setAut] =useState(false);


const login=()=>{

  setAut(true)

  localStorage.setItem("isAut",true)

}

const logout =() => {
  setAut(false)
  localStorage.setItem("isAut","")

}

useEffect(() => {

  const a=localStorage.getItem("isAut");
  setAut(a)
},[])



  return <AuthContext.Provider
  
  value={{isAut,login,logout}}
  
  >{children}</AuthContext.Provider>;
};
