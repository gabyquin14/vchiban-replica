"use client";
import "./OurFamily.scss";
import dynamic from "next/dynamic";
import ChevronDown from "#/assets/svg/chevron-down";
import SparklesOurFamily from "#/assets/svg/sparkles/sparkles-our-family";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import SparklesStardustValley from "#/assets/svg/sparkles/sparkles-stardust-valley";
import StardustValley from "#/components/our-family/stardus-valley/StardustValley";
import SparklesBetterTogether from "#/assets/svg/sparkles/sparkles-better-together";
import Image from "next/image";
import SpringButton from "#/components/ui/springBtn/SpringButton";
import ChevronRight from "#/assets/svg/chevron-right";
import FooterSeparator from "#/components/ui/footerSeparator/FooterSeparator";
import MembersRaibow from "#/components/our-family/members-rainbow/MembersRainbow";
import BuffpupIcon from "#/assets/svg/our-family/buffpup-icon";
import AicandiiIcon from "#/assets/svg/our-family/aicandii-icon";
import RoseIcon from "#/assets/svg/our-family/rose-icon";
import ShiabunIcon from "#/assets/svg/our-family/shiabun-icon";
import TogetherExcl1 from "#/assets/svg/our-family/together-excl-1";
import TogetherExcl2 from "#/assets/svg/our-family/together-excl-2";
import TogetherExcl3 from "#/assets/svg/our-family/together-excl-3";
import BannerExcl1 from "#/assets/svg/our-family/banner-excl-1";
import BannerExcl2 from "#/assets/svg/our-family/banner-excl-2";
import ShiabunSilhouette from "#/assets/svg/our-family/shiabun-silhouette";
import RoseSilhouette from "#/assets/svg/our-family/rose-silhouette";
import AicandiiSilhouette from "#/assets/svg/our-family/aicandii-silhouette";
import BuffpupSilhouette from "#/assets/svg/our-family/buffpup-silhouette";
import House from "#/assets/svg/house";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { bouncyTransition, springTransition } from "#/helpers/const-animations";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const OurFamily = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 100, damping: 14 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 14 });
  const smoothMembersX = useSpring(x, { stiffness: 300, damping: 30 });
  const smoothMembersY = useSpring(y, { stiffness: 300, damping: 30 });

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

  const houseX = useTransform(smoothX, [0, windowDimensions?.width], [-5, 5]);
  const houseY = useTransform(smoothY, [0, windowDimensions?.height], [-5, 5]);
  const membersX = useTransform(
    smoothMembersX,
    [0, windowDimensions?.width],
    [-15, 15]
  );
  const membersY = useTransform(
    smoothMembersY,
    [0, windowDimensions?.height],
    [-15, 15]
  );

  const exclMarkX = useTransform(
    smoothX,
    [0, windowDimensions?.width],
    [-5, 5]
  );
  const exclMarkY = useTransform(
    smoothY,
    [0, windowDimensions?.height],
    [-5, 5]
  );

  const handleMouse = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
    x.set(clientX);
    y.set(clientY);
  };

  const familyDescription = () => {
    return (
      <>
        <span>Wait, but really.</span>
        <span className="stars">
          <span>Buffpup</span>, <span>AiCandii</span>, <span>rosedoodle</span>,
          and <span>ShiaBun</span> — each came from a very different part of
          Stardust Valley, some even hailing from outside the city proper. But
          while each had their responsibilities, their hopes, and their goals…
          Something was missing.
        </span>
      </>
    );
  };

  const [isHover, setIsHover] = useState(false);

  return (
    <div className="family" onMouseMove={handleMouse}>
      <div className="family__banner">
        <HeaderSection
          as="header"
          title="OUR FAMILY."
          preDescription="Four virtual content creators walk into a cafe..."
          description={familyDescription()}
          SparklesComponent={SparklesOurFamily}
          customStyles="our-family"
        />
        {/* Background images tracking mouse movement */}
        <motion.div
          className="excl-marks"
          style={{ x: exclMarkX, y: exclMarkY }}
        >
          <BannerExcl1 className="excl-1" />
          <BannerExcl2 className="excl-2" />
        </motion.div>
        <motion.div className="members" style={{ x: membersX, y: membersY }}>
          <ShiabunSilhouette className="shia" />
          <RoseSilhouette className="rose" />
          <AicandiiSilhouette className="candii" />
          <BuffpupSilhouette className="buff" />
        </motion.div>

        <motion.div className="house" style={{ x: houseX, y: houseY }}>
          <House />
        </motion.div>

        <button className="lore-btn">
          <motion.div
            className="more-lore"
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
          >
            <motion.div
              className="chevron"
              animate={{
                transform: isHover ? "translateY(1rem)" : "translateY(0rem)",
              }}
              initial={{ transform: "translateY(0rem)" }}
              transition={springTransition}
            >
              <ChevronDown />
            </motion.div>
            See more lore
            <motion.div
              className="chevron"
              animate={{
                transform: isHover ? "translateY(1rem)" : "translateY(0rem)",
              }}
              initial={{ transform: "translateY(0rem)" }}
              transition={springTransition}
            >
              <ChevronDown />
            </motion.div>
          </motion.div>
        </button>
      </div>
      <div className="family__stardust-map">
        <div className="header-and-map">
          <HeaderSection
            as="header"
            title="STARDUST VALLEY."
            SparklesComponent={SparklesStardustValley}
            customStyles="stardust-valley"
          />
          <StardustValley />
        </div>

        <p className="description">
          They all went to get a coffee on the same day, at the same time. A
          small indulgence, one that they’d satiated plenty of times before. But
          this time it was different. They turned up to their usual spot,
          VchiBan COFFEE, and found themselves faced with a new reality.
        </p>

        <div className="home-vchiban">
          <ReactPlayer
            url={`https://www.youtube.com/embed/4CxlS6IYnFM&t?autoplay=1&rel=0&modestbranding=1&playsinline=1&color=white`}
            controls={true}
            className="video"
          />
        </div>

        <div className="description">
          <p>
            It’s hard to pinpoint exactly who spoke to who first. It was an easy
            laugh to cover an awkward brush, the overlap at the counter, not
            enough seats, someone’s coat stuck under someone’s seat chair… And
            then the four of them ended up sitting at a booth, feeling like
            maybe they didn’t have to get coffee alone anymore.
          </p>
          <p>
            Like maybe they had someone who could match their jokes, who
            understood them without having to explain it. They’d wake up eager
            to check their phone, or send memes that reminded them of the other.
            And then they’d end up in calls for hours, goofing, laughing, losing
            track of time.
          </p>
          <p>
            But it was never lost time, the time they spent together. It was
            carefully curated, cherished and kept close to the chest. They
            worked hard to be there for one another, they supported one another.
            And then it became exactly what they always knew it was.
          </p>
        </div>
      </div>
      <div className="rainbow-content-wrapper">
        <h2 className="became-family-title">
          They became a family; they became <span>VchiBan.</span>
        </h2>
        <div className="rainbow-showcase">
          <MembersRaibow />
          <BuffpupIcon className="buff" />
          <AicandiiIcon className="candii" />
          <RoseIcon className="rose" />
          <ShiabunIcon className="shia" />
        </div>
      </div>
      <div className="endeavors">
        <HeaderSection
          as="div"
          title="BETTER TOGETHER, <br/> NOW AND FOREVER."
          description={
            <>
              VchiBan is more than just a VTuber Friend group - they&apos;re a
              found family with <br /> a wide array of creative & innovative
              endeavors up their sleeve!
            </>
          }
          SparklesComponent={SparklesBetterTogether}
          customStyles="better-together"
        />
        <div className="endeavors__list">
          <div className="container">
            <div className="image-wrapper">
              <Image
                alt="games"
                src="https://framerusercontent.com/images/tZn0Ml3CD1UtGfNJgC5xXrk01pE.jpg"
                width={676}
                height={136}
                className="bg-img"
              />
            </div>
            <div className="type-of-endeavor">
              <h3>Games</h3>
              <SpringButton
                firstIcon="https://framerusercontent.com/images/XpGvthSNzunUXiPh7ihK39s3I.svg"
                SecondIcon={ChevronRight}
                isTransitionBouncy={true}
                text="play now"
              />
            </div>
          </div>
          <div className="container">
            <div className="image-wrapper">
              <Image
                alt="games"
                src="https://framerusercontent.com/images/nyHiTFwhvV1BwUOwDuBUrOZTA.png"
                width={676}
                height={136}
                className="bg-img"
              />
            </div>
            <div className="type-of-endeavor">
              <h3>Merch</h3>

              <SpringButton
                firstIcon="https://framerusercontent.com/images/cx8wHmlKBcVwCZSMFNRz7ZE.svg"
                SecondIcon={ChevronRight}
                isTransitionBouncy={true}
                text="view merch"
              />
            </div>
          </div>
          <div className="container">
            <div className="image-wrapper">
              <Image
                alt="games"
                src="https://framerusercontent.com/images/Oniq6Ilkfg3uldP14tnYY1KWso.png"
                width={676}
                height={136}
                className="bg-img"
              />
            </div>
            <div className="type-of-endeavor">
              <h3>Events</h3>

              <SpringButton
                firstIcon="https://framerusercontent.com/images/57YdWeGgVZbcT0ajkrGCZOXFeA.svg"
                SecondIcon={ChevronRight}
                isTransitionBouncy={true}
                text="see events"
              />
            </div>
          </div>
        </div>
        <TogetherExcl1 className="excl-1" />
        <TogetherExcl2 className="excl-2" />
        <TogetherExcl3 className="excl-3" />
      </div>
      <FooterSeparator />
    </div>
  );
};

export default OurFamily;
