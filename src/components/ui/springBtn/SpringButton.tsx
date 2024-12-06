"use client";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { springTransition, bouncyTransition } from "#/helpers/const-animations";
import "./SpringButton.scss";
import Image from "next/image";

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
  return (
    <button className={`spring-btn ${customStyles}`} onClick={onClick}>
      <motion.div
        className="bouncy-bg"
        whileHover={{ scale: 1.1 }}
        transition={isTransitionBouncy ? bouncyTransition : springTransition}
      />

      <div className="content-wrapper">
        {/* {FirstIcon && <FirstIcon />} */}
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

      {children && <div className="spring-btn__extras">{children}</div>}
    </button>
  );
};

export default SpringButton;
