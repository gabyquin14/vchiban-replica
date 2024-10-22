"use client";
import { FC, useState } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";

interface NavItem {
  content?: string;
  link?: string;
}

const GameCornerBtn: FC<NavItem> = ({ content = "game corner" }) => {
  const [isHover, setisHover] = useState(false);
  return (
    <li
      className="game-corner-btn"
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <motion.div
        animate={{ opacity: isHover ? 1 : 0, scale: isHover ? 1 : 0.8 }}
      />

      <a href="">{content}</a>
    </li>
  );
};

export default GameCornerBtn;
