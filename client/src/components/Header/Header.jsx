import React, { useContext } from 'react';
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css"
import LowerHeader from './LowerHeader';
import { Link } from "react-router-dom";
import { DataContext } from '../DataProvider/DataProvider';

const Header = () => {
  const [{basket}, dispatch] = useContext(DataContext)
  console.log(basket.length);


  return (
    <>
    <section>
      <div className={classes.header_container} >
        <div className={classes.logo_container}>
            <Link to="/">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </Link>  
            
            <div className={classes.delivery}>
              <span>
              <SlLocationPin />
              </span>

              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
        </div>

        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder='Search_Amazon'/>
          <BsSearch size={25}/>
        </div>

      {/* orders Section*/}
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="" />

            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
            
          <Link to="" className={classes.signin_button}>
              <p>Sign In</p>
              <span>Account & Lists</span>
          </Link>
          
          <Link to="/orders" className={classes.order_button}>
            <p>returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className={classes.cart} >
            <BiCart size={35}/> 
            <span className={classes.count}>{basket.length}</span>
            <span className={classes.cart_title}>cart</span>
          </Link>
        </div>
      </div>
    </section>
    <LowerHeader />
    </>
  )
}

export default Header;