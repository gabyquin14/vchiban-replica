"use client";
import { FC } from "react";
import { vchibanStars } from "#/helpers/members-info";
import Image from "next/image";
import "./MembersPage.scss";
import TwitchIcon from "#/assets/svg/socials/twitch";
import TwitterIcon from "#/assets/svg/socials/twitter";
import YoutubeIcon from "#/assets/svg/socials/youtube";
import Tiktok from "#/assets/svg/socials/tiktok";
import ChevronRight from "#/assets/svg/chevron-right";
import Paw from "#/assets/svg/personal-page/paw";
import LoreArrow from "#/assets/svg/personal-page/lore-arrow";
import SparklesBuffpup from "#/assets/svg/sparkles/sparkles-buffpup";
import PawSmall from "#/assets/svg/personal-page/paw-small";
import BoneOutline from "#/assets/svg/personal-page/bone-outline";

interface PersonalPageLayoutPros {
  portrait: string;
  name: string;
  description: string;
  ImgLore1: string;
  ImgLore2: string;
  ImgLore3: string;
  Sparkles: (props: Record<string, unknown>) => JSX.Element;
  BigIcon: (props: Record<string, unknown>) => JSX.Element;
  SmallIcon: (props: Record<string, unknown>) => JSX.Element;
  LoreMagnet: (props: Record<string, unknown>) => JSX.Element;
  socialLinks: {
    Icon: FC<object>;
    href: string | undefined;
  }[];
  showLore: () => void;
}

const PersonalLayout: FC<PersonalPageLayoutPros> = ({
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
  showLore,
}) => {
  return (
    <div className={`member-page ${name.toLocaleLowerCase()}`}>
      <div className="portrait-wrapper">
        <Image
          alt="Buffpup-portrait"
          src={portrait}
          width={1260}
          height={2032}
          className="portrait"
        />
      </div>

      <div className="members-info">
        <button className="back-btn">
          <ChevronRight className="back-svg" />
          see the rest of the family
        </button>

        <div className="members-name">
          <h1>{name}.</h1>
          <Sparkles className="sparkles" />
          <BigIcon className="bone" />
          <SmallIcon className="paw" />
        </div>

        <p className="description">{description}</p>

        <div className="members-socials">
          <ul className="footer__socials">
            {socialLinks.map(({ Icon, href }, index) => (
              <li key={index} className="social">
                <a href={href} className="social-link">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lore" onClick={showLore}>
          <div className="lore__img-stack">
            <div className="lore-3">
              <Image alt="lore-img" src={ImgLore3} width={420} height={236} />
            </div>
            <div className="lore-2">
              <Image alt="lore-img" src={ImgLore2} width={420} height={236} />
            </div>
            <div className="lore-1">
              <Image alt="lore-img" src={ImgLore1} width={420} height={236} />
            </div>
            <LoreMagnet className="paw" />
            <LoreArrow className="lore-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalLayout;
