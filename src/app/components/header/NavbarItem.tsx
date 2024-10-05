"use client";
import { FC, useState } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";

interface NavItem {
  content: string;
  link?: string;
}

const NavbarItem: FC<NavItem> = ({ content }) => {
  const [isHover, setisHover] = useState(false);
  return (
    <li
      className="link"
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <motion.div
        animate={{ opacity: isHover ? 1 : 0, scale: isHover ? 1 : 0 }}
        className="sip"
      />

      <a href="">{content}</a>
    </li>
  );
};

export default NavbarItem;
