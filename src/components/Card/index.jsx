import React, { useState, useEffect } from "react";
import "./index.scss";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";

const Card = ({ book }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const favoriteBooks =
      JSON.parse(localStorage.getItem("favorite-books")) || [];
    const alreadyLiked = favoriteBooks.some((b) => b.title === book.title);
    setIsLiked(alreadyLiked);
  }, [book.title]);

  const likeFunction = () => {
    const favoriteBooks =
      JSON.parse(localStorage.getItem("favorite-books")) || [];
    const bookIndex = favoriteBooks.findIndex((b) => b.title === book.title);

    if (!isLiked) {
      favoriteBooks.push(book);
      setIsLiked(true);
    } else {
      if (bookIndex !== -1) {
        favoriteBooks.splice(bookIndex, 1);
        setIsLiked(false);
      }
    }
    localStorage.setItem("favorite-books", JSON.stringify(favoriteBooks));
  };

  const addToCart = () => {
    const cartBooks = JSON.parse(localStorage.getItem("cart-books")) || [];
    cartBooks.push(book);
    localStorage.setItem("cart-books", JSON.stringify(cartBooks));
    alert(`Книга "${book.title}" добавлена в корзину!`);
  };

  return (
    <div className="card">
      <span className="card__like" onClick={likeFunction}>
        {isLiked ? <MdFavorite /> : <GrFavorite />}
      </span>
      <div className="card__img">
        <img src={book.imglink} alt="#" />
      </div>
      <h3 className="card__title">{book.title}</h3>
      <p className="card__author">{book.author}</p>
      <div className="card__price-block">
        <span className="card__price">USD {book.price}</span>
        <button className="card__add-to-cart" onClick={addToCart}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
