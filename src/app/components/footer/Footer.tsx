"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import "./Footer.scss";
import VchibanLogo from "@/assets/svg/vchiban-logo";
import DoubleChevronRight from "#/app/assets/svg/double-chevron-right";
import ChevronRight from "#/app/assets/svg/chevron-right";
import DarkVchiBanLogo from "#/app/assets/svg/dark-vchiban-logo";
import Twitch from "#/app/assets/svg/twitch";
import Twitter from "#/app/assets/svg/twitter";
import Youtube from "#/app/assets/svg/youtube";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <section className="footer__brand">
        <DarkVchiBanLogo />
        <p className="copyright">
          copyright ©️{new Date().getFullYear()} VchiBan.
        </p>
      </section>
      <nav className="footer__nav">
        <div className="footer__nav-list">
          <div className="footer__sitemap">
            <h3 className="nav-title">Site Map</h3>
            <ul className="list">
              <li className="item">
                <a href="" className="link">
                  <DoubleChevronRight />
                  <span>game corner</span>
                </a>
              </li>
              <li className="item">
                <a href="" className="link">
                  <ChevronRight />
                  <span>animations</span>
                </a>
              </li>
              <li className="item">
                <a href="" className="link">
                  <ChevronRight />
                  <span>our family</span>
                </a>
              </li>
              <li className="item">
                <a href="" className="link">
                  <ChevronRight />
                  <span>Events</span>
                </a>
              </li>
              <li className="item">
                <a href="" className="link">
                  <ChevronRight />
                  <span>home</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__more">
            <h3 className="nav-title">More VchiBan</h3>
            <ul className="list">
              <li className="item">
                <Link href="" className="link">
                  <DoubleChevronRight />
                  <span>merch Store</span>
                </Link>
              </li>
              <li className="item">
                <Link href="/brand" className="link">
                  <ChevronRight />
                  <span>brand</span>
                </Link>
              </li>
              <li className="item">
                <Link href="mailto:talent@vchiban.com" className="link">
                  <ChevronRight />
                  <span>email us</span>
                </Link>
              </li>
              <li className="item">
                <Link href="/legal-information" className="link">
                  <ChevronRight />
                  <span>legal</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <ul className="socials-list">
          <li className="social">
            <a href="">
              <Twitch />
            </a>
          </li>
          <li className="social">
            <a href="">
              <Twitter />
            </a>
          </li>
          <li className="social">
            <a href="">
              <Youtube />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
