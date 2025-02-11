"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variant,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Assets & Icons
import Sparkles from "#/assets/svg/sparkles/sparkles";
import House from "#/assets/svg/house";
import BlueExclMark1 from "#/assets/svg/home/blue-excl-1";
import BlueExclMark2 from "#/assets/svg/home/blue-excl-2";
import ColoredBuffIcon from "#/assets/svg/colored-buff-icon";
import ColoredCandiIcon from "#/assets/svg/colored-candi-icon";
import ColoredShiaIcon from "#/assets/svg/colored-shia-icon";
import ColoredRoseIcon from "#/assets/svg/colored-rose-icon";

// Helpers & Data
import {
  buffAnimation,
  candiAnimation,
  roseAnimation,
  shiaAnimation,
} from "#/helpers/const-animations";
import { vchibanStars } from "#/helpers/members-info";

// Components
import HeaderSection from "../ui/headerSection/HeaderSection";
import BannerButton from "./banner-btn/BannerButton";
import DraggableSticker from "../ui/draggableSticker/DraggableSticker";

// Styles
import "./Home.scss";

const floatingIcons = [
  { alt: "buff", icon: <ColoredBuffIcon />, animation: buffAnimation },
  { alt: "candi", icon: <ColoredCandiIcon />, animation: candiAnimation },
  { alt: "shia", icon: <ColoredShiaIcon />, animation: shiaAnimation },
  { alt: "rose", icon: <ColoredRoseIcon />, animation: roseAnimation },
];

const Banner = () => {
  // State for mouse position and window dimensions
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Motion values for animations
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 14 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 14 });
  const houseSmoothX = useSpring(x, { stiffness: 100, damping: 40 });
  const houseSmoothY = useSpring(y, { stiffness: 100, damping: 40 });

  // Handle window resize
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () =>
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Parallax transformations
  const houseX = useTransform(
    houseSmoothX,
    [0, windowDimensions.width],
    [-15, 15]
  );
  const houseY = useTransform(
    houseSmoothY,
    [0, windowDimensions.height],
    [-15, 15]
  );
  const exclMarkX = useTransform(
    smoothX,
    [0, windowDimensions.width],
    [-10, 10]
  );
  const exclMarkY = useTransform(
    smoothY,
    [0, windowDimensions.height],
    [-10, 10]
  );

  // Mouse movement handler
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
    x.set(clientX);
    y.set(clientY);
  };

  return (
    <section
      className="home-section"
      aria-labelledby="banner-title"
      onMouseMove={handleMouseMove}
    >
      <div className="banner-wrapper">
        {/* Header Section */}
        <HeaderSection
          as="header"
          title="FOUND FAMILY <br />INDIE GROUP."
          SparklesComponent={Sparkles}
          customStyles="banner"
        />

        {/* Team Members */}
        <div className="team-members">
          <div className="members-wrapper">
            <ul className="stars-list" role="list" aria-label="Team members">
              {vchibanStars.map(({ name, image }) => (
                <li
                  key={name}
                  className={`star-portrait ${name.toLowerCase()}`}
                  aria-label={`Portrait of ${name}`}
                >
                  <Image
                    src={image}
                    alt={`Portrait of ${name}`}
                    priority
                    layout="responsive"
                    width={791}
                    height={1274}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Banner Button */}
        <div className="see-more-btn-wrapper">
          <BannerButton />
        </div>
      </div>

      {/* Background Graphics */}
      <div className="bg-wrapper">
        <div className="bg-svgs">
          <motion.div className="house" style={{ x: houseX, y: houseY }}>
            <House />
          </motion.div>
          <motion.div
            className="excl-marks"
            style={{ x: exclMarkX, y: exclMarkY }}
          >
            <BlueExclMark1 />
            <BlueExclMark2 />
          </motion.div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="floating-icons">
        {floatingIcons.map(({ alt, icon, animation }) => (
          <DraggableSticker
            key={alt}
            alt={alt}
            floatAnimation={animation as Variant}
          >
            {icon}
          </DraggableSticker>
        ))}
      </div>
    </section>
  );
};

export default Banner;
