import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import DATA from '../Data';
import { useDispatch } from 'react-redux';

const Product = () => {
  const [data, setData] = useState([])
  const dispatch = useDispatch();

  // const fileapi = async () => {
  //   const response = await axios.get("https://fakestoreapi.com/products");
  //   console.log(response.data);
  //   setData(response.data)
  // }
  // useEffect(() => {
  //   fileapi();   
  // }, []);


  const send = (e) => {
    // console.log(e)
  }


  // const cardItem = (item) => {
  //   return (
  //     <Card style={{ width: '18rem' }} className='card my-5 py-4' key={item.id}>
  //       <Card.Img variant="top" src={item.image} style={{height:'200px',objectFit:'contain'}} />
  //       <Card.Body className='text-center'>
  //         <Card.Title>{item.title}</Card.Title>
  //         <Card.Text>
  //           ${item.price}
  //         </Card.Text>
  //         <NavLink to = {`/product/${item.id}`} onClick={()=>send(item)} variant="primary" className='btn btn-outline-primary'>Buy Now</NavLink>
  //       </Card.Body>
  //     </Card>
  //   )

  // }



  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row justify-content-around'>
          {DATA.map((ele) => {
            return (
              <Card style={{ width: '18rem' }} className='card my-5 py-4' key={ele.id}>
                <Card.Img variant="top" src={ele.image} style={{ height: '200px', objectFit: 'contain' }} />
                <Card.Body className='text-center'>
                  <Card.Title>{ele.title}</Card.Title>
                  <Card.Text>
                    ${ele.price}
                  </Card.Text>
                  <NavLink to={`/product/${ele.id}`} onClick={() => send(ele)} variant="primary" className='btn btn-outline-primary'>Buy Now</NavLink>
                </Card.Body>
              </Card>
            )

          })}
          {/* {data.map((item) => {
            return (
              <Card style={{ width: '18rem' }} className='card my-5 py-4' key={item.id}>
                <Card.Img variant="top" src={item.image} style={{height:'200px',objectFit:'contain'}} />
                <Card.Body className='text-center'>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    ${item.price}
                  </Card.Text>
                  <NavLink to = {`/product/${item.id}`}  variant="primary" className='btn btn-outline-primary'>Buy Now</NavLink>
                </Card.Body>       
              </Card>
            )

          })} */}

        </div>
      </div>
    </div>
  )
}

export default Product