"use client";
import { FC, useState } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";

interface NavItem {
  content: string;
  link?: string;
}

const NavbarItem: FC<NavItem> = ({ content, link }) => {
  const [isHover, setisHover] = useState(false);
  return (
    <li
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <a href={link} className="nav-link">
        <motion.div
          whileHover={{ scale: isHover ? [1, 1.05, 0.97, 1] : 1 }}
          animate={{
            opacity: isHover ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="hover-motion"
        />

        <div className="content-wrapper">
          <span className="content">{content}</span>
          {content.includes("family") && (
            <div className="family-notification">4</div>
          )}
        </div>
      </a>
    </li>
  );
};

export default NavbarItem;
