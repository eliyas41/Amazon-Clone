import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../utility/action.type";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);

  // console.log(user);

  // console.log(email, password);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.value == "signin") {
      //firebase auth
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign-In</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_signInButton}>
            Sign In
          </button>
        </form>

        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* Create acount btn */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login_registerButton}>
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
};

export default Auth;
