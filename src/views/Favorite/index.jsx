import React, { useEffect } from "react";
import "./index.scss";
import Cards from "../../components/Cards";
import { useNavigate } from "react-router";

const Favorite = () => {
  const favoriteBooks =
    JSON.parse(localStorage.getItem("favorite-books")) || [];

  const navigate = useNavigate();
  useEffect(() => {
    const userLoggedin = localStorage.getItem("userLoggedin");
    if (userLoggedin !== "true") {
      navigate("/auth/login");
    }
  }, [navigate]);

  return (
    <div className="favorite">
      <div className="container">
        <h2 className="favorite__title title">Favorites</h2>
        <p className="favorite__subtitle subtitle">
          Save your favorite books in the 'Favorites' section and return to them
          anytime! Create your personal library of beloved works.
        </p>

        <div className="favorite__cards">
          <Cards books={favoriteBooks} />
        </div>
      </div>
    </div>
  );
};

export default Favorite;
