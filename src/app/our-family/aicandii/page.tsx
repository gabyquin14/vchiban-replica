"use client";

import { vchibanStars } from "#/helpers/members-info";
import TwitchIcon from "#/assets/svg/socials/twitch";
import TwitterIcon from "#/assets/svg/socials/twitter";
import YoutubeIcon from "#/assets/svg/socials/youtube";
import Tiktok from "#/assets/svg/socials/tiktok";
import PersonalLayout from "#/components/our-family/personal-layout/PersonalLayout";
import Flask from "#/assets/svg/personal-page/aicandii/flask";
import SmallCard from "#/assets/svg/personal-page/aicandii/small-card";
import SparklesAicandii from "#/assets/svg/sparkles/sparkles-aicandii";
import BigCard from "#/assets/svg/personal-page/aicandii/big-card";
import LoreSheet from "#/components/our-family/personal-layout/LoreSheet";
import Flask1 from "#/assets/svg/personal-page/aicandii/flask1";
import Flask2 from "#/assets/svg/personal-page/aicandii/flask2";
import Flask3 from "#/assets/svg/personal-page/aicandii/flask3";
import Card1 from "#/assets/svg/personal-page/aicandii/card1";
import Card2 from "#/assets/svg/personal-page/aicandii/card2";

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
    <>
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
        showLore={showLore}
      >
        <Flask1 className="flask1 bg-icon" />
        <Flask2 className="flask2 bg-icon" />
        <Flask3 className="flask3 bg-icon" />
        <Card1 className="card1 bg-icon" />
        <Card2 className="card2 bg-icon" />
      </PersonalLayout>
      {/* <LoreSheet /> */}
    </>
  );
};

export default Aicandii;
