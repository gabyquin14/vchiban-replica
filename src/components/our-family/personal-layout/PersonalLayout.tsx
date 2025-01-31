"use client";
import { FC, ReactNode, useState } from "react";
import Image from "next/image";
import "./MembersPage.scss";
import ChevronRight from "#/assets/svg/chevron-right";
import LoreArrow from "#/assets/svg/personal-page/lore-arrow";
import { motion } from "framer-motion";
import { bouncyTransition, springTransition } from "#/helpers/const-animations";

interface PersonalPageLayoutPros {
  portrait: string;
  name: string;
  description: string;
  ImgLore1: string;
  ImgLore2: string;
  ImgLore3: string;
  Sparkles: (props: Record<string, unknown>) => JSX.Element;
  BigIcon: (props: Record<string, unknown>) => JSX.Element;
  SmallIcon: (props: Record<string, unknown>) => JSX.Element;
  LoreMagnet: (props: Record<string, unknown>) => JSX.Element;
  socialLinks: {
    Icon: FC<object>;
    href: string | undefined;
  }[];
  showLore: () => void;
  children?: ReactNode;
}

const PersonalLayout: FC<PersonalPageLayoutPros> = ({
  socialLinks,
  portrait,
  name,
  description,
  Sparkles,
  BigIcon,
  SmallIcon,
  ImgLore1,
  ImgLore2,
  ImgLore3,
  LoreMagnet,
  showLore,
  children,
}) => {
  const [isHover, setIsHover] = useState(false);
  const magnetAnimation = name.toLocaleLowerCase().includes("aicandii")
    ? "rotate(6deg) translate(0rem, -4rem)"
    : "rotate(-6deg) translate(0rem, -1rem)";

  return (
    <div className={`member-page ${name.toLocaleLowerCase()}`}>
      <div className="portrait-wrapper">
        <Image
          alt="Buffpup-portrait"
          src={portrait}
          width={1260}
          height={2032}
          className="portrait"
        />
      </div>

      <div className="members-info">
        <button className="back-btn">
          <ChevronRight className="back-svg" />
          see the rest of the family
        </button>

        <div className={`members-name ${name.toLocaleLowerCase()}`}>
          <h1>{name}.</h1>
          <Sparkles className="sparkles" />
          <BigIcon className="big-icon" />
          <SmallIcon className="small-icon" />
        </div>

        <p className="description">{description}</p>

        <div className="members-socials">
          <ul className="footer__socials">
            {socialLinks.map(({ Icon, href }, index) => (
              <li key={index} className="social">
                <a href={href} className="social-link spring-btn">
                  <Icon />
                  <motion.div
                    className="bouncy-bg"
                    whileHover={{ inset: "-4px -4px" }}
                    transition={springTransition}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          className="lore"
          onClick={showLore}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
        >
          <motion.div className="lore__img-stack">
            <motion.div
              className="lore-3"
              animate={{
                transform: isHover
                  ? "rotate(-14deg) translate(-1rem, 0rem)"
                  : "rotate(-11deg) translate(0rem, 0rem)",
              }}
              initial={{ transform: "rotate(-11deg) translate(0rem, 0rem)" }}
              transition={bouncyTransition}
            >
              <Image alt="lore-img" src={ImgLore3} width={420} height={236} />
            </motion.div>
            <motion.div
              className="lore-2"
              animate={{
                transform: isHover
                  ? "rotate(2deg) translate(1rem, -1rem)"
                  : "rotate(2deg) translate(0rem, 0rem)",
              }}
              initial={{ transform: "rotate(2deg) translate(0rem, 0rem)" }}
              transition={bouncyTransition}
            >
              <Image alt="lore-img" src={ImgLore2} width={420} height={236} />
            </motion.div>
            <motion.div
              className="lore-1"
              animate={{
                transform: isHover
                  ? "rotate(-6deg) translate(0rem, -2.5rem)"
                  : "rotate(-5deg) translate(0rem, 0rem)",
              }}
              initial={{ transform: "rotate(-5deg) translate(0rem, 0rem)" }}
              transition={bouncyTransition}
            >
              <Image alt="lore-img" src={ImgLore1} width={420} height={236} />
            </motion.div>
            <motion.div
              className={`magnet ${name.toLocaleLowerCase()}`}
              animate={{
                transform: isHover
                  ? magnetAnimation
                  : "rotate(0deg) translate(0rem, 0rem)",
              }}
              initial={{ transform: "rotate(0deg) translate(0rem, 0rem)" }}
              transition={bouncyTransition}
            >
              <LoreMagnet />
            </motion.div>
            <LoreArrow className="lore-arrow" />
          </motion.div>
        </motion.div>
      </div>
      <div className={`backgroung-imgs ${name.toLocaleLowerCase()}`}>
        {children}
      </div>
    </div>
  );
};

export default PersonalLayout;
