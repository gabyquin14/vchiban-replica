"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Twitch from "#/assets/svg/socials/twitch";
import Twitter from "#/assets/svg/socials/twitter";
import Youtube from "#/assets/svg/socials/youtube";
import DraggableSticker from "#/components/ui/draggableSticker/DraggableSticker";

import "./CreatorCard.scss";
import BouncyBgButton from "#/components/ui/bouncy-bg-button/BouncyBgButton";

interface Star {
  image: string;
  name: string;
  twitch: string;
  twitter: string;
  youtube: string;
  tiktok: string;
  vchibanIcon: string;
  backgroundCard: string;
  loreImg1: string;
  loreImg2: string;
  loreImg3: string;
}

interface StarProps {
  star: Star;
  onClick?: () => void;
}

const SOCIAL_ICONS = {
  twitch: Twitch,
  twitter: Twitter,
  youtube: Youtube,
};

const returnIcon = (name: string) => {
  const icons: Record<string, string> = {
    buffpup:
      "https://framerusercontent.com/images/Gb7M4AqcQWZRDDh2l5BlYmd5iNQ.svg",
    aicandii:
      "https://framerusercontent.com/images/CJwb3hPIQJLZotR4xXD9AhZY.svg",
    rosedoodle:
      "https://framerusercontent.com/images/8HR1brtaB3PFmcM4etpx3bPscK8.svg",
    shiabun:
      "https://framerusercontent.com/images/D2eskKKL7ZV7NNnmcgISfwFaRk.svg",
  };
  return icons[name.toLowerCase()] || "";
};

const Card: FC<StarProps> = ({ star, onClick }) => {
  const [isHover, setIsHover] = useState(false);
  const lowerName = star.name.toLowerCase();

  return (
    <article className="creator-card__item">
      {/* Imagen principal */}
      <div
        className="creator-card__image-wrapper"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.figure
          className="creator-card__portrait-container"
          animate={{
            transform: isHover ? "translateY(-2rem)" : "translateY(0rem)",
          }}
        >
          <motion.div
            className="portrait-wrapper"
            animate={{
              transform: isHover
                ? "scale(1.1) translateY(5rem)"
                : "scale(1) translateY(0rem)",
            }}
            onClick={onClick}
          >
            <Image
              alt={`${star.name} portrait`}
              src={star.image}
              width={768}
              height={1350}
              className={`creator-card__portrait ${lowerName}-background`}
            />
          </motion.div>

          <motion.div
            className={`creator-card__background ${lowerName}-background`}
          >
            <Image
              alt={`${star.name}-background`}
              src={star.backgroundCard}
              width={481}
              height={368}
            />
          </motion.div>
        </motion.figure>
      </div>

      {/* Información */}
      <div className="creator-card__info">
        <h2 className={`creator-card__name ${lowerName}`} onClick={onClick}>
          {star.name}
        </h2>
        <ul className="creator-card__socials">
          {Object.entries(SOCIAL_ICONS).map(([key, Icon]) => (
            <li key={key} className={`creator-card__social ${key} spring-btn`}>
              <BouncyBgButton href={star[key as keyof Star]} Icon={Icon} />
            </li>
          ))}
        </ul>
      </div>

      {/* stickers flotantes */}
      <div className="floating-icons">
        <DraggableSticker src={returnIcon(star.name)} alt={star.name} />
      </div>
    </article>
  );
};

export default Card;
