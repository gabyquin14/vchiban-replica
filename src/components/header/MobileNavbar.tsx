"use client";
import { FC, useState } from "react";
import Link from "next/link";
import "./MobileNavbar.scss";
import { AnimatePresence, motion } from "framer-motion";
import { springTransition } from "#/helpers/const-animations";
import VchibanLogo from "#/assets/svg/vchiban-logo";
import Excl1 from "#/assets/svg/header/excl-1";
import Excl2 from "#/assets/svg/header/excl-2";
import MenuIcon from "#/assets/svg/header/menu-icon";
import Exit from "#/assets/svg/header/exit";
import VchibanLogoDark from "#/assets/svg/vchiban-logo-dark";

const MobileNavbar: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toogleOpenMenu = (val: boolean) => {
    document.body.style.overflow = !val ? "visible" : "hidden";
    setOpenMenu(val);
  };

  return (
    <motion.nav className="mobile-navbar navbar-mobile">
      <motion.div
        className="nav-header closed-header"
        style={{ zIndex: openMenu ? 1 : 10 }}
        initial={{ opacity: 1 }}
        animate={{ opacity: !openMenu ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="logo">
          <VchibanLogo />
        </div>
        <button className="close-btn" onClick={() => toogleOpenMenu(true)}>
          <MenuIcon />
        </button>
      </motion.div>

      <AnimatePresence>
        {openMenu && (
          <motion.section
            key="open-content"
            className="content open-content"
            style={{ zIndex: 5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="nav-header">
              <div className="logo-dark">
                <VchibanLogoDark />
              </div>
              <button
                className="close-btn"
                onClick={() => toogleOpenMenu(false)}
              >
                <Exit />
              </button>
            </div>

            <motion.ul
              className="mobile-navbar__list"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/our-family">
                  our family
                  <span className="notification">4</span>
                </a>
              </li>
              <li>
                <a href="/events">events</a>
              </li>
              <li>
                <a href="https://www.vchiban.com/podcast/latest-episode">
                  podcast
                </a>
              </li>
              <li>
                <a href="https://shop.vchiban.com/">merch</a>
              </li>
              <li>
                <a href="/animations">animations</a>
              </li>
              <li>
                <a href="/game-corner">game corner</a>
              </li>
            </motion.ul>
            <motion.div
              initial={{ x: "100%", y: 100, opacity: 0 }}
              animate={{ x: 0, y: 100, opacity: 1 }}
              exit={{ x: "100%", y: 100, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Excl1 className="excl1" />
              <Excl2 className="excl2" />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default MobileNavbar;
