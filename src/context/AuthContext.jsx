import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAut, setIsAut] = useState(false);

  const login = () => {
    setIsAut(true);
    localStorage.setItem("isAut", true)
  }

  const logOut = () => {
    setIsAut(false);
    localStorage.setItem("isAut", "")
  }

  useEffect(()=>{
    const x = localStorage.getItem("isAut");
    setIsAut(x);
  },[])

  return( 
  <AuthContext.Provider value={ {isAut, login, logOut } } >
    {children}
  </AuthContext.Provider>);
};
