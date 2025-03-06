"use client";
import { FC, useState } from "react";
import "./Navbar.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { springTransition } from "#/helpers/const-animations";
import ExclamationMark1 from "#/assets/svg/excl-mark-1";
import ExclamationMark2 from "#/assets/svg/excl-mark-2";
import ExclamationMark3 from "#/assets/svg/excl-mark-3";
import { excl1, excl2, excl3 } from "#/helpers/const-animations";
import TransitionLink from "../TransitionPages";

interface NavItem {
  content?: string;
  link?: string;
}

const GameCornerBtn: FC<NavItem> = ({ content = "game corner" }) => {
  const [isHover, setisHover] = useState(false);

  return (
    <li
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <TransitionLink href="/game-corner" className="nav-link gamer-btn">
        <motion.div
          className="excl-mark mark-1"
          initial="hidden"
          animate={isHover ? "visible" : "hidden"}
          variants={excl1}
        >
          <ExclamationMark1 />
        </motion.div>
        <motion.div
          className="excl-mark mark-2"
          initial="hidden"
          animate={isHover ? "visible" : "hidden"}
          variants={excl2}
        >
          <ExclamationMark2 />
        </motion.div>
        <motion.div
          className="excl-mark mark-3"
          initial="hidden"
          animate={isHover ? "visible" : "hidden"}
          variants={excl3}
        >
          <ExclamationMark3 />
        </motion.div>
        <motion.div
          className="hover-motion gc-bg"
          whileHover={{ scale: 1.1 }}
          transition={springTransition}
        />
        <span className="content-wrapper">{content}</span>
      </TransitionLink>
    </li>
  );
};

export default GameCornerBtn;
