import React from "react";
import "./SmallBanner.scss";
import Image from "next/image";
import ChevronDown from "#/assets/svg/chevron-down";
import SpringButton from "../../ui/springBtn/SpringButton";

interface SmallBannerProps {
  bgImg: string;
  topImg?: string;
  bottomImg?: string;
  text: string;
}

const SmallBanner: React.FC<SmallBannerProps> = ({
  bgImg,
  topImg,
  bottomImg,
  text,
}) => {
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
          <SpringButton
            SecondIcon={ChevronDown}
            isTransitionBouncy={true}
            text="collapse"
            customStyles="game-corner"
          />
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
