import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from "./Product.module.css"
import Loader from '../Loader/Loader';

const Product = () => {
  const [products, setProducts] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      setProducts(res.data)
      setLoading(false)
      // console.log(res.data);
    }).catch((err) => {
      console.log(err);
      setLoading(false)
    })
  }, []);

  return (
    <>
    {
      isLoading? (<Loader />) : ( <section className={classes.products_container}>
        {
          products?.map((singleProduct) => {
            return <ProductCard 
            key={singleProduct.id} 
            product={singleProduct} 
            renderDesc={false}
            renderAdd={true}
            />
          })
        }
  
      </section>)
    }
      </>
  )
}

export default Product;