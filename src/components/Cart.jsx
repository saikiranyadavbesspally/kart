import React from 'react'
import { UseSelector, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delItem } from '../redux/actions';
import { NavLink } from 'react-router-dom';


const Cart = () => {
    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata)
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item))

    }
    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4'>
                    <div className='row'>
                        <h1>Your Cart is Empty</h1>

                    </div>
                </div>
            </div>
        )
    }
    const button = () => {
        return (
            <div className='container'>
                <div className='row' style={{display:'flex',justifyContent:'center'}}>
                    <NavLink to='/checkout' className='btn btn-primary mb-5 w-25'>Proceed to check out</NavLink>

                </div>
            </div>
        )
    }

    return (
        <>


            {
                getdata.length !== 0 && getdata.map((cartitem) => {
                    return (
                        <div className='px-4 my-5 bg-light rounded-3' >
                            <div className='container py-4'>
                                <button className='btn-close float-end' aria-label='Close' onClick={()=>handleClose(cartitem.id)} ></button>
                                <div className='row justify-content-center'>
                                    <div className='col-md-4'>
                                        <img src={cartitem.image} alt='Title image' height='200px' width='180px' style={{objectFit:"contain"}} />
                                    </div>
                                    <div className='col-md-4'>
                                        <h3> {cartitem.title}</h3>
                                        <p className='lead fw-bold'>Price : ${cartitem.price}</p>


                                    </div>

                                </div>

                            </div>
                        </div>
                    )
                })


            }

{/* 
            <div className='px-4 my-5 bg-light rounded-3' >
                <div className='container py-4'>
                    <button className='btn-close float-end' aria-label='Close'></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src='' alt='Title image' height='200px' width='180px' />
                        </div>
                        <div className='col-md-4'>
                            <h3>Title</h3>
                            <p className='lead fw-bold'>$Price</p>


                        </div>

                    </div>

                </div>
            </div> */}
            {getdata.length === 0 && emptyCart()}
            {getdata.length !== 0 && button()}
            {/* {button()} */}
        


        </>
    )
}

export default Cart