"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import "./StickyNavbar.scss";
import { springTransition } from "#/helpers/const-animations";
import { usePathname } from "next/navigation";

const StickyNavbar = () => {
  const navbarRef = useRef(null);
  const pathname = usePathname();
  const isInBio = pathname.startsWith("/our-family/");

  // Detecta si la navbar principal está en vista
  const isNavbarInView = useInView(navbarRef, {
    amount: 0,
    margin: "400px 0px 0px 0px",
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    if (hasChecked) {
      setIsScrolled(!isNavbarInView);
    } else {
      setHasChecked(true);
    }
  }, [isNavbarInView, hasChecked]);
  useEffect(() => {
    if (isInBio) {
      setIsScrolled(false);
    }
  }, [pathname]);

  return (
    <>
      {!isInBio && (
        <motion.div
          ref={navbarRef}
          className="navbar-placeholder navbar-desktop"
        ></motion.div>
      )}

      <AnimatePresence mode="wait">
        {!isInBio && isScrolled && (
          <motion.div
            key="sticky-navbar"
            className="navbar-fixed navbar-desktop"
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
