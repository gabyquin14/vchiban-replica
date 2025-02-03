"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";
import VchibanLogo from "#/assets/svg/vchiban-logo";
import NavbarItem from "./NavbarItem";
import GameCornerBtn from "./GameCornerBtn";

interface NavbarProp {
  bgColor?: string;
}

const Navbar: FC<NavbarProp> = ({ bgColor }) => {
  return (
    <motion.nav className="navbar" style={{ backgroundColor: bgColor }}>
      <ul className="navbar-header">
        <NavbarItem content="home" link="/" />
        <NavbarItem content="our family" link="/our-family" />
        <NavbarItem content="events" link="/events" />
        <NavbarItem
          content="podcast"
          link="https://www.vchiban.com/podcast/latest-episode"
        />
      </ul>

      <div className="vchiban-logo-container">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
          <VchibanLogo />
        </motion.div>
      </div>

      <ul className="navbar-header">
        <NavbarItem content="merch" link="https://shop.vchiban.com/" />
        <NavbarItem content="animations" link="/animations" />

        <GameCornerBtn />
      </ul>
    </motion.nav>
  );
};

export default Navbar;
