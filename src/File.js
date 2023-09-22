import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function File() {
    const [data,setData] = useState([])

    const fileapi = async()=>{
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data.length);
        setData(response.data)

    }
    useEffect(()=>{
        fileapi()
    },[])
  return (
    <>
                                                                                                      
        
    </>
  )
}

export default File