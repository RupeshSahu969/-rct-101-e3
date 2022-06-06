import React, { createContext,useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [count1,setCounter1] =useState(0)

const incre1=() => {
setCounter1(count1 + 1)

}

const decre1=() =>{

  setCounter1(count1 + 1)

}



  return <CartContext.Provider
  
  value={ {count1,incre1,decre1}}
  >{children}</CartContext.Provider>;
};
