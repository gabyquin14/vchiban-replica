"use client";

import { vchibanStars } from "#/helpers/MembersData";
import TwitchIcon from "#/assets/svg/socials/twitch";
import TwitterIcon from "#/assets/svg/socials/twitter";
import YoutubeIcon from "#/assets/svg/socials/youtube";
import Tiktok from "#/assets/svg/socials/tiktok";
import PersonalLayout from "#/components/our-family/personal-layout/PersonalLayout";
import IceCream from "#/assets/svg/personal-page/rosedoodle/ice-cream";
import SmallPencil from "#/assets/svg/personal-page/rosedoodle/small-pencil";
import BigPencil from "#/assets/svg/personal-page/rosedoodle/big-pencil";
import SparklesRosedoodle from "#/assets/svg/sparkles/sparkles-rosedoodle";
import Pencil1 from "#/assets/svg/personal-page/rosedoodle/pencil1";
import Thingys1 from "#/assets/svg/personal-page/rosedoodle/thingys1";
import Pencil2 from "#/assets/svg/personal-page/rosedoodle/pencil2";
import IceCream1 from "#/assets/svg/personal-page/rosedoodle/icecream1";
import IceCream2 from "#/assets/svg/personal-page/rosedoodle/icecream2";
import { motion } from "framer-motion";

const Rosedoodle = () => {
  const socialLinks = [
    { Icon: TwitchIcon, href: vchibanStars[3].twitch },
    { Icon: TwitterIcon, href: vchibanStars[3].twitter },
    { Icon: YoutubeIcon, href: vchibanStars[3].youtube },
    { Icon: Tiktok, href: vchibanStars[3].tiktok },
  ];

  return (
    <PersonalLayout
      socialLinks={socialLinks}
      portrait={vchibanStars[3].image}
      name="ROSEDOODLE"
      description="Rosedoodle is a reanimated pet cat who gained a pseudo-human form through the ‘nurturing love’ of her Honey Buns. She lives in Blossom Square at an arcade called Doodle Dash. She spends her days bouncing through the aisles of crane games and prize counters in pursuit of every gachapon capsule she can. It’s good that the manager stays in the basement and never emerges. Rose is doing a good job taking care of the place, after all!"
      Sparkles={SparklesRosedoodle}
      BigIcon={IceCream}
      SmallIcon={SmallPencil}
      ImgLore1={vchibanStars[3].loreImg1}
      ImgLore2={vchibanStars[3].loreImg2}
      ImgLore3={vchibanStars[3].loreImg3}
      LoreMagnet={BigPencil}
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
          className="pencil1 bg-icon"
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
          <Pencil1 />
        </motion.div>

        <motion.div
          className="pencil2 bg-icon"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 40,
            mass: 1,
          }}
        >
          <Pencil2 />
        </motion.div>

        <motion.div
          className="thingy bg-icon"
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
          <Thingys1 />
        </motion.div>

        <motion.div
          className="icecream1 bg-icon"
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
          <IceCream1 />
        </motion.div>

        <motion.div
          className="icecream2 bg-icon"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 40,
            mass: 1,
          }}
        >
          <IceCream2 />
        </motion.div>
      </motion.div>
    </PersonalLayout>
  );
};

export default Rosedoodle;
