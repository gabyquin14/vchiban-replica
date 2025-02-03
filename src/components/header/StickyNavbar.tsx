"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import "./StickyNavbar.scss";
import { springTransition } from "#/helpers/const-animations";

const StickyNavbar = () => {
  const navbarRef = useRef(null);
  const isNavbarInView = useInView(navbarRef, {
    amount: 0,
    margin: "300px 0px 0px 0px",
  });

  return (
    <>
      {/* Invisible div que detecta si el navbar original está en vista */}
      <motion.div ref={navbarRef} className="navbar-placeholder"></motion.div>

      <AnimatePresence mode="wait">
        {!isNavbarInView && (
          <motion.div
            className="navbar-fixed"
            initial={{ opacity: 0, top: "-6rem", transform: "scale(0.9)" }}
            animate={{ opacity: 1, top: "-3rem", transform: "scale(1)" }}
            exit={{
              opacity: 0,
              top: "-6rem",
              transform: "scale(0.9)",
              transition: { duration: 0.2 },
            }}
            transition={springTransition}
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyNavbar;
