import React from "react";
// ---- Style ---- //
import "./index.scss";
// ---- Components ---- //
import Category from "../Category";

const categories = [
  {
    id: 0,
    categoryName: "Фантастика",
    category: "fantasy",
  },
  {
    id: 1,
    categoryName: "Научная литература",
    category: "science",
  },
  {
    id: 2,
    categoryName: "Роман",
    category: "romance",
  },
  {
    id: 3,
    categoryName: "Детектив",
    category: "detective",
  },
  {
    id: 4,
    categoryName: "Историческая литература",
    category: "history",
  },
  {
    id: 5,
    categoryName: "Поэзия",
    category: "poetry",
  },
  {
    id: 6,
    categoryName: "Приключения",
    category: "adventure",
  },
  {
    id: 7,
    categoryName: "Детская литература",
    category: "children",
  },
  {
    id: 8,
    categoryName: "Философия",
    category: "philosophy",
  },
  {
    id: 9,
    categoryName: "Саморазвитие",
    category: "self-help",
  },
];

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        {categories.map((category, indx) => (
          <Category categoryName={category.categoryName} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
