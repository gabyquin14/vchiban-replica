"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import "./SmallBanner.scss";
import Image from "next/image";
import ChevronDown from "#/assets/svg/chevron-down";
import SpringButton from "../../ui/spring-btn/SpringButton";
import { motion } from "framer-motion";
import ChevronRight from "#/assets/svg/chevron-right";
import { bouncyTransition, springTransition } from "#/helpers/Animations";
import BouncyBgButton from "#/components/ui/bouncy-bg-button/BouncyBgButton";

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
          <BouncyBgButton
            action={() => setShowInfo((prev) => !prev)}
            text={showInfo ? "collapse" : "view more"}
            Icon={ChevronDown}
            iconAnimation={{
              animate: {
                transform: showInfo ? "rotate(180deg)" : "rotate(0deg)",
              },
              transition: bouncyTransition,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
