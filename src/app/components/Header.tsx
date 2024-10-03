"use client";
import { motion } from "framer-motion";

import { FC } from "react";

const About: FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      style={{
        backgroundColor: "yellow",
        height: "200px",
        width: "200px",
      }}
    />
  );
};

export default About;
