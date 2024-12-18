"use client";

import { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { springTransition, bouncyTransition } from "#/helpers/const-animations";
import "./SpringButton.scss";
import Image from "next/image";
import BtnExclMark1 from "#/assets/svg/spring-btn/excl-1";
import BtnExclMark2 from "#/assets/svg/spring-btn/excl-2";

interface SpringButtonProps {
  text: string;
  children?: ReactNode;
  customStyles?: string;
  onClick?: () => void;
  isTransitionBouncy?: boolean;
  firstIcon?: string;
  SecondIcon?: React.ElementType;
}

const SpringButton: FC<SpringButtonProps> = ({
  text,
  children,
  customStyles,
  onClick,
  isTransitionBouncy = false,
  firstIcon,
  SecondIcon,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <button className={`spring-btn ${customStyles}`} onClick={onClick}>
      <BtnExclMark1 className="btn-excl1" color="#c0f6e8" />
      <BtnExclMark2 className="btn-excl2" color="#c0f6e8" />
      <BtnExclMark2 className="btn-excl3" color="#c0f6e8" />

      <div className="content-wrapper">
        <motion.div
          className="bouncy-bg"
          whileHover={{ inset: "-4px -12px" }}
          transition={isTransitionBouncy ? bouncyTransition : springTransition}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
        >
          <motion.div
            className="inside-excl-1"
            animate={isHover ? { left: "1.25rem" } : { left: "0" }}
            transition={
              isTransitionBouncy ? bouncyTransition : springTransition
            }
          >
            <BtnExclMark1 className="btn-excl1" color="#1C8C84" />
          </motion.div>

          <motion.div
            className="inside-excl-2"
            animate={isHover ? { right: "1.25rem" } : { right: "0rem" }}
            transition={
              isTransitionBouncy ? bouncyTransition : springTransition
            }
          >
            <BtnExclMark2 className="btn-excl2" color="#1C8C84" />
          </motion.div>
          <motion.div
            className="inside-excl-3"
            animate={isHover ? { right: "1.25rem" } : { right: "0rem" }}
            transition={
              isTransitionBouncy ? bouncyTransition : springTransition
            }
          >
            <BtnExclMark2 className="btn-excl3" color="#1C8C84" />
          </motion.div>
        </motion.div>

        {firstIcon && (
          <Image
            alt="play-icon"
            src={firstIcon}
            width={24}
            height={24}
            className="first-icon"
          />
        )}
        <span className="content">{text}</span>
        {SecondIcon && <SecondIcon className="second-icon" />}
      </div>
    </button>
  );
};

export default SpringButton;
