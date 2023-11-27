import React from "react";
import { HashLink } from "react-router-hash-link";
import HamburgerIcon from "../assets/icon-menu.svg";
import CloseIcon from "../assets/icon-close-menu.svg";
import "./Nav.css";

export default function Nav(props) {
  const menuClose = () => {
    props.setIsMenuOpen(false);
  };
  return (
    <>
      <nav className="nav-container">
        <div id="menu-icon" onClick={props.toggleMenu}>
          {props.isMenuOpen ? (
            <img src={CloseIcon} alt="close icon" />
          ) : (
            <img src={HamburgerIcon} alt="menu icon" />
          )}
        </div>
        <ul className="nav-menu" id="menu">
          <li className="q-line" data-target="menu-1">
            <HashLink smooth to={"/#menu-icon"} onClick={menuClose}>
              Home
            </HashLink>
          </li>
          <li className="q-line" data-target="menu-2">
            <HashLink smooth to={"/about#menu-icon"} onClick={menuClose}>
              About
            </HashLink>
          </li>
          <li className="q-line" data-target="menu-3">
            <HashLink smooth to={"/booking#menu-icon"} onClick={menuClose}>
              Online Reservation
            </HashLink>
          </li>
          <li className="q-line" data-target="menu-4">
            <HashLink smooth to={"/menu#menu-icon"} onClick={menuClose}>
              Menu
            </HashLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
