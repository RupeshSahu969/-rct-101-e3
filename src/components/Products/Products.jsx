import React from "react";
import axios from "axios";
import {CartContext} from "../../context/CartContext"
import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product"

import { Link, useSearchParams } from "react-router-dom";
import { useContext } from "react";

const Products = () => {

const [data,setData] =useState([])

const [searchParams, setSearchParams] = useSearchParams();

const [get,setGet] =useState(Number(searchParams.get("get")))

const {count1,incre1,decre1} =useContext(CartContext)






const fastData=()=>{

  axios.get("http://localhost:8080/products")
  .then((s) =>
  
  setData(s.data)
  
  )
}
  
    
useEffect(() => {

  fastData();

},[])

  return <div>
    {/* Code here */}
  
  {
      data.map((mova)=>(
        <Product key={mova.id} mova={mova} inc={incre1} dec={decre1} />
      ))
    }
  
  
  </div>;
};

export default Products;
