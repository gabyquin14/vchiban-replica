import { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { springTransition, bouncyTransition } from "#/helpers/const-animations";
import "../../ui/springBtn/SpringButton.scss";
import "./BannerButton.scss";
import ChevronDown from "#/assets/svg/chevron-down";
import Sparkle1 from "#/assets/svg/banner-btn/sparkle-1";
import Sparkle2 from "#/assets/svg/banner-btn/sparkle-2";
import Sparkle3 from "#/assets/svg/banner-btn/sparkle-3";
import ExclMark from "#/assets/svg/banner-btn/excl-mark";

const BannerButton = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button className="spring-btn banner">
      <div className="content-wrapper">
        <div className="text-wrapper">
          <span>See more of what we can do</span>
          <ChevronDown />
        </div>
      </div>
      <motion.div
        className="bouncy-bg"
        whileHover={{ inset: "-4px -12px" }}
        transition={springTransition}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
      >
        <motion.div
          transition={isHover ? springTransition : ""}
          animate={isHover ? { top: "-2rem" } : { top: "-1.2rem" }}
          initial={{ top: "-1.2rem" }}
          className="sparkle1"
        >
          <Sparkle1 />
        </motion.div>
        <motion.div
          transition={isHover ? springTransition : ""}
          animate={isHover ? { left: "-1.2rem" } : { left: "-0.7rem" }}
          initial={{ top: "2.5rem" }}
          className="sparkle2"
        >
          <Sparkle2 />
        </motion.div>
        <motion.div
          transition={isHover ? springTransition : ""}
          animate={isHover ? { top: "6rem" } : { top: "4.2rem" }}
          initial={{ top: "4.2rem" }}
          className="sparkle3"
        >
          <Sparkle3 />
        </motion.div>
        <motion.div
          transition={isHover ? springTransition : ""}
          animate={isHover ? { top: "-2rem" } : { top: "-1.3rem" }}
          className="excl-mark"
        >
          <ExclMark />
        </motion.div>
      </motion.div>
    </button>
  );
};

export default BannerButton;
