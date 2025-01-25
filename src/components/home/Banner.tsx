"use client";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variant,
} from "framer-motion";
import Sparkles from "#/assets/svg/sparkles/sparkles";
import {
  buffAnimation,
  candiAnimation,
  roseAnimation,
  shiaAnimation,
} from "#/helpers/const-animations";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 100, damping: 14 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 14 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const houseX = useTransform(smoothX, [0, windowDimensions?.width], [-15, 15]);
  const houseY = useTransform(
    smoothY,
    [0, windowDimensions?.height],
    [-15, 15]
  );

  const exclMarkX = useTransform(
    smoothX,
    [0, windowDimensions?.width],
    [-10, 10]
  );
  const exclMarkY = useTransform(
    smoothY,
    [0, windowDimensions?.height],
    [-10, 10]
  );

  const handleMouse = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
    x.set(clientX);
    y.set(clientY);
  };

  return (
    <section
      className="home-section"
      aria-labelledby="banner-title"
      onMouseMove={handleMouse}
    >
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
                />
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
