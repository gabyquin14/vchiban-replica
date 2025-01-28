"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import "./SmallBanner.scss";
import Image from "next/image";
import ChevronDown from "#/assets/svg/chevron-down";
import SpringButton from "../../ui/springBtn/SpringButton";
import { motion } from "framer-motion";
import ChevronRight from "#/assets/svg/chevron-right";
import { bouncyTransition, springTransition } from "#/helpers/const-animations";

interface SmallBannerProps {
  bgImg: string;
  topImg?: string;
  bottomImg?: string;
  text: string;
  setShowInfo: Dispatch<SetStateAction<boolean>>;
  showInfo: boolean;
}

const SmallBanner: React.FC<SmallBannerProps> = ({
  bgImg,
  topImg,
  bottomImg,
  text,
  showInfo,
  setShowInfo,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="container">
      <div className="image-wrapper">
        <Image
          alt="games"
          src={bgImg}
          width={676}
          height={136}
          className="bg-img"
        />
      </div>
      <div className="type-of-endeavor">
        <h3>{text}</h3>
        <div className="img-btn-display">
          {topImg && (
            <Image
              alt="games"
              src={topImg}
              width={213}
              height={120}
              className="gooba-1"
            />
          )}
          {bottomImg && (
            <Image
              alt="games"
              src={bottomImg}
              width={213}
              height={120}
              className="gooba-2"
            />
          )}
          <button
            className="spring-btn game-corner"
            onClick={() => setShowInfo((prev) => !prev)}
          >
            <span className="content">
              {showInfo ? "collapse" : "view more"}
            </span>
            <motion.div
              className="bouncy-bg"
              whileHover={{ inset: "-4px -12px" }}
              transition={bouncyTransition}
            ></motion.div>
            <motion.div
              className="chevron"
              animate={{
                transform: showInfo ? "rotate(180deg)" : "rotate(0deg)",
              }}
              transition={springTransition}
            >
              <ChevronDown />
            </motion.div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
