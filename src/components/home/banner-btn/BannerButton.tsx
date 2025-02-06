import { FC, ReactNode, useState } from "react";
import { motion, spring } from "framer-motion";
import { bouncyTransition, springTransition } from "#/helpers/const-animations";
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
    <button
      className="spring-btn banner"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="content-wrapper">
        <motion.div
          transition={springTransition}
          animate={isHover ? { top: "-2.5rem" } : { top: "-1.2rem" }}
          initial={{ top: "-1.2rem" }}
          className="sparkle1"
        >
          <Sparkle1 />
        </motion.div>
        <motion.div
          transition={springTransition}
          animate={isHover ? { left: "-2rem" } : { left: "-0.7rem" }}
          initial={{ left: "-0.7rem" }}
          className="sparkle2"
        >
          <Sparkle2 />
        </motion.div>
        <motion.div
          transition={springTransition}
          animate={isHover ? { top: "5.5rem" } : { top: "4.2rem" }}
          initial={{ top: "4.2rem" }}
          className="sparkle3"
        >
          <Sparkle3 />
        </motion.div>
        <motion.div
          transition={springTransition}
          animate={
            isHover
              ? { transform: "translate(1rem,-1.25rem) rotate(15deg)" }
              : { transform: "translate(0rem,-0.5rem) rotate(0deg)" }
          }
          initial={{ transform: "translate(0rem,-0.5rem)" }}
          className="excl-mark"
        >
          <ExclMark />
        </motion.div>

        <div className="text-wrapper">
          <span>See more of what we can do</span>
          <span className="mobile-copy">See more</span>
          <ChevronDown />
        </div>
      </div>
      <motion.div
        className="bouncy-bg"
        whileHover={{ inset: "-4px -12px" }}
        transition={springTransition}
      />
    </button>
  );
};

export default BannerButton;
