"use client";
import { FC, ReactNode, useState } from "react";
import Image from "next/image";
import ChevronRight from "#/assets/svg/chevron-right";
import LoreArrow from "#/assets/svg/personal-page/lore-arrow";
import { motion } from "framer-motion";
import { bouncyTransition } from "#/helpers/const-animations";
import FooterSeparator from "#/components/ui/footerSeparator/FooterSeparator";
import "./MembersPage.scss";
import BouncyBgButton from "#/components/ui/bouncy-bg-button/BouncyBgButton";
import { useRouter } from "next/navigation";

interface PersonalPageLayoutProps {
  portrait: string;
  name: string;
  description: string;
  ImgLore1: string;
  ImgLore2: string;
  ImgLore3: string;
  Sparkles: (props: Record<string, unknown>) => React.JSX.Element;
  BigIcon: (props: Record<string, unknown>) => React.JSX.Element;
  SmallIcon: (props: Record<string, unknown>) => React.JSX.Element;
  LoreMagnet: FC;
  socialLinks: { Icon: FC<object>; href: string | undefined }[];
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
  children,
}) => {
  const router = useRouter();
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
        <div className="members-info">
          <motion.button
            className="back-btn"
            onClick={() => router.back()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 40,
              mass: 1,
            }}
          >
            <ChevronRight className="back-svg" />
            see the rest of the family
          </motion.button>
          <motion.div
            className={`members-name ${name.toLocaleLowerCase()}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 170,
              damping: 35,
              mass: 1,
            }}
          >
            <h1>{name}.</h1>
            <Sparkles className="sparkles" />

            <motion.div
              className="big-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <BigIcon />
            </motion.div>

            <motion.div
              className="small-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <SmallIcon />
            </motion.div>
          </motion.div>

          <motion.p
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 40,
              mass: 1,
            }}
          >
            {description}
          </motion.p>

          <motion.ul
            className="footer__socials"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {socialLinks.map(({ Icon, href }, index) => (
              <motion.li
                key={index}
                className="social"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <BouncyBgButton href={href as string} Icon={Icon} />
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="lore"
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            initial={{ opacity: 0, rotate: -6 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 35,
              mass: 1,
            }}
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

        <motion.div
          className="portrait-wrapper"
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 5,
            type: "spring",
            stiffness: 200,
            damping: 50,
            mass: 1,
          }}
        >
          <Image
            alt="portrait"
            src={portrait}
            width={1260}
            height={2032}
            className="portrait"
          />
        </motion.div>
      </div>
      <FooterSeparator name={name.toLocaleLowerCase()} />
    </div>
  );
};

export default PersonalLayout;
