"use client";
import { FC, useState } from "react";
import "./CreatorCard.scss";
import { motion } from "framer-motion";
import Twitch from "#/assets/svg/socials/twitch";
import Twitter from "#/assets/svg/socials/twitter";
import Youtube from "#/assets/svg/socials/youtube";
import Image from "next/image";
import Link from "next/link";
import { springTransition } from "#/helpers/const-animations";
import DraggableSticker from "#/components/ui/draggableSticker/DraggableSticker";
import { useRouter } from "next/router";

interface StarProps {
  star: {
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
  };
}

const Card: FC<StarProps> = ({ star }) => {
  const [isHover, setisHover] = useState(false);
  const router = useRouter();

  const returnIcon = (name: string) => {
    const starName = name.toLocaleLowerCase();
    if (starName === "buffpup")
      return "https://framerusercontent.com/images/Gb7M4AqcQWZRDDh2l5BlYmd5iNQ.svg";
    if (starName === "aicandii")
      return "https://framerusercontent.com/images/CJwb3hPIQJLZotR4xXD9AhZY.svg";
    if (starName === "rosedoodle")
      return "https://framerusercontent.com/images/8HR1brtaB3PFmcM4etpx3bPscK8.svg";
    if (starName === "shiabun")
      return "https://framerusercontent.com/images/D2eskKKL7ZV7NNnmcgISfwFaRk.svg";
  };

  const redirectToPersonalPage = (name: string) => {
    router.push(`/our-family/${name.toLocaleLowerCase()}`);
  };

  return (
    <article className="creator-card__item">
      <div
        className="creator-card__image-wrapper"
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
      >
        <motion.figure
          className="creator-card__portrait-container"
          animate={{
            transform: isHover ? "translateY(-2rem)" : "translateY(0rem)",
          }}
        >
          <motion.div
            animate={{
              transform: isHover
                ? "scale(1.1) translateY(5rem)"
                : "scale(1) translateY(0rem)",
            }}
            className="portrait-wrapper"
            onClick={() => redirectToPersonalPage(star.name)}
          >
            <Image
              alt={`${star.name} portrait`}
              src={star.image}
              width={768}
              height={1350}
              className={`creator-card__portrait ${star.name.toLocaleLowerCase()}-background`}
            />
          </motion.div>

          <motion.div
            className={`creator-card__background ${star.name.toLocaleLowerCase()}-background`}
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
      <div className="creator-card__info">
        <h2
          className={`creator-card__name ${star.name.toLocaleLowerCase()}`}
          onClick={() => redirectToPersonalPage(star.name)}
        >
          {star.name}
        </h2>
        <ul className="creator-card__socials">
          <li className="creator-card__social twitch spring-btn">
            <Link href={star.twitch} target="_blank">
              <Twitch />
              <motion.div
                className="bouncy-bg"
                whileHover={{ inset: "-6px -6px" }}
                transition={springTransition}
              />
            </Link>
          </li>
          <li className="creator-card__social twitter spring-btn">
            <Link href={star.twitter} target="_blank">
              <Twitter />
              <motion.div
                className="bouncy-bg"
                whileHover={{ inset: "-6px -6px" }}
                transition={springTransition}
              />
            </Link>
          </li>
          <li className="creator-card__social youtube spring-btn">
            <Link href={star.youtube} target="_blank">
              <Youtube />
              <motion.div
                className="bouncy-bg"
                whileHover={{ inset: "-6px -6px" }}
                transition={springTransition}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="floating-icons">
        <DraggableSticker
          src={returnIcon(star.name) as string}
          alt={star.name}
        />
      </div>
    </article>
  );
};

export default Card;
