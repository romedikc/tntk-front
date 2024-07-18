import React from "react";
// ---- Style ---- //
import "./index.scss";
import { Pagination } from "@mui/material";
import Card from "../Card";
// ---- Components ---- //

const Cards = ({ books, btnBuy }) => {
  const paginationNum = books.length / 12;

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
