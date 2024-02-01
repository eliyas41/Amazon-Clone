import React, { useContext }  from 'react'
import classes from './Product.module.css'
import {Link} from 'react-router-dom'

function ProductCard({product}) {
    const { image, title, id } = product;
  
  return (
    <div  className={`${classes.card__container}`}>
        <Link to={`/products/${id}`}>
            <img src={image} alt="" className={classes.img_container}/>
        </Link>
        <div>
            <h3>{title}</h3>
        </div>
        </div>
  )
}

export default ProductCard;