import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      login,
      password,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/auth/login");
  };

  return (
    <div className="signup">
      <form className="wrapper" onSubmit={handleSubmit}>
        <h2 className="title">Registration</h2>
        <p className="auth__text">Name</p>
        <label className="auth__label">
          <input
            className="auth__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <p className="auth__text">Login</p>
        <label className="auth__label">
          <input
            className="auth__input"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
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
          Register
        </button>
        <Link className="auth__link" to="/auth/login">
          Have an account? Login here
        </Link>
      </form>
    </div>
  );
};

export default Register;
