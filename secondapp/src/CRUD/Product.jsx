import React ,{useEffect, useState} from 'react'
import Axios from 'axios'

const Product = () => {

    let [products,setProducts]=useState([])

    useEffect(()=>{
        Axios.get("http://127.0.0.1:8080/api/products',product")
        .then((res)=>{
            setProducts(res.data)
        })
        .catch(()=>{})
    },[])
  
    return (
    <>
    <pre>{JSON.stringify(products)}</pre>
    <h2>Products</h2>
    </>
  )
}

export default Product