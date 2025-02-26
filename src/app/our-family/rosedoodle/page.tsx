"use client";

import { vchibanStars } from "#/helpers/members-info";
import TwitchIcon from "#/assets/svg/socials/twitch";
import TwitterIcon from "#/assets/svg/socials/twitter";
import YoutubeIcon from "#/assets/svg/socials/youtube";
import Tiktok from "#/assets/svg/socials/tiktok";
import PersonalLayout from "#/components/our-family/personal-layout/PersonalLayout";
import IceCream from "#/assets/svg/personal-page/rosedoodle/ice-cream";
import SmallPencil from "#/assets/svg/personal-page/rosedoodle/small-pencil";
import BigPencil from "#/assets/svg/personal-page/rosedoodle/big-pencil";
import LoreSheet from "#/components/our-family/personal-layout/LoreSheet";
import SparklesRosedoodle from "#/assets/svg/sparkles/sparkles-rosedoodle";
import Pencil1 from "#/assets/svg/personal-page/rosedoodle/pencil1";
import Thingys1 from "#/assets/svg/personal-page/rosedoodle/thingys1";
import Pencil2 from "#/assets/svg/personal-page/rosedoodle/pencil2";
import IceCream1 from "#/assets/svg/personal-page/rosedoodle/icecream1";
import IceCream2 from "#/assets/svg/personal-page/rosedoodle/icecream2";

const Rosedoodle = () => {
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
        Sparkles={SparklesRosedoodle}
        BigIcon={IceCream}
        SmallIcon={SmallPencil}
        ImgLore1={vchibanStars[2].loreImg1}
        ImgLore2={vchibanStars[2].loreImg2}
        ImgLore3={vchibanStars[2].loreImg3}
        LoreMagnet={BigPencil}
        showLore={showLore}
      >
        <Pencil1 className="pencil1 bg-icon" />
        <Pencil2 className="pencil2 bg-icon" />
        <Thingys1 className="thingy bg-icon" />
        <IceCream1 className="icecream1 bg-icon" />
        <IceCream2 className="icecream2 bg-icon" />
      </PersonalLayout>

      {/* <LoreSheet /> */}
    </>
  );
};

export default Rosedoodle;
