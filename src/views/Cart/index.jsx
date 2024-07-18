import React, { useEffect } from "react";
// ---- Style ---- //
import "./index.scss";
import Cards from "../../components/Cards";
import { useNavigate } from "react-router";

// ---- Components ---- //

const Cart = () => {
  const [cartBooks, setCartBooks] = React.useState(
    JSON.parse(localStorage.getItem("cart-books")) || []
  );

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartBooks.forEach((book) => {
      totalPrice += book.price * 1;
    });
    return totalPrice;
  };

  const handleOrderClick = () => {
    const myOrders = JSON.parse(localStorage.getItem("my-orders")) || [];
    myOrders.push(...cartBooks);
    localStorage.setItem("my-orders", JSON.stringify(myOrders));

    localStorage.removeItem("cart-books");
    setCartBooks([]);

    alert("Заказ успешно оформлен!");
  };
  const navigate = useNavigate();
  useEffect(() => {
    const userLoggedin = localStorage.getItem("userLoggedin");
    if (userLoggedin !== "true") {
      navigate("/auth/login");
    }
  }, [navigate]);

  return (
    <div className="cart">
      <div className="container">
        <h2 className="cart__title title">Cart</h2>
        <span className="cart__allPrice">USD {calculateTotalPrice()}</span>
        <button className="cart__orderBtn" onClick={handleOrderClick}>
          Order
        </button>
        <p className="cart__subtitle subtitle">
          Your reading journey starts here!
        </p>
        <Cards books={cartBooks} />
      </div>
    </div>
  );
};

export default Cart;
