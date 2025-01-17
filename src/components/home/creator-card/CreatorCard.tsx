"use client";
import { FC, useEffect } from "react";
import "./CreatorCard.scss";
import { motion, useAnimate, useDragControls } from "framer-motion";
import Twitch from "#/assets/svg/socials/twitch";
import Twitter from "#/assets/svg/socials/twitter";
import Youtube from "#/assets/svg/socials/youtube";
import { vchibanStars } from "#/helpers/members-info";
import Image from "next/image";
import Link from "next/link";
import TalentExclMark1 from "#/assets/svg/home/talent-excl-1";
import TalentExclMark2 from "#/assets/svg/home/talent-exl-2";
import { springTransition } from "#/helpers/const-animations";

const CreatorCard: FC = () => {
  const controls = useDragControls();
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

  return (
    <section className="creator-card">
      {vchibanStars.map((star) => (
        <article key={star.name} className="creator-card__item">
          <div className="creator-card__image-wrapper">
            <figure className="creator-card__portrait-container">
              <div className="portrait-wrapper">
                <Image
                  alt={`${star.name} portrait`}
                  src={star.image}
                  width={768}
                  height={1350}
                  className={`creator-card__portrait ${star.name.toLocaleLowerCase()}-background`}
                />
              </div>

              <div
                className={`creator-card__background ${star.name.toLocaleLowerCase()}-background`}
              >
                <Image
                  alt={`${star.name}-background`}
                  src={star.backgroundCard}
                  width={481}
                  height={368}
                />
              </div>
            </figure>
          </div>
          <div className="creator-card__info">
            <h2
              className={`creator-card__name ${star.name.toLocaleLowerCase()}`}
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
            <motion.div
              drag
              dragControls={controls}
              className={`main-icon ${star.name.toLocaleLowerCase()}-icon`}
              animate={["float"]}
              variants={{
                float: {
                  x: [0, 20],
                  y: [0, 20],
                  rotate: [0, 8],
                  transition: {
                    delay: 2,
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                },
              }}
            >
              <Image
                src={returnIcon(star.name) as string}
                alt={star.name}
                width={150}
                height={150}
              />
            </motion.div>
          </div>
        </article>
      ))}
      <TalentExclMark1 className="excl-1" />
      <TalentExclMark2 className="excl-2" />

      <div className="floating-icons">
        <motion.div
          drag
          dragControls={controls}
          className={`main-icon buffpup-icon`}
          animate={["float"]}
          variants={{
            float: {
              x: [0, 20],
              y: [0, 20],
              rotate: [0, 8],
              transition: {
                delay: 2,
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
          }}
        >
          <Image
            src={returnIcon("buffpup") as string}
            alt={"buffpup"}
            width={150}
            height={150}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorCard;
