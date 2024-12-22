import React, { useState, useRef } from "react";
import Header from "./Header";
import { validatEmailPassData } from "../utils/validate";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const emailRef = useRef();
  const passRef = useRef();
  const [loginErrorMess, setLoginErrorMess] = useState(null);

  const handleSignUpClick = () => {
    setIsSignUp(!isSignUp);
  };
  const handleSubmitButton = () => {
    console.log(emailRef.current.value, passRef.current.value);

    let isDataValid = validatEmailPassData(
      emailRef.current.value,
      passRef.current.value
    );
    if (isDataValid) setLoginErrorMess(isDataValid);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
          alt="logo"
        />
      </div>
      <form
        className="w-3/12 absolute  my-36 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-75"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignUp ? " Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            type="text"
            placeholder="Name "
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email Address "
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={passRef}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 "
        />
        {loginErrorMess && (
          <p className="text-red-700 font-bold ">{loginErrorMess}</p>
        )}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSubmitButton}
        >
          Sign In
        </button>
        <p className="my-2 p-2" onClick={handleSignUpClick}>
          {isSignUp
            ? " Already register? Sign In now"
            : "New to Netflix? Sign Up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
