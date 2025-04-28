import React from "react";
import medley_logo from "../assets/medley_logo.png";
import "../styles/topBar.css";
import { useStoreState } from "easy-peasy";
import { NavLink } from "react-router-dom";

function TopBar() {
  const cartItems = useStoreState((state) => state.cartItems);
  const likedItems = useStoreState((state) => state.likedItems);

  return (
    <div className="flex justify-content-between align-items-center mx-3 my-3 navbar">
      <div className="lg:flex-1">
        <img
          src={medley_logo}
          height={40}
          width={90}
          className="border-round-sm ml-3"
        />
      </div>
      <div className="lg:flex-1 flex justify-content-between align-items-center navGroup mr-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `no-underline navItem ${isActive ? "active-link" : ""}`
          }
        >
          <span className="mr-3">
            <i className="pi pi-home mr-1"></i>
            <span className="hidden md:inline">Home</span>
          </span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `no-underline navItem ${isActive ? "active-link" : ""}`
          }
        >
          <span className="mr-3">
            <i className="pi pi-info-circle mr-1"></i>
            <span className="hidden md:inline">About Us</span>
          </span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `no-underline navItem ${isActive ? "active-link" : ""}`
          }
        >
          <span className="mr-3">
            <i className="pi pi-address-book mr-1"></i>
            <span className="hidden md:inline">Contact Us</span>
          </span>
        </NavLink>
        <NavLink
          to="/liked"
          className={({ isActive }) =>
            `no-underline navItem ${isActive ? "active-link" : ""}`
          }
        >
          <span className="mr-3 heartSpan">
            <span className="heartCount">{likedItems.length}</span>
            <i className="pi pi-heart mr-1 heartIcon"></i>
            <span className="hidden md:inline">Liked</span>
          </span>
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `no-underline navItem ${isActive ? "active-link" : ""}`
          }
        >
          <span className="cartSpan">
            <span className="cartCount">{cartItems.length}</span>
            <i className="pi pi-shopping-cart mr-1 cartIcon"></i>
            <span className="hidden md:inline">Cart</span>
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default TopBar;
