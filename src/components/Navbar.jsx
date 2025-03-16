import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCube,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";
import { useState } from "react";

function Navbar() {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="nav-container">
        <div className="nav-center wrapper">
          <div className="main-navbar">
            <div className="main-navbar-main-heading">
              <h2>EComm</h2>
              <div>
                <FontAwesomeIcon icon={faCube} size="lg" />
              </div>
            </div>

            <div className="main-nav-comb">
              <div
                className="main-navbar-hamburger"
                onClick={() => setIsOpen(true)}
              >
                <FontAwesomeIcon icon={faBars} />
              </div>

              <div className="main-navbar-cart-container">
                <Link to="/cart">
                  <div>
                    <FontAwesomeIcon icon={faCartShopping} size="lg" />
                  </div>
                  <h4>{cartItems.length}</h4>
                </Link>
              </div>
            </div>
          </div>

          <div className="sub-navbar">
            <ul>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/menclothing">
                <li>Men's Clothing</li>
              </NavLink>
              <NavLink to="/womenclothing">
                <li>Women's Clothing</li>
              </NavLink>
              <NavLink to="/jewelry">
                <li>Jewelry</li>
              </NavLink>
              <NavLink to="/electronics">
                <li>Electronics</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>

      <SideBar open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Navbar;
