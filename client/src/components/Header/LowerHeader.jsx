import React from 'react'
import { MdMenu } from "react-icons/md";
import classes from "./Header.module.css"

const LowerHeader = () => {
  return (
    <>
      <div className={classes.lower_container}>
          <ul>
            <li><MdMenu /> <p>All</p></li>
            <li>Today's Deals</li>
            <li>Customer </li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
          </ul>
      </div>
    </>
  )
}

export default LowerHeader