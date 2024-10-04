"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";
import VchibanLogo from "../assets/svg/vchiban-logo";
import NavbarItem from "./Navbar-item";

const Navbar: FC = () => {
  return (
    <motion.nav>
      <ul className="navbar-header">
        <NavbarItem content="home" />
        <NavbarItem content="our family" />
        <NavbarItem content="events" />
        <NavbarItem content={<VchibanLogo />} />

        <NavbarItem content="merch" />
        <NavbarItem content="animations" />
        <NavbarItem content="game corner" />
      </ul>
    </motion.nav>
    // <motion.div
    //   whileHover={{ scale: 1.2 }}
    //   whileTap={{ scale: 1.1 }}
    //   drag="x"
    //   dragConstraints={{ left: -100, right: 100 }}
    //   style={{
    //     backgroundColor: "yellow",
    //     height: "200px",
    //     width: "200px",
    //   }}
    // />
  );
};

export default Navbar;
