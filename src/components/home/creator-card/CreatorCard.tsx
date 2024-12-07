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
              <li className="creator-card__social twitch">
                <Link href={star.twitch}>
                  <Twitch />
                </Link>
              </li>
              <li className="creator-card__social twitter">
                <Link href={star.twitter}>
                  <Twitter />
                </Link>
              </li>
              <li className="creator-card__social youtube">
                <Link href={star.youtube}>
                  <Youtube />
                </Link>
              </li>
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
};

export default CreatorCard;
