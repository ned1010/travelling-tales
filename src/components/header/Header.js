import React, { Fragment, useState } from "react";
import { navItems } from "./navItems";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaTimes} from "react-icons/fa";
import "./header.css";


export default function Header() {
  const [click, setClick] = useState(false);
  const [navbar, setNavBar] = useState(false);
  /*button for mobile menu*/
  const clickHandle = () => setClick(!click);
  const closeHandle = () => setClick(false);


  /* changing the header background depending on window with */
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBar(true)
    } else{
      setNavBar(false)
    }
  };

  window.addEventListener("scroll", changeBackground)

  return (
    <Fragment>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <div className="logo-container">
            {/* <Link to="#home" className="navbar-text" onClick={closeHandle}>
              Travel Agent
            </Link> */}

            <Link to="#home" className="navbar-logo icon" onClick={closeHandle}>
                <img className="logo-image" src={require("../../assets/images/logo.png")} alt="travel logo"/>
            </Link>
          </div>

          <div className="menu-icon">
            {click ? (
              <FaTimes onClick={clickHandle} />
            ) : (
              <AiOutlineMenuUnfold onClick={clickHandle} />
            )}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navItems.map((itemList, index) => {
              return (
                <li key={index} className="nav-item" onClick={closeHandle}>
                  <Link to={"#" + itemList.name} className="nav-link">
                    {itemList.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}
