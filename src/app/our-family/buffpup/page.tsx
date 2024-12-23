"use client";

import { vchibanStars } from "#/helpers/members-info";
import TwitchIcon from "#/assets/svg/socials/twitch";
import TwitterIcon from "#/assets/svg/socials/twitter";
import YoutubeIcon from "#/assets/svg/socials/youtube";
import Tiktok from "#/assets/svg/socials/tiktok";
import Paw from "#/assets/svg/personal-page/paw";
import SparklesBuffpup from "#/assets/svg/sparkles/sparkles-buffpup";
import PawSmall from "#/assets/svg/personal-page/paw-small";
import BoneOutline from "#/assets/svg/personal-page/bone-outline";
import PersonalLayout from "#/components/our-family/personal-layout/PersonalLayout";
import LoreSheet from "#/components/our-family/personal-layout/LoreSheet";

const Buffpup = () => {
  const socialLinks = [
    { Icon: TwitchIcon, href: vchibanStars[0].twitch },
    { Icon: TwitterIcon, href: vchibanStars[0].twitter },
    { Icon: YoutubeIcon, href: vchibanStars[0].youtube },
    { Icon: Tiktok, href: vchibanStars[0].tiktok },
  ];

  const showLore = () => {
    console.log("holis");
  };

  return (
    <>
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
        showLore={showLore}
      />
      <LoreSheet />
    </>
  );
};

export default Buffpup;
