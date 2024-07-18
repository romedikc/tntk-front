import React, { useEffect } from "react";
// ---- Style ---- //
import "./index.scss";
import HorizontalCard from "../HorizontalCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/bookSlice";

// ---- Components ---- //

const NewBooks = () => {
  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="new-books">
      <div className="container">
        <h2 className="new-books__title title">New</h2>
        <p className="new-books__subtitle subtitle">
          What's new? Browse the latest titles in the new releases category to
          discover your next thrilling read!
        </p>
        <div className="new-books__cards">
          {!books
            ? " "
            : books.map((book, indx) => (
                <HorizontalCard book={book} key={indx} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default NewBooks;
