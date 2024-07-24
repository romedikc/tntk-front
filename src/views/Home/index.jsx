import React from "react";
// ---- Style ---- //
import "./index.scss";
// ---- Components ---- //
import Cards from "../../components/Cards";
import NewBooks from "../../components/NewBooks";
import { useSelector } from "react-redux";

const Home = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="home">
      <div className="section-1">
        <div className="container">
          <h1 className="section-1__title">
            The best deals and exclusive <br />
            products for you!
          </h1>
        </div>
      </div>
      <NewBooks />
      <div className="container">
        <h2 className="new-books__title title">Best Books - Top 100 Ranking</h2>
      </div>
      <Cards books={books} />
    </div>
  );
};

export default Home;
