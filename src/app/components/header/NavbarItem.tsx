"use client";
import { FC, useState } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { springTransition } from "@/helpers/const-animations";

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
          whileHover={{ scale: 1.1 }}
          transition={springTransition}
          className="hover-motion blue"
        />

        <div className="content-wrapper">
          <span className="content">{content}</span>
          {content.includes("family") && (
            <motion.div
              animate={{
                top: isHover ? "0" : "0.5rem",
                right: isHover ? "0" : "1.4rem",
              }}
              transition={springTransition}
              className="family-notification"
            >
              4
            </motion.div>
          )}
        </div>
      </a>
    </li>
  );
};

export default NavbarItem;