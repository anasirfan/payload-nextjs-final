import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { CMSLink } from "../Link";
import { Media } from "../Media";

const Navbar = ({ header, trans = "true" }: { header: any; trans?: any }) => {
  // Setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // Change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (trans === "true") {
      if (window.scrollY >= 420) {
        setColor(true);
      } else {
        setColor(false);
      }
    } else {
      if (window.scrollY >= 50) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
  };

  useEffect(() => {
    if (trans === "true" || trans === undefined) {
      window.addEventListener("scroll", changeColor);
      return () => window.removeEventListener("scroll", changeColor);
    }
  }, [trans]);

  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
    
        <Media
              resource={header?.media}
              // fill
              className="logo"
              alt="Payload Logo"
            />
      
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#fff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        {header?.navItems.map(({ link }, i) => {
        return (<li className="nav-item nav-item2" onClick={closeMenu}>
          <CMSLink key={i} {...link}  />
          </li>)
      })}
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
