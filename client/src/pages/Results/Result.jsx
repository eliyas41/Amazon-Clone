import React, { useEffect, useState } from 'react'
import classes from "../Results/Result.module.css"
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from "react-router-dom";
import axios from "axios"
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';
import Loader from "../../components/Loader/Loader"

const Result = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const { categoryName } = useParams();

  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data)
        setLoading(false)
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
        setLoading(false)
      })
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />

        {isLoading ? (<Loader />) : (<div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}
        </div>
        )
        }
      </section>
    </LayOut>
  )
}

export default Result;