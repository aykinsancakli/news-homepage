import logo from "../images/logo.svg";
import menuDefault from "../images/icon-menu.svg";
import menuClose from "../images/icon-menu-close.svg";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <nav className="main-nav container">
        <img src={logo} className="main-nav__logo" alt="logo"></img>

        <div className="main-nav__desktop">
          <ul className="main-nav__list">
            <li>
              <a href="#" className="main-nav__link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="main-nav__link">
                New
              </a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">
                Popular
              </a>
            </li>
            <li>
              <a href="#" className="main-nav__link">
                Trending
              </a>
            </li>
            <li>
              <a href="#" className="main-nav__link">
                Categories
              </a>
            </li>
            <button
              className={`main-nav__menu-btn ${isOpen ? `hide-btn` : ``}`}
              onClick={handleOpenMenu}
            >
              <img
                className="main-nav__menu-icon"
                src={menuDefault}
                alt="menu"
              ></img>
            </button>
          </ul>
        </div>
      </nav>

      <div className={`nav-mobile ${isOpen ? `open-menu` : `closed-menu`}`}>
        <button
          className={`nav-mobile__menu-close-btn ${
            isOpen ? `close-active` : ``
          }`}
          onClick={handleOpenMenu}
        >
          <img src={menuClose} alt="menu"></img>
        </button>
        <ul className="nav-mobile__list-mobile">
          <li className="nav-mobile__item" onClick={handleOpenMenu}>
            <a href="#" className="main-nav__link nav-mobile__link">
              Home
            </a>
          </li>
          <li className="nav-mobile__item" onClick={handleOpenMenu}>
            <a href="#" className="main-nav__link nav-mobile__link">
              New
            </a>
          </li>
          <li className="nav-mobile__item" onClick={handleOpenMenu}>
            <a href="#" className="main-nav__link nav-mobile__link">
              Popular
            </a>
          </li>
          <li className="nav-mobile__item" onClick={handleOpenMenu}>
            <a href="#" className="main-nav__link nav-mobile__link">
              Trending
            </a>
          </li>
          <li className="nav-mobile__item" onClick={handleOpenMenu}>
            <a href="#" className="main-nav__link nav-mobile__link">
              Categories
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`overlay ${isOpen ? `` : "hidden"}`}
        onClick={handleOpenMenu}
      >
        &nbsp;
      </div>
    </>
  );
}
