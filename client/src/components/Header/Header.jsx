import React, { useContext } from 'react';
import classes from "./Header.module.css"
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';

const Header = () => {
  const [{basket}, dispatch] = useContext(DataContext)
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount
  }, 0)


  return (
    <section className={classes.fixed}>
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
          <Link to="#" className={classes.language}>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="" />

            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
            
          <Link to="/auth" className={classes.signin_button}>
              <p>Sign In</p>
              <span>Account & Lists</span>
          </Link>
          
          <Link to="/orders" className={classes.order_button}>
            <p>returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className={classes.cart} >
            <BiCart size={35}/> 
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>
    </section>
    <LowerHeader />
    </section>
  )
}

export default Header;