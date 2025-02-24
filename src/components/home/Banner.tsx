"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

// Assets & Icons
import Sparkles from "#/assets/svg/sparkles/sparkles";
import House from "#/assets/svg/house";
import BlueExclMark1 from "#/assets/svg/home/blue-excl-1";
import BlueExclMark2 from "#/assets/svg/home/blue-excl-2";

// Helpers
import { floatingIcons } from "#/helpers/home-banner";
import { useMouseParallax } from "#/hooks/useMouseParallax";
import { vchibanStars } from "#/helpers/members-info";
import useAnimationDelay from "#/hooks/useAnimationDelay";

// Components
import HeaderSection from "../ui/headerSection/HeaderSection";
import BannerButton from "./banner-btn/BannerButton";
import DraggableSticker from "../ui/draggableSticker/DraggableSticker";

// Styles
import "./Home.scss";

interface BannerProps {
  scrollToCreatorCard: () => void;
}

const Banner: React.FC<BannerProps> = ({ scrollToCreatorCard }) => {
  const { handleMouseMove, houseX, houseY, exclMarkX, exclMarkY } =
    useMouseParallax();

  const animate = useAnimationDelay(0);

  return (
    <section
      className="home-section"
      aria-labelledby="banner-title"
      onMouseMove={handleMouseMove}
    >
      <div className="banner-wrapper">
        <HeaderSection
          as="header"
          title="FOUND FAMILY <br />INDIE GROUP."
          SparklesComponent={Sparkles}
          customStyles="banner"
        />

        <div className="team-members">
          <div className="members-wrapper">
            <motion.ul
              className="stars-list"
              role="list"
              aria-label="Team members"
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {vchibanStars.map(({ name, image }, index) => (
                <motion.li
                  key={name}
                  className={`star-portrait ${name.toLowerCase()}`}
                  aria-label={`Portrait of ${name}`}
                  initial={{ opacity: 0, y: 300 }}
                  animate={
                    animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <Image
                    src={image}
                    alt={`Portrait of ${name}`}
                    priority
                    layout="responsive"
                    width={791}
                    height={1274}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="see-more-btn-wrapper" onClick={scrollToCreatorCard}>
          <BannerButton />
        </div>
      </div>

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

      <motion.div
        className="floating-icons"
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        {floatingIcons.map(({ alt, icon, animation }, index) => (
          <motion.div
            key={alt}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 0.3,
              delay: index * 0.1 + 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={alt}
          >
            <DraggableSticker alt={alt} floatAnimation={animation}>
              {icon}
            </DraggableSticker>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Banner;
