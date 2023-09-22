import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'
import DATA from '../Data.js'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions/index.js';


const Productdetail = () => {
    const proid = useParams();
    const dispatch = useDispatch();
    const [cart, setCart] = useState("Add to Cart");

    console.log(proid);
    const productdetail = DATA.filter(x => x.id == proid.id);
    // console.log(productdetail)
    const product = productdetail[0]
   
    // console.log(product);


  
    const handleCart = (product) => {
        if (cart === "Add to Cart") {
            // console.log(product)
            dispatch(addItem(product))
            setCart("Remove from cart")
        } else {
            // dispatch(delItem(product))
            setCart("Add to Cart")
        }

    }



    return (
        <>
            <div className='container my-5 py-3'>
                <div className='row'>
                    <div className='col-md-6 d-flex justify-content-center mx-auto product'>
                        <img src={product.image} alt={product.title} height='300px' />


                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h1 className='display-5 fw-bold'>{product.title}</h1>
                        {/* <h1 className='display-5 fw-bold'>Title</h1> */}
                        <hr />
                        <h2 className='my-4'>Price : $ {product.price}</h2>
                        {/* <h2 className='my-4'>$Price</h2> */}

                        <p className='lead'>{product.description}</p> 
                        {/* <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eligendi optio nesciunt odit numquam assumenda omnis dolor corrupti veritatis at, delectus ipsa ex ea culpa cumque officia quisquam deserunt dolore.</p> */}
                        <button onClick={() => handleCart(product)} className='btn btn-outline-primary my-5'>{cart}</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Productdetail