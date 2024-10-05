"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";
import VchibanLogo from "@/assets/svg/vchiban-logo";
import NavbarItem from "./Navbaritem";
import GameCornerBtn from "./GameCornerBtn";

const Navbar: FC = () => {
  return (
    <motion.nav className="navbar">
      <ul className="navbar-header">
        <NavbarItem content="home" />
        <NavbarItem content="our family" />
        <NavbarItem content="events" />
      </ul>

      <div className="svgContainer">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
          <VchibanLogo />
        </motion.div>
      </div>

      <ul className="navbar-header">
        <NavbarItem content="merch" />
        <NavbarItem content="animations" />

        <GameCornerBtn />

        {/* <NavbarItem content="game corner" /> */}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
