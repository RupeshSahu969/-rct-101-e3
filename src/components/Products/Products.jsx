import React from "react";
import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product"

import { Link, Navigate, useSearchParams } from "react-router-dom";

const Products = () => {

const [data,setData] =useState([])

const [searchParams, setSearchParams] = useSearchParams();

const [get,setGet] =useState(Number(searchParams.get("get")))

useEffect(() => {
  setSearchParams({
    get
  });
  axios({
    url: "http://localhost:8080/products",
    method: "GET",
    params: {
      get
    }
  })
    .then((res) => {
      setData(res.data.data);
    })
    .catch((err) => {});
}, [get]);


  return <div>{/* Code here */}
  
  {data.map((item) => (
        <div key={item.id}>
         console.log(item)
        </div>
      ))}
  
  
  </div>;
};

export default Products;
