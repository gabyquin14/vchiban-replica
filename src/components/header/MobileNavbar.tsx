"use client";
import { FC, useState } from "react";
import Link from "next/link";
import "./MobileNavbar.scss";
import { motion } from "framer-motion";
import { springTransition } from "#/helpers/const-animations";
import VchibanLogo from "#/assets/svg/vchiban-logo";
import Excl1 from "#/assets/svg/header/excl-1";
import Excl2 from "#/assets/svg/header/excl-2";

const MobileNavbar: FC = () => {
  return (
    <motion.nav className="mobile-navbar">
      <section className="content">
        <div className="logo">
          <VchibanLogo />
        </div>
        <ul className="mobile-navbar__list">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/our-family">our family</a>
          </li>
          <li>
            <a href="/events">events</a>
          </li>
          <li>
            <a href="/https://shop.vchiban.com/">merch</a>
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
    </motion.nav>
  );
};

export default MobileNavbar;
