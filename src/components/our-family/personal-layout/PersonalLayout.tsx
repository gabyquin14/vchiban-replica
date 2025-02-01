"use client";
import { FC, ReactNode, useState } from "react";
import Image from "next/image";
import ChevronRight from "#/assets/svg/chevron-right";
import LoreArrow from "#/assets/svg/personal-page/lore-arrow";
import { motion } from "framer-motion";
import { bouncyTransition, springTransition } from "#/helpers/const-animations";
import FooterSeparator from "#/components/ui/footerSeparator/FooterSeparator";
import "./MembersPage.scss";
import BouncyBgButton from "#/components/ui/bouncy-bg-button/BouncyBgButton";

interface PersonalPageLayoutProps {
  portrait: string;
  name: string;
  description: string;
  ImgLore1: string;
  ImgLore2: string;
  ImgLore3: string;
  Sparkles: FC;
  BigIcon: FC;
  SmallIcon: FC;
  LoreMagnet: FC;
  socialLinks: { Icon: FC<object>; href: string | undefined }[];
  showLore: () => void;
  children?: ReactNode;
}

const PersonalLayout: FC<PersonalPageLayoutProps> = ({
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

  const loreImages = [
    {
      src: ImgLore3,
      className: "lore-3",
      initialTransform: "rotate(-11deg) translate(0rem, 0rem)",
      hoverTransform: "rotate(-14deg) translate(-1rem, 0rem)",
    },
    {
      src: ImgLore2,
      className: "lore-2",
      initialTransform: "rotate(2deg) translate(0rem, 0rem)",
      hoverTransform: "rotate(2deg) translate(1rem, -1rem)",
    },
    {
      src: ImgLore1,
      className: "lore-1",
      initialTransform: "rotate(-5deg) translate(0rem, 0rem)",
      hoverTransform: "rotate(-6deg) translate(0rem, -2.5rem)",
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      <div className={`member-page ${name.toLocaleLowerCase()}`}>
        <div className="portrait-wrapper">
          <Image
            alt="portrait"
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

          <ul className="footer__socials">
            {socialLinks.map(({ Icon, href }, index) => (
              <li key={index} className="social">
                <BouncyBgButton href={href as string} Icon={Icon} />
              </li>
            ))}
          </ul>

          <motion.div
            className="lore"
            onClick={showLore}
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
          >
            <motion.div className="lore__img-stack">
              {loreImages.map(
                (
                  { src, className, initialTransform, hoverTransform },
                  index
                ) => (
                  <motion.div
                    key={index}
                    className={className}
                    animate={{
                      transform: isHover ? hoverTransform : initialTransform,
                    }}
                    initial={{ transform: initialTransform }}
                    transition={bouncyTransition}
                  >
                    <Image alt={className} src={src} width={420} height={236} />
                  </motion.div>
                )
              )}
              <motion.div
                className={`magnet ${name.toLocaleLowerCase()}`}
                animate={{
                  transform: isHover
                    ? "rotate(6deg) translate(0rem, -4rem)"
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
      <FooterSeparator name={name.toLocaleLowerCase()} />
    </div>
  );
};

export default PersonalLayout;
