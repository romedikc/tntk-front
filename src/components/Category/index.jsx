import React from "react";
// ---- Style ---- //
import "./index.scss";

// ---- Components ---- //

const Category = ({ categoryName }) => {
  return (
    <div className="category">
      <p className="category__text">{categoryName}</p>
    </div>
  );
};

export default Category;
