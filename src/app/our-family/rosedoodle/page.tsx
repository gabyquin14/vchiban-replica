"use client";

import { vchibanStars } from "#/helpers/members-info";
import TwitchIcon from "#/assets/svg/socials/twitch";
import TwitterIcon from "#/assets/svg/socials/twitter";
import YoutubeIcon from "#/assets/svg/socials/youtube";
import Tiktok from "#/assets/svg/socials/tiktok";
import PersonalLayout from "#/components/our-family/personal-layout/PersonalLayout";
import Flask from "#/assets/svg/personal-page/flask";
import SmallCard from "#/assets/svg/personal-page/small-card";
import SparklesAicandii from "#/assets/svg/sparkles/sparkles-aicandii";
import BigCard from "#/assets/svg/personal-page/big-card";
import SparklesShiabun from "#/assets/svg/sparkles/sparkles-shiabun";
import Bunny from "#/assets/svg/personal-page/bunny";
import SmallHeart from "#/assets/svg/personal-page/small-heart";
import BigHeart from "#/assets/svg/personal-page/big-heart";
import IceCream from "#/assets/svg/personal-page/ice-cream";
import SmallPencil from "#/assets/svg/personal-page/small-pencil";
import BigPencil from "#/assets/svg/personal-page/big-pencil";
import LoreSheet from "#/components/our-family/personal-layout/LoreSheet";

const Shiabun = () => {
  const socialLinks = [
    { Icon: TwitchIcon, href: vchibanStars[2].twitch },
    { Icon: TwitterIcon, href: vchibanStars[2].twitter },
    { Icon: YoutubeIcon, href: vchibanStars[2].youtube },
    { Icon: Tiktok, href: vchibanStars[2].tiktok },
  ];

  const showLore = () => {
    console.log("holis");
  };

  return (
    <>
      <PersonalLayout
        socialLinks={socialLinks}
        portrait={vchibanStars[2].image}
        name="ROSEDOODLE"
        description="Rosedoodle is a reanimated pet cat who gained a pseudo-human form through the ‘nurturing love’ of her Honey Buns. She lives in Blossom Square at an arcade called Doodle Dash. She spends her days bouncing through the aisles of crane games and prize counters in pursuit of every gachapon capsule she can. It’s good that the manager stays in the basement and never emerges. Rose is doing a good job taking care of the place, after all!"
        Sparkles={SparklesShiabun}
        BigIcon={IceCream}
        SmallIcon={SmallPencil}
        ImgLore1={vchibanStars[2].loreImg1}
        ImgLore2={vchibanStars[2].loreImg2}
        ImgLore3={vchibanStars[2].loreImg3}
        LoreMagnet={BigPencil}
        showLore={showLore}
      />

      <LoreSheet />
    </>
  );
};

export default Shiabun;
