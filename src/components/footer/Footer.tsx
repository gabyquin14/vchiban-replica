"use client";

import { FC } from "react";
import Link from "next/link";
import "./Footer.scss";
import Logo from "#/assets/svg/dark-vchiban-logo";
import DoubleArrowIcon from "#/assets/svg/double-chevron-right";
import ArrowIcon from "#/assets/svg/chevron-right";
import TwitchIcon from "#/assets/svg/twitch";
import TwitterIcon from "#/assets/svg/twitter";
import YoutubeIcon from "#/assets/svg/youtube";

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
  { Icon: TwitchIcon, href: "" },
  { Icon: TwitterIcon, href: "" },
  { Icon: YoutubeIcon, href: "" },
];

const Footer: FC = () => {
  return (
    <footer className="footer">
      {/* Logo and Copyright */}
      <section className="footer__info">
        <Logo />
        <p className="footer__info-copyright">©️ {currentYear} VchiBan.</p>
      </section>

      {/* Navigation */}
      <nav className="footer__navigation">
        <div className="footer__navigation-groups">
          {/* Primary Links */}
          <div className="footer__navigation-primary">
            <h3 className="footer__title">Site Map</h3>
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
              <a href={href} className="social-link">
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
