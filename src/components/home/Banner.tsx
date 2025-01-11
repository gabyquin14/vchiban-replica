"use client";
import {
  motion,
  useTransform,
  useMotionValue,
  useTime,
  useAnimate,
} from "framer-motion";
import ChevronDown from "#/assets/svg/chevron-down";
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

export default function Banner() {
  const [isHover, setIsHover] = useState(false);
  const time = useTime();

  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();
  const [scope4, animate4] = useAnimate();

  useEffect(() => {
    animate1(
      scope1.current,
      {
        x: [0, 20, 0],
        y: [0, -20, 0],
        rotate: [0, -5, 0],
      },
      {
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror",
      }
    );
    animate2(
      scope2.current,
      {
        x: [0, -25, 0],
        y: [0, -10, 0],
        rotate: [0, 15, 0],
      },
      {
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror",
      }
    );
    animate3(
      scope3.current,
      {
        x: [0, 20, 0],
        y: [0, -20, 0],
        rotate: [0, 15, 0],
      },
      {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
      }
    );
    animate4(
      scope4.current,
      {
        x: [0, -20, 0],
        y: [0, -20, 0],
        rotate: [0, -5, 0],
      },
      {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
      }
    );
  }, [animate1, scope1, animate2, scope2, animate3, scope3, animate4, scope4]);

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
        <motion.div ref={scope1} className="buff-wrapper wrapper">
          <ColoredBuffIcon className="buff" />
        </motion.div>
        <motion.div ref={scope2} className="candi-wrapper wrapper">
          <ColoredCandiIcon className="candi" />
        </motion.div>
        <motion.div ref={scope3} className="shia-wrapper wrapper">
          <ColoredShiaIcon className="shia" />
        </motion.div>
        <motion.div ref={scope4} className="rose-wrapper wrapper">
          <ColoredRoseIcon className="rose" />
        </motion.div>
      </div>
    </section>
  );
}
