import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='container py-5 my-5'>
        <div className='row' >
          <div className='col-md-6' style={{marginTop:'30px',marginBottom:'90px'}}>
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className='lead mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea rem neque. Exercitationem perferendis, fuga dolor fugiat impedit itaque fugit porro ea tempore cum voluptates laudantium obcaecati harum facere saepe assumenda! Libero ipsa architecto soluta laborum quia sit ipsum ab vero ad earum ex nulla culpa, optio numquam? Praesentium corrupti ratione ex ut at quas nesciunt sit, facilis inventore aperiam iure vero expedita excepturi, rem voluptatibus necessitatibus consequatur! Nemo optio numquam ratione suscipit voluptate dolorum saepe adipisci aut animi soluta nostrum, dignissimos eius facilis sunt eligendi architecto ipsum labore deleniti maxime. Atque repellat voluptatibus corrupti nisi obcaecati non beatae fuga.
            </p>
            <NavLink to='/contact' className='btn btn-outline-primary'>Contact Us</NavLink>

          </div>
          <div className='col-md-6 d-flex justify-content-center my-5'>
            <img src = 'https://cdn.dribbble.com/users/722246/screenshots/2076327/character-animated-2.gif' alt = '/' height='400px' width='400px' style={{objectFit:'contain'}}/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About