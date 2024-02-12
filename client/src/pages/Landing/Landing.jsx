import React from 'react'
import LayOut from '../../components/LayOut/LayOut';
import Carousel from '../../components/Carousel/CarouselEffect';
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';
import Footer from "../../components/Footer/Footer"



const Landing = () => {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
      <Footer />
    </LayOut>
  )
}

export default Landing;