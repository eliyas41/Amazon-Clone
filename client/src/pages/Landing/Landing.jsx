import React from 'react'
import LayOut from '../../components/LayaOut/LayOut';
import Carousel from '../../components/Carousel/CarouselEffect';
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';



const Landing = () => {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  )
}

export default Landing;