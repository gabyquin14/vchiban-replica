import { FC } from "react";
import "./MembersRainbow.scss";
import { motion } from "framer-motion";
import Twitch from "#/assets/svg/twitch";
import Twitter from "#/assets/svg/twitter";
import Youtube from "#/assets/svg/youtube";
import { vchibanStars } from "#/helpers/members-info";
import Image from "next/image";
import Link from "next/link";

const MembersRaibow: FC = () => {
  const returnLowercase = (name: string) => name.toLocaleLowerCase();

  return (
    <section className="members-card">
      {vchibanStars.map((star) => (
        <article
          key={star.name}
          className={`members-card__item ${returnLowercase(star.name)}`}
        >
          <div className="members-card__image-wrapper">
            <figure className="members-card__portrait-container">
              <div className="portrait-wrapper">
                <Image
                  alt={`${star.name} portrait`}
                  src={star.image}
                  width={768}
                  height={1350}
                  className={`members-card__portrait ${returnLowercase(
                    star.name
                  )}`}
                />
              </div>

              <div
                className={`members-card__background ${returnLowercase(
                  star.name
                )}-background`}
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
        </article>
      ))}
    </section>
  );
};

export default MembersRaibow;
