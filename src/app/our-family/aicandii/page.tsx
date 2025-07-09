"use client";

import { vchibanStars } from "#/helpers/MembersData";
import TwitchIcon from "#/assets/svg/socials/twitch";
import TwitterIcon from "#/assets/svg/socials/twitter";
import YoutubeIcon from "#/assets/svg/socials/youtube";
import Tiktok from "#/assets/svg/socials/tiktok";
import PersonalLayout from "#/components/our-family/personal-layout/PersonalLayout";
import Flask from "#/assets/svg/personal-page/aicandii/flask";
import SmallCard from "#/assets/svg/personal-page/aicandii/small-card";
import SparklesAicandii from "#/assets/svg/sparkles/sparkles-aicandii";
import BigCard from "#/assets/svg/personal-page/aicandii/big-card";
import Flask1 from "#/assets/svg/personal-page/aicandii/flask1";
import Flask2 from "#/assets/svg/personal-page/aicandii/flask2";
import Flask3 from "#/assets/svg/personal-page/aicandii/flask3";
import Card1 from "#/assets/svg/personal-page/aicandii/card1";
import Card2 from "#/assets/svg/personal-page/aicandii/card2";
import { motion } from "framer-motion";

const Aicandii = () => {
  const socialLinks = [
    { Icon: TwitchIcon, href: vchibanStars[1].twitch },
    { Icon: TwitterIcon, href: vchibanStars[1].twitter },
    { Icon: YoutubeIcon, href: vchibanStars[1].youtube },
    { Icon: Tiktok, href: vchibanStars[1].tiktok },
  ];
  const showLore = () => {
    console.log("holis");
  };
  return (
    <PersonalLayout
      socialLinks={socialLinks}
      portrait={vchibanStars[1].image}
      name="AICANDII"
      description="AICANDII is a scientist who came through a portal in pursuit of the man who killed her — long story. Portals, science, all that stuff. They’re very smart, very sexy, and they’re the one writing this report so you know it’s true. They live in Blackthorn Mire at the destroyed AICANDII LABS left by the original Candii in this universe. Again, long story. I could write more but at that point, you’d lose the ability to follow the story anyway, so just know that I’m great."
      Sparkles={SparklesAicandii}
      BigIcon={Flask}
      SmallIcon={SmallCard}
      ImgLore1={vchibanStars[1].loreImg1}
      ImgLore2={vchibanStars[1].loreImg2}
      ImgLore3={vchibanStars[1].loreImg3}
      LoreMagnet={BigCard}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.div
          className="flask1 bg-icon"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 40,
            mass: 1,
          }}
        >
          <Flask1 />
        </motion.div>

        <motion.div
          className="flask2 bg-icon"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 40,
            mass: 1,
          }}
        >
          <Flask2 />
        </motion.div>

        <motion.div
          className="flask3 bg-icon"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 40,
            mass: 1,
          }}
        >
          <Flask3 />
        </motion.div>

        <motion.div
          className="card1 bg-icon"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 40,
            mass: 1,
          }}
        >
          <Card1 />
        </motion.div>

        <motion.div
          className="card2 bg-icon"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 40,
            mass: 1,
          }}
        >
          <Card2 />
        </motion.div>
      </motion.div>
    </PersonalLayout>
  );
};

export default Aicandii;
