import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { productUrl } from "../../Api/endPoints";
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(false)
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data)
        setLoading(false)
        // console.log(res.data);
      }).catch((err) => {
        console.log(err);
        setLoading(false)
      })
  }, [])
  return (
    <LayOut>
      {isLoading ? (<Loader />) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />)}
    </LayOut>
  )
}

export default ProductDetail;