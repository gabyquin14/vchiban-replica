"use client";
import { motion, useAnimate, Variant } from "framer-motion";
import Sparkles from "#/assets/svg/sparkles/sparkles";
import { springTransition } from "#/helpers/const-animations";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { vchibanStars } from "#/helpers/members-info";
import HeaderSection from "../ui/headerSection/HeaderSection";
import "./Home.scss";
import House from "#/assets/svg/house";
import BlueExclMark1 from "#/assets/svg/home/blue-excl-1";
import BlueExclMark2 from "#/assets/svg/home/blue-excl-2";
import ColoredBuffIcon from "#/assets/svg/colored-buff-icon";
import ColoredCandiIcon from "#/assets/svg/colored-candi-icon";
import ColoredShiaIcon from "#/assets/svg/colored-shia-icon";
import ColoredRoseIcon from "#/assets/svg/colored-rose-icon";
import BannerButton from "./banner-btn/BannerButton";
import DraggableSticker from "../ui/draggableSticker/DraggableSticker";

const Banner = () => {
  const buffAnimation = {
    x: [0, 20, 0],
    y: [0, -20, 0],
    rotate: [0, -5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    },
  };

  const candiAnimation = {
    x: [0, -25, 0],
    y: [0, -10, 0],
    rotate: [0, 15, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    },
  };

  const shiaAnimation = {
    x: [0, 20, 0],
    y: [0, -20, 0],
    rotate: [0, 15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
    },
  };

  const roseAnimation = {
    x: [0, -20, 0],
    y: [0, -20, 0],
    rotate: [0, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
    },
  };
  return (
    <section className="home-section" aria-labelledby="banner-title">
      <div className="banner-wrapper">
        <HeaderSection
          as="header"
          title="FOUND FAMILY <br />INDIE GROUP."
          SparklesComponent={Sparkles}
          customStyles="banner"
        />

        <div className="members-wrapper">
          <ul className="stars-list" role="list" aria-label="Team members">
            {vchibanStars.map((member) => (
              <li
                key={member.name}
                className={`star-portrait ${member.name.toLowerCase()}`}
                aria-label={`Portrait of ${member.name}`}
              >
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  layout="responsive"
                  width={791}
                  height={1274}
                />{" "}
                <ColoredBuffIcon />
              </li>
            ))}
          </ul>
        </div>

        <div className="see-more-btn-wrapper">
          <BannerButton />
        </div>
      </div>
      <div className="bg-wrapper">
        <div className="bg-svgs">
          <House className="house" />
          <div className="excl-marks">
            <BlueExclMark1 />
            <BlueExclMark2 />
          </div>
        </div>
      </div>

      <div className="floating-icons">
        <DraggableSticker alt="buff" floatAnimation={buffAnimation as Variant}>
          <ColoredBuffIcon />
        </DraggableSticker>

        <DraggableSticker
          alt="candi"
          floatAnimation={candiAnimation as Variant}
        >
          <ColoredCandiIcon />
        </DraggableSticker>

        <DraggableSticker alt="shia" floatAnimation={shiaAnimation as Variant}>
          <ColoredShiaIcon />
        </DraggableSticker>
        <DraggableSticker alt="rose" floatAnimation={roseAnimation as Variant}>
          <ColoredRoseIcon />
        </DraggableSticker>
      </div>
    </section>
  );
};

export default Banner;
