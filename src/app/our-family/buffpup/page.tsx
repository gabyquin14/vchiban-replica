"use client";

import { vchibanStars } from "#/helpers/MembersData";
import TwitchIcon from "#/assets/svg/socials/twitch";
import TwitterIcon from "#/assets/svg/socials/twitter";
import YoutubeIcon from "#/assets/svg/socials/youtube";
import Tiktok from "#/assets/svg/socials/tiktok";
import Paw from "#/assets/svg/personal-page/buffpup/paw";
import SparklesBuffpup from "#/assets/svg/sparkles/sparkles-buffpup";
import PawSmall from "#/assets/svg/personal-page/buffpup/paw-small";
import BoneOutline from "#/assets/svg/personal-page/buffpup/bone-outline";
import PersonalLayout from "#/components/our-family/personal-layout/PersonalLayout";
import Paw1 from "#/assets/svg/personal-page/buffpup/paw1";
import Paw2 from "#/assets/svg/personal-page/buffpup/paw2";
import Bone1 from "#/assets/svg/personal-page/buffpup/bone1";
import Bone2 from "#/assets/svg/personal-page/buffpup/bone2";
import { motion } from "framer-motion";

const Buffpup = () => {
  const socialLinks = [
    { Icon: TwitchIcon, href: vchibanStars[0].twitch },
    { Icon: TwitterIcon, href: vchibanStars[0].twitter },
    { Icon: YoutubeIcon, href: vchibanStars[0].youtube },
    { Icon: Tiktok, href: vchibanStars[0].tiktok },
  ];

  return (
    <PersonalLayout
      socialLinks={socialLinks}
      portrait={vchibanStars[0].image}
      name="BUFFPUP"
      description=" Buffpup is a werewolf who resides in Mourningwood. She spends her days
          roaming through the forests of Stardust Valley. As she grew up without
          a pack, she enjoys taking the pups on a tour of the Valley. She even
          shows them the best spots to pee and to get food, which are separate
          spots to be clear! Sometimes, she even goes as far as Blackthorn Mire
          to bug AICANDII at their facility."
      Sparkles={SparklesBuffpup}
      BigIcon={BoneOutline}
      SmallIcon={PawSmall}
      ImgLore1={vchibanStars[0].loreImg1}
      ImgLore2={vchibanStars[0].loreImg2}
      ImgLore3={vchibanStars[0].loreImg3}
      LoreMagnet={Paw}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.div
          className="bone1 bg-icon"
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
          <Bone1 />
        </motion.div>

        <motion.div
          className="paw1 bg-icon"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 40,
            mass: 1,
          }}
        >
          <Paw1 />
        </motion.div>

        <motion.div
          className="paw2 bg-icon"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 40,
            mass: 1,
          }}
        >
          <Paw2 />
        </motion.div>

        <motion.div
          className="bone2 bg-icon"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 40,
            mass: 1,
          }}
        >
          <Bone2 />
        </motion.div>
      </motion.div>
    </PersonalLayout>
  );
};

export default Buffpup;
