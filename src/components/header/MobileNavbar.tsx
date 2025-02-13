"use client";
import { FC, useState } from "react";
import Link from "next/link";
import "./MobileNavbar.scss";
import { motion } from "framer-motion";
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
      {!openMenu && (
        <div className="nav-header">
          <div className="logo">
            <VchibanLogo />
          </div>
          <button className="close-btn" onClick={() => toogleOpenMenu(true)}>
            <MenuIcon />
          </button>
        </div>
      )}
      {openMenu && (
        <section className="content">
          <div className="nav-header">
            <div className="logo-dark">
              <VchibanLogoDark />
            </div>
            <button className="close-btn" onClick={() => toogleOpenMenu(false)}>
              <Exit />
            </button>
          </div>

          <ul className="mobile-navbar__list">
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
          </ul>
          <div>
            <Excl1 className="excl1" />
            <Excl2 className="excl2" />
          </div>
        </section>
      )}
    </motion.nav>
  );
};

export default MobileNavbar;
