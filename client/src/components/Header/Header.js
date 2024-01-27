import React from 'react';
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css"
import LowerHeader from './LowerHeader';

const Header = () => {
  return (
    <>
    <section>
      <div className={classes.header_container} >
        <div className={classes.logo_container}>
            <a href="#">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </a>  
            
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
          <input type="text" />
          <BsSearch size={25}/>
        </div>

      {/* orders Section*/}
        <div className={classes.order_container}>
          <a href="" className={classes.language}>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="" />

            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>
            
          <a href="" className={classes.signin_button}>
              <p>Sign In</p>
              <span>Account & Lists</span>
          </a>
          
          <a href="" className={classes.order_button}>
            <p>returns</p>
            <span>& Orders</span>
          </a>

          <a href="" className={classes.cart} >
            <BiCart size={35}/> 
            <span className={classes.cart_title}>cart</span>
            <span className={classes.count}>0</span>
          </a>
        </div>
      </div>
      <LowerHeader />
    </section>
    </>
  )
}

export default Header;