import React from "react";
// ---- Style ---- //
import "./index.scss";
import Card from "../Card";
// ---- Components ---- //

const Cards = ({ books }) => {
  return (
    <div className="cards">
      <div className="container">
        <div className="cards__content">
          {books.map((book, indx) => (
            <Card book={book} key={indx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
