import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Product from './Product';

const Home = () => {
  return (
    <>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.seasonbazaar.com/wp-content/uploads/2019/08/Male-Social-Shirt-Fashion-Personality-Men-s-Casual-Slim-Long-sleeved-Shirt-Top-Blouse-Men-Shirt-2.jpg"
          alt="First slide"
          height='500px'
          style = {{objectFit:'contain'}}
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-purple_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=1661027419893'
          alt="Second slide"
          height='500px'
          style = {{objectFit:'contain'}}
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6vJQgWo_RAVgjfdkOLflHplaJ6aInysj7gQ&usqp=CAU'
          alt="Third slide"
          height='500px'
          style = {{objectFit:'contain'}}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel> 
     <Product/>
    </>
  )
}

export default Home