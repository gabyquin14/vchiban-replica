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
import LoreSheet from "#/components/our-family/personal-layout/LoreSheet";

const Shiabun = () => {
  const socialLinks = [
    { Icon: TwitchIcon, href: vchibanStars[3].twitch },
    { Icon: TwitterIcon, href: vchibanStars[3].twitter },
    { Icon: YoutubeIcon, href: vchibanStars[3].youtube },
    { Icon: Tiktok, href: vchibanStars[3].tiktok },
  ];

  const showLore = () => {
    console.log("holis");
  };

  return (
    <>
      <PersonalLayout
        socialLinks={socialLinks}
        portrait={vchibanStars[3].image}
        name="SHIABUN"
        description="ShiaBun is the latest pop sensation in Stardust City! Our delightful pink bunny boy has come so far, from performing at Club Bun to now selling out the Gooberton Arena. His songs play from every radio within Stardust City, almost like someone hacked the radio stations -- or maybe they're just that catchy. Despite a detour into Horse World through a portal, which we don’t need to discuss, Shia continues singing for the love of the art."
        Sparkles={SparklesShiabun}
        BigIcon={Bunny}
        SmallIcon={SmallHeart}
        ImgLore1={vchibanStars[3].loreImg1}
        ImgLore2={vchibanStars[3].loreImg2}
        ImgLore3={vchibanStars[3].loreImg3}
        LoreMagnet={BigHeart}
        showLore={showLore}
      />
      <LoreSheet />
    </>
  );
};

export default Shiabun;
