"use client";

import { vchibanStars } from "#/helpers/members-info";
import TwitchIcon from "#/assets/svg/socials/twitch";
import TwitterIcon from "#/assets/svg/socials/twitter";
import YoutubeIcon from "#/assets/svg/socials/youtube";
import Tiktok from "#/assets/svg/socials/tiktok";
import PersonalLayout from "#/components/our-family/personal-layout/PersonalLayout";
import SparklesShiabun from "#/assets/svg/sparkles/sparkles-shiabun";
import Bunny from "#/assets/svg/personal-page/shiabun/bunny";
import SmallHeart from "#/assets/svg/personal-page/shiabun/small-heart";
import BigHeart from "#/assets/svg/personal-page/shiabun/big-heart";
import BunnySpring from "#/assets/svg/personal-page/shiabun/bunny-spring";
import SpringBunnyHeart from "#/assets/svg/personal-page/shiabun/spring-bunny-heart";
import BunnyHeart from "#/assets/svg/personal-page/shiabun/bunny-heart";
import Spring from "#/assets/svg/personal-page/shiabun/spring";
import { motion } from "framer-motion";

const Shiabun = () => {
  const socialLinks = [
    { Icon: TwitchIcon, href: vchibanStars[2].twitch },
    { Icon: TwitterIcon, href: vchibanStars[2].twitter },
    { Icon: YoutubeIcon, href: vchibanStars[2].youtube },
    { Icon: Tiktok, href: vchibanStars[2].tiktok },
  ];

  return (
    <PersonalLayout
      socialLinks={socialLinks}
      portrait={vchibanStars[2].image}
      name="SHIABUN"
      description="ShiaBun is the latest pop sensation in Stardust City! Our delightful pink bunny boy has come so far, from performing at Club Bun to now selling out the Gooberton Arena. His songs play from every radio within Stardust City, almost like someone hacked the radio stations -- or maybe they're just that catchy. Despite a detour into Horse World through a portal, which we don’t need to discuss, Shia continues singing for the love of the art."
      Sparkles={SparklesShiabun}
      BigIcon={Bunny}
      SmallIcon={SmallHeart}
      ImgLore1={vchibanStars[2].loreImg1}
      ImgLore2={vchibanStars[2].loreImg2}
      ImgLore3={vchibanStars[2].loreImg3}
      LoreMagnet={BigHeart}
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
          className="spring1 bg-icon"
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
          <BunnySpring />
        </motion.div>

        <motion.div
          className="bunny1 bg-icon"
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
          <SpringBunnyHeart />
        </motion.div>

        <motion.div
          className="bunny2 bg-icon"
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
          <BunnyHeart />
        </motion.div>

        <motion.div
          className="spring2 bg-icon"
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
          <Spring />
        </motion.div>
      </motion.div>
    </PersonalLayout>
  );
};

export default Shiabun;
