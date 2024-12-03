import { FC } from "react";
import "./CreatorCard.scss";
import { motion } from "framer-motion";
import Twitch from "#/assets/svg/twitch";
import Twitter from "#/assets/svg/twitter";
import Youtube from "#/assets/svg/youtube";
import { vchibanStars } from "#/helpers/members-info";
import Image from "next/image";
import Link from "next/link";

const CreatorCard: FC = () => {
  return (
    <div className="creator-card">
      {vchibanStars.map((star) => (
        <article key={star.name}>
          <div className="portrait-wrapper">
            <div className="overflow">
              <Image
                alt={`${star.name}`}
                src={star.image}
                width={768}
                height={1350}
                className="portrait"
              />
              <div className={`background ${star.name.toLocaleLowerCase()}`}>
                <Image
                  alt={`${star.name}-background`}
                  src={star.backgroundCard}
                  width={481}
                  height={368}
                />
              </div>
            </div>
            <div className="star-socials">
              <h2 className={`${star.name.toLocaleLowerCase()}`}>
                {star.name}
              </h2>
              <ul className="socials-list">
                <li className="social twitch">
                  <Link href={star.twitch}>
                    <Twitch />
                  </Link>
                </li>
                <li className="social twitter">
                  <Link href={star.twitter}>
                    <Twitter />
                  </Link>
                </li>
                <li className="social youtube">
                  <Link href={star.youtube}>
                    <Youtube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CreatorCard;
