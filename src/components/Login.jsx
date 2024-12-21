import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute  my-36 mx-auto right-0 left-0 p-12 bg-black text-white">
        <h1 className="font-bold text-3xl py-4"> Sign In </h1>
        <input
          type="email"
          placeholder="Email Address "
          className="p-2 my-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full"
        />
        <button className="p-4 my-2 bg-red-700 w-full">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
