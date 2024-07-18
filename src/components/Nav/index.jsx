import React, { useState } from "react";
// ---- Style ---- //
import "./index.scss";
// ---- Components ---- //
import { Link } from "react-router-dom";
import { GrCart, GrFavorite } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { CiBoxes } from "react-icons/ci";

const Nav = () => {
  const accessToken = localStorage.getItem("userLoggedin");

  const [isActive, setIsActive] = useState(false);

  const Links = [
    {
      id: 1,
      name: "Мои заказы",
      to: "my-orders",
      icon: <CiBoxes />,
    },
    {
      id: 2,
      name: "Избранные",
      to: "favorites",
      icon: <GrFavorite />,
    },
    {
      id: 3,
      name: "Корзина",
      to: "cart",
      icon: <GrCart />,
    },
  ];

  return (
    <nav className="nav">
      {Links.map((link, indx) => (
        <Link className="nav__link" to={link.to} key={indx}>
          {link.icon}
        </Link>
      ))}
      {!accessToken ? (
        <Link className="nav__link" to={"/auth/login"} key="4">
          <LuUser2 />
        </Link>
      ) : (
        <div className="profile">
          <span className="nav__link" onClick={() => setIsActive(!isActive)}>
            <LuUser2 />
          </span>
          {!isActive ? (
            ""
          ) : (
            <div className="profile__content">
              <h3>Hello!</h3>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
