import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayaOut/LayOut';
import classes from "../Results/Result.module.css"
import { useParams } from "react-router-dom";
import axios from "axios"
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';
const Result = () => {
  const [results, setResults] = useState([])
  const {categoryName} = useParams();

  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res) => {
      setResults(res.data)
      // console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <LayOut>
        <section>
          <h1 style={{padding: "300px"}}>Results</h1>
          <p style={{padding: "30px"}}>Category / {categoryName}</p>
          <hr />

          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id}

              product={product}
              />
            ))}
          </div>
        </section>
    </LayOut>
  )
}

export default Result;