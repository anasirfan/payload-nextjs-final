// Navbar.tsx
'use client'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { CMSLink } from "../Link";
import { Page } from "../../../payload/payload-types";

interface PageReference {
  relationTo: 'pages';
  value: string | Page;
}

interface Link {
  link: {
    type?: 'reference' | 'custom' | null;
    newTab?: boolean | null;
    reference?: PageReference | null;
    url?: string | null;
    label: string;
    appearance?: 'primary' | 'secondary' | null;
  };
  id?: string | null;
}

interface Props {
  links?: Link[] | null;
}


const Navbar: React.FC<Props> = ({ links }) => {
  // Setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // Change nav color when scrolling
  const [color, setColor] = useState(false);
  
  // Close menu
  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a href="/" className="logo">
          ATLANTIC
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#000" }} />
          ) : (
            <FaBars size={30} style={{ color: "#000" }} />
          )}
        </div>
        {Array.isArray(links) && links.length > 0 && (
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {links.map(({ link }, i) => {
              return (
                <li className="nav-item nav-item2" key={i} onClick={closeMenu}>
                  <CMSLink {...link} />
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
