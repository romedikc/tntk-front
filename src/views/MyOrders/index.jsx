import React, { useEffect } from "react";
import "./index.scss";
import Cards from "../../components/Cards";
import { useNavigate } from "react-router";

const MyOrders = () => {
  const myOrders = JSON.parse(localStorage.getItem("my-orders")) || [];

  const navigate = useNavigate();
  useEffect(() => {
    const userLoggedin = localStorage.getItem("userLoggedin");
    if (userLoggedin !== "true") {
      navigate("/auth/login");
    }
  }, [navigate]);

  return (
    <div className="myOrders">
      <div className="container">
        <h2 className="myOrders__title title">My Orders</h2>
        {myOrders.length === 0 ? (
          <p className="myOrders__empty">
            Ensure your favorite books are on their way to you!
          </p>
        ) : (
          <Cards books={myOrders} btnBuy={false} />
        )}
      </div>
    </div>
  );
};

export default MyOrders;
