import ChevronDown from "#/assets/svg/chevron-down";
import House from "#/assets/svg/house";
import AicandiiSilhouette from "#/assets/svg/our-family/aicandii-silhouette";
import BannerExcl1 from "#/assets/svg/our-family/banner-excl-1";
import BannerExcl2 from "#/assets/svg/our-family/banner-excl-2";
import BuffpupSilhouette from "#/assets/svg/our-family/buffpup-silhouette";
import RoseSilhouette from "#/assets/svg/our-family/rose-silhouette";
import ShiabunSilhouette from "#/assets/svg/our-family/shiabun-silhouette";
import SparklesOurFamily from "#/assets/svg/sparkles/sparkles-our-family";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import { springTransition } from "#/helpers/const-animations";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMouseParallax } from "#/hooks/useMouseParallax";

interface BannerProps {
  scrollToCreatorCard: () => void;
}

const OurFamilyBanner: React.FC<BannerProps> = ({ scrollToCreatorCard }) => {
  const {
    handleMouseMove,
    houseX,
    houseY,
    exclMarkX,
    exclMarkY,
    membersX,
    membersY,
  } = useMouseParallax();

  const silhouettes = [
    { Component: ShiabunSilhouette, className: "shia" },
    { Component: RoseSilhouette, className: "rose" },
    { Component: AicandiiSilhouette, className: "candii" },
    { Component: BuffpupSilhouette, className: "buff" },
  ];

  const [isHover, setIsHover] = useState(false);

  const familyDescription = () => (
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

  return (
    <div className="family__banner" onMouseMove={handleMouseMove}>
      <HeaderSection
        as="header"
        title="OUR FAMILY."
        preDescription="Four virtual content creators walk into a cafe..."
        description={familyDescription()}
        SparklesComponent={SparklesOurFamily}
        customStyles="our-family"
      />

      <motion.div className="excl-marks" style={{ x: exclMarkX, y: exclMarkY }}>
        <BannerExcl1 className="excl-1" />
        <BannerExcl2 className="excl-2" />
      </motion.div>

      <motion.div
        className="members"
        initial="hidden"
        animate="visible"
        style={{ x: membersX, y: membersY }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {silhouettes.map(({ Component, className }, index) => (
          <motion.div
            key={className}
            className={className}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Component />
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="house" style={{ x: houseX, y: houseY }}>
        <House />
      </motion.div>

      <button className="lore-btn" onClick={scrollToCreatorCard}>
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
  );
};

export default OurFamilyBanner;
