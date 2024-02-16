import React from 'react'
import classes from "../Footer/Footer.module.css"
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Footer = () => {

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // Adjust the duration as needed
      smooth: 'easeInOutQuad', // You can use other easing functions
    });
  };

  return (
    <>
      <div className={classes.btn_button}>
        <Link to="#" onClick={scrollToTop}><p>Back to Top</p></Link>
      </div>

      <div className={classes.outer_wrapper}>
        <div className={classes.footer_container} >
          <div className={classes.footer_wrapper}>
            <div>
              <h3>Get to Know Us</h3>
              <ul>
                <li><Link to="">Careers</Link></li>
                <li><Link to="">Blog</Link></li>
                <li><Link to="">About Amazon</Link></li>
                <li><Link to="">Investor Relation</Link></li>
                <li><Link to="">Amazon Devices</Link></li>
                <li><Link to="">Amazon Science</Link></li>
              </ul>
            </div>

            <div>
              <h3>Make Money with Us</h3>
              <ul>
                <li><Link to="">Sell products on Amazon</Link></li>
                <li><Link to="">Sell on Amazon Business</Link></li>
                <li><Link to="">Sell apps on Amazon</Link></li>
                <li><Link to="">Become an Affiliate</Link></li>
                <li><Link to="">Advertise Your Products</Link></li>
                <li><Link to="">Self-Publish with Us</Link></li>
                <li><Link to="">Host an Amazon Hub</Link></li>
                <li><Link to="">›See More Make Money <br /> with Us</Link></li>
              </ul>
            </div>

            <div>
              <h3>Amazon Payment Products</h3>
              <ul>
                <li><Link to="">Amazon Business Card</Link></li>
                <li><Link to="">Shop with Points</Link></li>
                <li><Link to="">Reload Your Balance</Link></li>
                <li><Link to="">Amazon Currency Converter</Link></li>
              </ul>
            </div>

            <div>
              <h3>Let Us Help You</h3>
              <ul>
                <li><Link to="">Amazon and COVID-19</Link></li>
                <li><Link to="">Your Account</Link></li>
                <li><Link to="">Your Orders</Link></li>
                <li><Link to="">Shipping Rates & Policies</Link></li>
                <li><Link to="">Returns & Replacements</Link></li>
                <li><Link to="">Manage Your Content and Devices</Link></li>
                <li><Link to="">Amazon Assistant</Link></li>
                <li><Link to="">Help</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={classes.ft_footer}>
          <Link to="" className={classes.footer_logo} onClick={scrollToTop}>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
          </Link>
          <Link to="">
            <TbWorld /> <p>English</p>
          </Link>
          <Link to="">
            <h5>$ USD-U.S. Dollar</h5>
          </Link>

          <Link to="/" className={classes.footer_language} onClick={scrollToTop}>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="Language" />
            <p>United States</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Footer