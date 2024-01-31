import React from 'react'
import Category from '../../components/Category/CategoryCard';
import Carousel from '../../components/Carousel/CarouselEffect';
import LayOut from '../../components/LayaOut/LayOut';
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