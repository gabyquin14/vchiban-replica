"use client";

import { FC } from "react";
import Link from "next/link";
import "./Footer.scss";
import Logo from "#/assets/svg/dark-vchiban-logo";
import DoubleArrowIcon from "#/assets/svg/double-chevron-right";
import ArrowIcon from "#/assets/svg/chevron-right";
import TwitchIcon from "#/assets/svg/socials/twitch";
import TwitterIcon from "#/assets/svg/socials/twitter";
import YoutubeIcon from "#/assets/svg/socials/youtube";
import Exclamation1 from "#/assets/svg/footer/excl-1";
import Exclamation2 from "#/assets/svg/footer/excl-2";
import Exclamation3 from "#/assets/svg/footer/excl-3";
import Exclamation4 from "#/assets/svg/footer/excl-4";
import Exclamation5 from "#/assets/svg/footer/excl-5";
import Discord from "#/assets/svg/socials/discord";
import { springTransition } from "#/helpers/const-animations";
import { motion } from "framer-motion";

const currentYear = new Date().getFullYear();

const primaryLinks = [
  { label: "game corner", href: "/game-corner" },
  { label: "animations", href: "/animations" },
  { label: "our family", href: "our-family" },
  { label: "events", href: "/events" },
  { label: "home", href: "/" },
];

const secondaryLinks = [
  { label: "merch store", href: "https://shop.vchiban.com/" },
  { label: "brand", href: "/brand" },
  { label: "email us", href: "mailto:talent@vchiban.com" },
  { label: "legal", href: "/legal-information" },
];

const socialLinks = [
  { Icon: TwitchIcon, href: "https://www.twitch.tv/team/vchiban" },
  { Icon: TwitterIcon, href: "https://x.com/vchiban" },
  { Icon: YoutubeIcon, href: "https://www.youtube.com/@vchiban" },
  { Icon: Discord, href: "https://discord.com/invite/XGTmDnntUW" },
];

const Footer: FC = () => {
  return (
    <footer className="footer">
      <section className="footer__info">
        <Logo />
        <p className="footer__info-copyright">
          copyright ©️ {currentYear} VchiBan.
        </p>
      </section>

      {/* Navigation */}
      <nav className="footer__navigation">
        <div className="footer__navigation-groups">
          {/* Primary Links */}
          <div className="footer__navigation-primary">
            <h3 className="footer__title">Site map</h3>
            <ul className="footer__list">
              {primaryLinks.map((link, index) => (
                <li key={link.label} className="footer__item">
                  <a href={link.href} className="footer__link">
                    {index === 0 ? <DoubleArrowIcon /> : <ArrowIcon />}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Links */}
          <div className="footer__navigation-secondary">
            <h3 className="footer__title">More VchiBan</h3>
            <ul className="footer__list">
              {secondaryLinks.map((link, index) => (
                <li key={link.label} className="footer__item">
                  <Link href={link.href} className="footer__link">
                    {index === 0 ? <DoubleArrowIcon /> : <ArrowIcon />}
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <ul className="footer__socials">
          {socialLinks.map(({ Icon, href }, index) => (
            <li key={index} className="social">
              <a href={href} target="_blank" className="social-link spring-btn">
                <Icon />
                <motion.div
                  className="bouncy-bg"
                  whileHover={{ inset: "-4px -12px" }}
                  transition={springTransition}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Background exclamation marks */}
      <Exclamation1 className="excl-mark excl1" />
      <Exclamation2 className="excl-mark excl2" />
      <Exclamation3 className="excl-mark excl3" />
      <Exclamation4 className="excl-mark excl4" />
      <Exclamation5 className="excl-mark excl5" />
    </footer>
  );
};

export default Footer;
