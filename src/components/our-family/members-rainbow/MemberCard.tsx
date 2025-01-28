import { motion } from "framer-motion";
import { FC, useState } from "react";
import Image from "next/image";
import { springTransition } from "#/helpers/const-animations";

interface Star {
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

const MemberCard: FC<Star> = ({ star }) => {
  const returnLowercase = (name: string) => name.toLocaleLowerCase();
  const [isHover, setisHover] = useState(false);

  const returnTransition = (nameStr: string) => {
    const name = returnLowercase(nameStr);
    if (name.includes("buffpup"))
      return "scale(1.1) translate(6rem,8rem) rotate(-6deg)";
    if (name.includes("aicandii"))
      return "scale(1.1) translate(2rem, 6rem) rotate(-2deg)";
    if (name.includes("shiabun"))
      return "scale(1.1) translate(-6rem, 6rem) rotate(8deg)";
    if (name.includes("rosedoodle"))
      return "scale(1.1) translate(-3rem, 6rem) rotate(4deg)";
  };

  return (
    <article
      key={star.name}
      className={`members-card__item ${returnLowercase(star.name)}`}
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <motion.div
        className="members-card__image-wrapper"
        animate={{
          transform: isHover ? "translateY(-1rem)" : "translateY(0rem)",
        }}
      >
        <motion.figure className="members-card__portrait-container">
          <motion.div
            className="portrait-wrapper"
            animate={{
              transform: isHover
                ? returnTransition(star.name)
                : "scale(1) translateY(0rem)",
            }}
          >
            <Image
              alt={`${star.name} portrait`}
              src={star.image}
              width={768}
              height={1350}
              className={`members-card__portrait ${returnLowercase(star.name)}`}
            />
          </motion.div>

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
        </motion.figure>
      </motion.div>
    </article>
  );
};

export default MemberCard;
