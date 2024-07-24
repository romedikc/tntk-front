import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";

const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (user) => user.login === username && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("userLoggedin", true);
      navigate("/");

    } else {
      setError("Invalid username or password. Please try again."); // Set error message
    }
  };
  
  const user = JSON.parse(localStorage.getItem("users"))
  const userLoggedin = JSON.parse(localStorage.getItem("userLoggedin"))

  return (
    <div>
      {
        user?.length > 0 && userLoggedin ?
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 25, marginTop: 40}}>
            <p> Wellcome {user[0].name}</p>
          </div> 
          :
          <form className="wrapper" onSubmit={handleSubmit}>
            <h2 className="title">Login</h2>
            {error && <p className="auth__error">{error}</p>}
            <p className="auth__text">Login</p>
            <label className="auth__label">
              <input
                className="auth__input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <p className="auth__text">Password</p>
            <label className="auth__label">
              <input
                className="auth__input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button className="auth__btn" type="submit">
              Login
            </button>
            <Link className="auth__link" to="/auth/registration">
              Not registered? Create an account
            </Link>
          </form>
      }

    </div>
  );
};

export default Signin;
