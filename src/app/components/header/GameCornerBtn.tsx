"use client";
import { FC, useState } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { springTransition } from "@/helpers/const-animations";
import ExclamationMark1 from "#/app/assets/svg/excl-mark-1";
import ExclamationMark2 from "#/app/assets/svg/excl-mark-2";
import ExclamationMark3 from "#/app/assets/svg/excl-mark-3";
import Link from "next/link";

interface NavItem {
  content?: string;
  link?: string;
}

const GameCornerBtn: FC<NavItem> = ({ content = "game corner" }) => {
  const [isHover, setisHover] = useState(false);

  // Each exclamation mark has a different delay
  const item1 = {
    visible: {
      opacity: 1,
      y: -15,
      x: 0,
      scale: 1,
      transition: { duration: 0.3, delay: 0.2 },
    },
    hidden: {
      opacity: 0,
      y: -10,
      x: 5,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };
  const item2 = {
    visible: {
      opacity: 1,
      y: -15,
      x: 0,
      scale: 1,
      transition: { duration: 0.3, delay: 0.1 },
    },
    hidden: {
      opacity: 0,
      y: -10,
      x: 5,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };
  const item3 = {
    visible: {
      opacity: 1,
      y: -15,
      x: 0,
      scale: 1,
      transition: { duration: 0.3, delay: 0.2 },
    },
    hidden: {
      opacity: 0,
      y: -10,
      x: -5,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <li
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <Link href="/game-corner" className="nav-link gamer-btn">
        <motion.div
          className="excl-mark mark-1"
          initial="hidden"
          animate={isHover ? "visible" : "hidden"}
          variants={item1}
        >
          <ExclamationMark1 />
        </motion.div>
        <motion.div
          className="excl-mark mark-2"
          initial="hidden"
          animate={isHover ? "visible" : "hidden"}
          variants={item2}
        >
          <ExclamationMark2 />
        </motion.div>
        <motion.div
          className="excl-mark mark-3"
          initial="hidden"
          animate={isHover ? "visible" : "hidden"}
          variants={item3}
        >
          <ExclamationMark3 />
        </motion.div>
        <motion.div
          className="hover-motion pink"
          whileHover={{ scale: 1.1 }}
          transition={springTransition}
        />
        <span className="content-wrapper">{content}</span>
      </Link>
    </li>
  );
};

export default GameCornerBtn;
