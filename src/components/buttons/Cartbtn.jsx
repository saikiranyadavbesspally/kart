import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Cartbtn = () => {
  const getdata = useSelector((state)=>state.cartreducer.carts);
  console.log(getdata)




  return (
    <>
    <NavLink to='/cart' className="btn btn-primary">
      <span className='fa fa-shopping-cart me-1'></span> Cart({getdata.length})
      {/* <span className='fa fa-shopping-cart me-1'></span> Cart({0}) */}
    </NavLink>
        
    </>
  )
}

export default Cartbtn