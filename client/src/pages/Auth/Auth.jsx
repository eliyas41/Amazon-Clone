import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../utility/action.type";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  // console.log(user);

  // console.log(email, password);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name == "signin") {
      setLoading({ ...loading, signIn: true });
      try {
        // Firebase sign-in
        const userInfo = await signInWithEmailAndPassword(auth, email, password);
        // console.log(userInfo);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signIn: false });
        navigate(navStateData?.state?.redirect || '/')

      } catch (err) {
        // console.error("Sign-in error:", err.message);
        setError(err.message);
        setLoading({ ...loading, signIn: false });
      };
    } else {
      setLoading({ ...loading, signUp: true });
      try {
        // Firebase sign-up
        const userInfo = await createUserWithEmailAndPassword(auth, email, password);
        // console.log(userInfo);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signUp: false });
        navigate(navStateData?.state?.redirect || '/')
      } catch (err) {
        // console.error("Sign-up error:", err.message);
        setError(err.message);
        setLoading({ ...loading, signUp: false });
      };
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign-In</h1>
        {
          navStateData?.state?.msg && (
            <small style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold"
            }}>
              {navStateData?.state?.msg}
            </small>
          )
        }
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
            {loading.signIn ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* Create account btn */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login_registerButton}>
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;
