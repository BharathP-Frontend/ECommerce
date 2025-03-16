import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function SideBar({ open, onClose }) {
  return (
    <aside className={`sidebar-container ${open ? "show-sidebar" : ""}`}>
      <div className="sidebar-center wrapper">
        <div className="sidebar-cancel-button-container" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="sidebar-list-container">
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
    </aside>
  );
}

export default SideBar;
