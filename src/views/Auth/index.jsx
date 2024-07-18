import React from "react";
// ---- Style ---- //
import "./index.scss";
import Signin from "./signin";
import Signup from "./signup";
import { Route, Routes } from "react-router";

// ---- Components ---- //

const Auth = () => {
  return (
    <div className="auth">
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/registration" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Auth;
